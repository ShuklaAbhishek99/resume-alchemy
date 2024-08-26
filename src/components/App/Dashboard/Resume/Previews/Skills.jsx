import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SkillsPreview() {
    const resumeData = useSelector((state) => state.resume);
    const [skillsList, setSkillsList] = useState([]);

    useEffect(() => {
        if (resumeData?.skills) {
            const skillData = JSON.parse(resumeData?.skills);
            setSkillsList(skillData || []);
        }
    }, [resumeData?.skills]);

    return (
        <div className="my-6">
            <h2
                className="text-center font-bold text-sm mb-2"
                style={{
                    color: skillsList?.themeColor,
                }}
            >
                Skills
            </h2>
            <hr
                style={{
                    borderColor: skillsList?.themeColor,
                }}
            />

            <div className="grid grid-cols-2 gap-3 my-4">
                {skillsList?.map((skill) => (
                    <div
                        key={skill?.id}
                        className="flex items-center justify-between"
                    >
                        <h2 className="text-xs">{skill?.name}</h2>
                        <div className="h-2 bg-gray-200 w-[120px]">
                            <div
                                className="h-2"
                                style={{
                                    backgroundColor: resumeData?.themeColor,
                                    width: skill?.rating * 20 + "%",
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsPreview;
