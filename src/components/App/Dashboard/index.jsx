import { useUser } from "@clerk/clerk-react";
import AddResume from "./Resume/AddResume";
import ResumeCard from "./Resume/ResumeCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import resumeService from "@/appwrite/db/resume";
import { Query } from "appwrite";
import { addResumeList } from "@/features/resumeListSlice";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

function Dashboard() {
    const { user, isSignedIn, isLoaded } = useUser();
    const resumeListData = useSelector((state) => state.resumeList);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        if (isSignedIn && isLoaded) {
            resumeService
                .getResumes([Query.equal("userId", [user?.id])])
                .then((data) => {
                    const resumesData = data?.documents;

                    dispatch(addResumeList(resumesData));
                })
                .catch((err) => {
                    console.log("Error fetching resumes list :: ", err);
                })
                .finally(() => setLoading(false));
        }
    }, [resumeListData?.length, dispatch, isSignedIn, isLoaded, user?.id]);

    return (
        <div id="top" className="p-10 md:px-20 lg:px-32">
            <h2 className="font-bold text-2xl my-2">My Resume</h2>
            <p className="my-3">
                Start Creating AI resume for your next job role
            </p>
            <div>
                <div className="grid min-[499px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4 mt-6">
                    <AddResume />
                    {loading ? (
                        <div className="flex flex-col space-y-3">
                            <Skeleton className="h-[260px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-8" />
                            </div>
                        </div>
                    ) : resumeListData?.length === 0 ? (
                        <div className="text-4xl font-bold text-gray-500 text-center my-auto mx-1">
                            Create a New Resume now
                        </div>
                    ) : (
                        resumeListData?.map((resume) => (
                            <div
                                key={resume?.$id}
                                className="hover:scale-105 hover:shadow-md transition-all"
                            >
                                <ResumeCard
                                    resumeId={resume?.$id}
                                    resumeTitle={resume?.resumeTitle}
                                    themeColor={resume?.themeColor}
                                />
                            </div>
                        ))
                    )}
                </div>
                <a
                    href="#top"
                    className="fixed bottom-4 right-4"
                    title="move to top"
                >
                    <Button className="p-1 opacity-70">
                        <ArrowUp />
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Dashboard;
