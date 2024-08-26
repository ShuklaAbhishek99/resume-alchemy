import resumeService from "@/appwrite/db/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addResume } from "@/features/resumeSlice";
import { useUser } from "@clerk/clerk-react";
import { debounce } from "lodash";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

function Education() {
    const resumeData = useSelector((state) => state.resume);
    const [educationList, setEducationList] = useState([]);
    const { isSignedIn, isLoaded } = useUser();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (resumeData?.education) {
            const eduData = JSON.parse(resumeData?.education);
            setEducationList(eduData || []);
        }
    }, [resumeData?.education]);

    const handleInputChange = debounce((e, id) => {
        const { name, value } = e.target;

        const updatedEduList = educationList?.map((item) =>
            item?.id === id ? { ...item, [name]: value } : item
        );

        setEducationList(updatedEduList);

        dispatch(
            addResume({
                ...resumeData,
                education: JSON.stringify(updatedEduList),
            })
        );
    }, 300);

    const handleAddEducation = () => {
        const updatedEduList = [
            ...educationList,
            {
                id: uuidv4(),
                universityName: "",
                startDate: "",
                endDate: "",
                degree: "",
                major: "",
                description: "",
            },
        ];

        setEducationList(updatedEduList);

        dispatch(
            addResume({
                ...resumeData,
                education: JSON.stringify(updatedEduList),
            })
        );
    };

    const handleRemoveEducation = (id) => {
        const updatedEduList = educationList.filter((edu) => edu?.id !== id);

        setEducationList(updatedEduList);

        dispatch(
            addResume({
                ...resumeData,
                education: JSON.stringify(updatedEduList),
            })
        );
    };

    const saveEducation = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (isSignedIn && isLoaded) {
            try {
                const eduData = JSON.stringify(educationList);

                const updatedResumeData = await resumeService.updateResume(
                    resumeData?.$id,
                    {
                        education: eduData,
                    }
                );

                if (updatedResumeData) {
                    dispatch(addResume(updatedResumeData));

                    toast.success("Education updated successfully");
                }
            } catch (error) {
                toast.error(`Error saving education ${error}`);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <form
                onSubmit={saveEducation}
                className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
            >
                <h2 className="font-bold text-lg">Education</h2>
                <p>Add Your educational details</p>

                <div>
                    {educationList?.map((item) => (
                        <div key={item?.id}>
                            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                                <div className="col-span-2">
                                    <label>
                                        University Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        name="universityName"
                                        required
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.universityName}
                                    />
                                </div>
                                <div>
                                    <label>
                                        Degree
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        name="degree"
                                        required
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.degree}
                                    />
                                </div>
                                <div>
                                    <label>Major</label>
                                    <Input
                                        name="major"
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.major}
                                    />
                                </div>
                                <div>
                                    <label>
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
                                    <label>End Date</label>
                                    <Input
                                        type="date"
                                        name="endDate"
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.endDate}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label>Description</label>
                                    <Textarea
                                        name="description"
                                        onChange={(e) =>
                                            handleInputChange(e, item?.id)
                                        }
                                        defaultValue={item?.description}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end my-2">
                                <Button
                                    variant="outline"
                                    type="button"
                                    onClick={() =>
                                        handleRemoveEducation(item?.id)
                                    }
                                    className="text-primary"
                                >
                                    - Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            type="button"
                            onClick={handleAddEducation}
                            className="text-primary"
                        >
                            + Add More Education
                        </Button>
                    </div>
                    <Button
                        type="submit"
                        disabled={loading || educationList?.length === 0}
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

export default Education;
