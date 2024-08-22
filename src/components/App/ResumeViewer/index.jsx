import Header from "../Custom/Header";
import { Button } from "@/components/ui/button";
import ResumePreview from "../Dashboard/Resume/ResumeEditor/PreviewSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { useDispatch, useSelector } from "react-redux";
import resumeService from "@/appwrite/db/resume";
import { addResume } from "@/features/resumeSlice";
import { Loader2, Share2 } from "lucide-react";

import Confetti from "react-confetti";
import { useUser } from "@clerk/clerk-react";

function ResumeView() {
    const { user, isLoaded, isSignedIn } = useUser();
    const { resumeId } = useParams();
    const resumeData = useSelector((state) => state.resume);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        setLoading(true);

        resumeService
            .getResume(resumeId)
            .then((data) => {
                if (data) {
                    dispatch(addResume(data));
                }
            })
            .catch((err) => {
                console.log("Error fetching resume ", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [resumeId, dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const HandleDownload = () => {
        window.print();
    };

    return loading ? (
        <div className="flex justify-center items-center h-[500px]">
            <Loader2 size={"50px"} className="text-primary animate-spin" />
        </div>
    ) : (
        <div>
            <div id="no-print">
                <Header />

                <div className="my-10 mx-10 md:mx-20 lg:mx-36">
                    {user?.id === resumeData.userId && (
                        <>
                            <h2 className="text-center text-2xl font-medium">
                                <span className="text-primary">
                                    Congratulations!{" "}
                                </span>
                                Your AI-Generated Ultimate Resume is Ready!
                            </h2>
                            <p className="my-2 text-center text-gray-400">
                                You&apos;re all set to download your resume.
                                Share your unique resume link with friends,
                                family, and colleagues to showcase your
                                achievements.
                            </p>
                        </>
                    )}

                    <div className="flex justify-between gap-3 flex-wrap my-10 mx-auto">
                        <div className="mx-auto">
                            <Button onClick={HandleDownload}>Download</Button>
                        </div>
                        <div className="mx-auto">
                            <RWebShare
                                data={{
                                    text: "I'm excited to share my professional resume with you. Please click the link to view the details.",
                                    url: `/resume/${resumeId}`,
                                    title: `${resumeData?.firstName} ${resumeData?.lastName} Resume`,
                                }}
                            >
                                <Button className="flex gap-1">
                                    <Share2 size={'20px'} className="mx-1" />
                                    <span className="">Share</span>
                                </Button>
                            </RWebShare>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10 mx-10 md:mx-20 lg:mx-36">
                <div id="print-area">
                    <ResumePreview />
                </div>
            </div>

            {showConfetti && user?.id === resumeData.userId && <Confetti />}
        </div>
    );
}

export default ResumeView;
