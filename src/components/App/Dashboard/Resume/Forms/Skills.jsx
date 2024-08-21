import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";
import { addResume } from "@/features/resumeSlice";
import { debounce } from "lodash";
import { toast } from "sonner";
import resumeService from "@/appwrite/db/resume";

function Skills() {
    const resumeData = useSelector((state) => state.resume);
    const [skillsList, setSkillsList] = useState([]);
    const { isSignedIn, isLoaded } = useUser();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (resumeData?.skills) {
            const skillData = JSON.parse(resumeData?.skills);
            setSkillsList(skillData || []);
        }
    }, [resumeData?.skills]);

    const handleInputChange = debounce((id, name, value) => {
        const updatedSkillsList = skillsList.map((item) =>
            item.id === id ? { ...item, [name]: value } : item
        );

        setSkillsList(updatedSkillsList);

        dispatch(
            addResume({
                ...resumeData,
                skills: JSON.stringify(updatedSkillsList),
            })
        );
    }, 300);

    const handleAddSkills = () => {
        const updatedSkillsList = [
            ...skillsList,
            {
                id: uuidv4(),
                name: "",
                rating: "",
            },
        ];

        setSkillsList(updatedSkillsList);

        dispatch(
            addResume({
                ...resumeData,
                skills: JSON.stringify(updatedSkillsList),
            })
        );
    };

    const handleRemoveSkills = (id) => {
        const updatedSkillsList = skillsList.filter((skill) => skill.id !== id);

        setSkillsList(updatedSkillsList);

        dispatch(
            addResume({
                ...resumeData,
                skills: JSON.stringify(updatedSkillsList),
            })
        );
    };

    const saveSkills = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (isSignedIn && isLoaded) {
            try {
                const skillsData = JSON.stringify(skillsList);

                const updatedResumeData = await resumeService.updateResume(
                    resumeData?.$id,
                    {
                        skills: skillsData,
                    }
                );

                if (updatedResumeData) {
                    dispatch(addResume(updatedResumeData));

                    toast.success("Skills updated successfully");
                }
            } catch (error) {
                toast.error(`Error saving skills ${error}`);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <form
                onSubmit={saveSkills}
                className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
            >
                <h2 className="font-bold text-lg">Skills</h2>
                <p>Add Your top professional key skills</p>

                <div>
                    {skillsList.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between mb-2 border rounded-lg p-3"
                        >
                            <div>
                                <label className="text-xs">Name</label>
                                <Input
                                    className="w-full"
                                    defaultValue={item.name}
                                    onChange={(e) =>
                                        handleInputChange(
                                            item.id,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <Rating
                                name="rating"
                                style={{ maxWidth: 120 }}
                                value={item.rating}
                                onChange={(value) =>
                                    handleInputChange(item.id, "rating", value)
                                }
                            />
                            <Button
                                variant="outline"
                                type="button"
                                onClick={() => handleRemoveSkills(item.id)}
                                className="text-primary"
                            >
                                <Trash2 />
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            type="button"
                            onClick={handleAddSkills}
                            className="text-primary"
                        >
                            + Add More Skill
                        </Button>
                    </div>
                    <Button
                        type="submit"
                        disabled={loading || skillsList.length === 0}
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

export default Skills;
