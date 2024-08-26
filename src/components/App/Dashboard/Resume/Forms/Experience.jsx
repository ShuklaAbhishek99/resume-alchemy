import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Brain, LoaderCircle, Trash2 } from "lucide-react";
import RichTextEditor from "@/components/App/RTE";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { debounce } from "lodash";
import { addResume } from "@/features/resumeSlice";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
import resumeService from "@/appwrite/db/resume";

function Experience() {
    const resumeData = useSelector((state) => state.resume);
    const [experienceList, setExperienceList] = useState([]);
    const { isSignedIn, isLoaded } = useUser();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [loadSummaries, setLoadSummaries] = useState(false);

    useEffect(() => {
        if (resumeData?.experience) {
            const expData = JSON.parse(resumeData?.experience);

            setExperienceList(expData || []);
        }
    }, [resumeData?.experience]);

    const handleInputChange = debounce((e, id) => {
        const { name, value } = e.target;

        const updatedExpList = experienceList.map((item) =>
            item?.id === id ? { ...item, [name]: value } : item
        );

        setExperienceList(updatedExpList);

        dispatch(
            addResume({
                ...resumeData,
                experience: JSON.stringify(updatedExpList),
            })
        );
    }, 300);

    const handleRichTextEditor = (e, name, id) => {
        const { value } = e.target;

        const updatedExpList = experienceList.map((item) =>
            item?.id === id ? { ...item, [name]: value } : item
        );

        setExperienceList(updatedExpList);

        dispatch(
            addResume({
                ...resumeData,
                experience: JSON.stringify(updatedExpList),
            })
        );
    };

    const handleAddExperience = () => {
        const updatedExpList = [
            ...experienceList,
            {
                id: uuidv4(),
                title: "",
                companyName: "",
                city: "",
                state: "",
                startDate: "",
                endDate: "",
                workSummary: "",
            },
        ];

        setExperienceList(updatedExpList);

        dispatch(
            addResume({
                ...resumeData,
                experience: JSON.stringify(updatedExpList),
            })
        );
    };

    const handleRemoveExperience = (id) => {
        const updatedExpList = experienceList.filter((exp) => exp?.id !== id);
        setExperienceList(updatedExpList);

        dispatch(
            addResume({
                ...resumeData,
                experience: JSON.stringify(updatedExpList),
            })
        );
    };

    const saveExperience = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (isSignedIn && isLoaded) {
            try {
                const expData = JSON.stringify(experienceList);

                const updatedResumeData = await resumeService.updateResume(
                    resumeData?.$id,
                    {
                        experience: expData,
                    }
                );

                if (updatedResumeData) {
                    dispatch(addResume(updatedResumeData));

                    toast.success("Experience updated successfully");
                }
            } catch (error) {
                toast.error(`Error saving experience ${error}`);
            } finally {
                setLoading(false);
            }
        }
    };

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

    async function fetchAIResponse(postionTitle, id) {
        setLoadSummaries(true);

        try {
            const data = await generateText(
                `Please provide a list of 4-5 bullet points for the position title ${postionTitle} which explain about the role that I have worked in ex- my contribution in the company, project, etc. Format the response as an array of strings. Remember to include only bullet points which is a string nothing else as i have to process the string. Dont't mention things like here are your points, this is your points, etc.`
            );
            const responseString = data?.data || "";

            const e = {
                target: { value: responseString },
            };

            handleRichTextEditor(e, "workSummary", id);
        } catch (error) {
            console.log("Error in fetchAIResponse :: ", error);
        } finally {
            setLoadSummaries(false);
        }
    }

    return (
        <div>
            <form
                onSubmit={saveExperience}
                className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
            >
                <h2 className="font-bold text-lg">Professional Experience</h2>
                <p>Add Your previous Job experience</p>
                <div>
                    {experienceList?.map((item) => (
                        <div key={item?.id}>
                            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                                <div>
                                    <label className="text-xs">
                                        Position Title
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        name="title"
                                        required
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.title}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">
                                        Company Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        name="companyName"
                                        required
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.companyName}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">City</label>
                                    <Input
                                        name="city"
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.city}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">State</label>
                                    <Input
                                        name="state"
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.state}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">
                                        Start Date
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="date"
                                        name="startDate"
                                        required
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.startDate}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">End Date</label>
                                    <Input
                                        type="date"
                                        name="endDate"
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.endDate}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between my-2">
                                <label className="text-xs">Summary</label>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    type="button"
                                    onClick={() =>
                                        fetchAIResponse(item?.title, item?.id)
                                    }
                                    disabled={loadSummaries}
                                    className="flex gap-2 border-primary text-primary"
                                >
                                    {loadSummaries ? (
                                        <LoaderCircle className="animate-spin" />
                                    ) : (
                                        <>
                                            <Brain className="h-4 w-4" />
                                            Generate from AI
                                        </>
                                    )}
                                </Button>
                            </div>
                            <div className="col-span-2">
                                <RichTextEditor
                                    defaultValue={item?.workSummary}
                                    onRichTextEditorChange={(event) =>
                                        handleRichTextEditor(
                                            event,
                                            "workSummary",
                                            item?.id
                                        )
                                    }
                                />
                            </div>
                            <div className="flex justify-end my-2">
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        handleRemoveExperience(item?.id)
                                    }
                                    className="text-primary"
                                >
                                    <Trash2 />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleAddExperience}
                            className="text-primary"
                        >
                            + Add More Experience
                        </Button>
                    </div>
                    <Button
                        type="submit"
                        disabled={loading || experienceList?.length === 0}
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
    );
}

export default Experience;
