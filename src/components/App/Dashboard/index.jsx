import { useUser } from "@clerk/clerk-react";
import AddResume from "./Resume/AddResume";
import ResumeCard from "./Resume/ResumeCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import resumeService from "@/appwrite/db/resume";
import { Query } from "appwrite";
import { addResumeList } from "@/features/resumeListSlice";
import { Skeleton } from "@/components/ui/skeleton";

function Dashboard() {
    const { user, isSignedIn, isLoaded } = useUser();
    const resumeListData = useSelector((state) => state.resumeList);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        if (isSignedIn && isLoaded) {
            resumeService
                .getResumes([Query.equal("userId", [user.id])])
                .then((data) => {
                    const resumesData = data.documents;

                    dispatch(addResumeList(resumesData));
                })
                .catch((err) => {
                    console.log("Error fetching resumes list :: ", err);
                })
                .finally(() => setLoading(false));
        }
    }, [resumeListData?.length, dispatch, isSignedIn, isLoaded, user?.id]);

    return (
        <div className="p-10 md:px-20 lg:px-32">
            <h2 className="font-bold text-2xl">My Resume</h2>
            <p>Start Creating AI resume for your next job role</p>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
                    <AddResume />
                    {loading ? (
                        <div className="flex flex-col space-y-3">
                            <Skeleton className="h-[260px] w-[260px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-8 w-[250px]" />
                            </div>
                        </div>
                    ) : (
                        resumeListData?.map((resume) => (
                            <div key={resume.$id}>
                                <ResumeCard
                                    resumeId={resume.$id}
                                    resumeTitle={resume.resumeTitle}
                                    themeColor={resume.themeColor}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
