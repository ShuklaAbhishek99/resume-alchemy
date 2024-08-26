import resumeService from "@/appwrite/db/resume";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addResume } from "@/features/resumeSlice";
import { useUser } from "@clerk/clerk-react";
import { debounce } from "lodash";
import { Brain, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

function Summary() {
    const resumeData = useSelector((state) => state.resume);
    const { register, handleSubmit, reset, setValue } = useForm();
    const { isSignedIn, isLoaded } = useUser();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [summaries, setSummaries] = useState([]);
    const [loadSummaries, setLoadSummaries] = useState(false);

    useEffect(() => {
        reset({
            summary: resumeData?.summary || "",
        });
    }, [reset, resumeData?.summary]);

    async function generateText(prompt) {
        try {
            const response = await fetch("/api/generateText", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            return data;
        } catch (error) {
            console.log("Error from generateText :: ", error);
        }
    }

    async function fetchAIResponse() {
        setSummaries([]);
        setLoadSummaries(true);
        try {
            const data = await generateText(
                `Please provide a list of summaries for the job title ${resumeData?.jobTitle} categorized by three experience levels: Internship, Entry Level, Associate, Mid-Senior level, Director, and Executive. Each summary should be 3 to 4 lines long and include the following fields: 'summary' and 'experience_level'. Format the response as a JSON array with each item containing these fields.`
            );
            const responseString = data?.data || "";
            const arrayString = responseString.slice(7, -4);
            const originalData = JSON.parse(arrayString);
            setSummaries(originalData);
        } catch (error) {
            console.log("Error in fetchAIResponse :: ", error);
        } finally {
            setLoadSummaries(false);
        }
    }

    const saveSummary = async (data) => {
        if (isSignedIn && isLoaded && data?.summary?.length !== 0) {
            setLoading(true);
            try {
                const updatedResumeData = await resumeService.updateResume(
                    resumeData.$id,
                    {
                        ...data,
                    }
                );

                if (updatedResumeData) {
                    dispatch(addResume(updatedResumeData));
                }

                toast.success("Summary saved successfully");
            } catch (error) {
                toast.error(`Error saving summary ${error}`);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleInputChange = debounce((e) => {
        const { name, value } = e.target;

        dispatch(
            addResume({
                ...resumeData,
                [name]: value,
            })
        );
    }, 300);

    const handleAISummaryClick = (AIsummary) => {
        setValue("summary", AIsummary);

        const updatedResumeData = {
            ...resumeData,
            summary: AIsummary,
        };

        dispatch(addResume(updatedResumeData));
    };

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Summary</h2>
                <p>Add Summary for your job title</p>

                <form className="mt-7" onSubmit={handleSubmit(saveSummary)}>
                    <div className="flex justify-between items-end">
                        <label>Add Summary</label>
                        <Button
                            variant="outline"
                            onClick={fetchAIResponse}
                            type="button"
                            size="sm"
                            className="border-primary text-primary flex gap-2"
                        >
                            <Brain className="h-4 w-4" /> Generate from AI
                        </Button>
                    </div>
                    <Textarea
                        name="summary"
                        className="mt-5"
                        {...register("summary")}
                        onChange={handleInputChange}
                    />
                    <div className="mt-2 flex justify-end">
                        <Button
                            type="submit"
                            disabled={
                                loading || resumeData?.summary?.length === 0
                            }
                        >
                            {loading ? (
                                <LoaderCircle className="animate-spin" />
                            ) : (
                                "Save"
                            )}
                        </Button>
                    </div>
                </form>
            </div>

            {loadSummaries && (
                <div className="space-y-2 my-6 mx-3">
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[90%]" />
                </div>
            )}

            {summaries?.length !== 0 && (
                <div className="my-5">
                    <h2 className="font-bold text-lg mx-3">Suggestions</h2>
                    {summaries?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleAISummaryClick(item?.summary)}
                            className="p-5 shadow-lg my-4 rounded-lg cursor-pointer opacity-0 obo-fade-in"
                            style={{ "--i": index + 1 }}
                        >
                            <h2 className="font-bold my-1 text-primary">
                                {item?.experience_level}
                            </h2>
                            <p>{item?.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Summary;
