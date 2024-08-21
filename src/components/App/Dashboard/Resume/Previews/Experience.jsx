import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ExperiencePreview() {
    const resumeData = useSelector((state) => state.resume);
    const [experienceList, setExperienceList] = useState([]);

    useEffect(() => {
        if (resumeData?.experience) {
            const expData = JSON.parse(resumeData.experience);
            setExperienceList(expData || []);
        }
    }, [resumeData?.experience]);

    function formatDate(dateString) {
        const date = new Date(dateString);

        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        return `${month} ${year}`;
    }

    return (
        <div className="my-6">
            <h2
                className="text-center font-bold text-sm mb-2"
                style={{
                    color: resumeData?.themeColor,
                }}
            >
                Professional Experience
            </h2>
            <hr
                style={{
                    borderColor: resumeData?.themeColor,
                }}
            />

            {experienceList?.map((experience) => (
                <div key={experience.id} className="my-5">
                    <h2
                        className="text-sm font-bold"
                        style={{
                            color: resumeData?.themeColor,
                        }}
                    >
                        {experience?.title}
                    </h2>
                    <h2 className="text-xs flex justify-between">
                        {`${experience?.companyName}${
                            experience?.city ? ", " + experience?.city : ""
                        }${experience?.state ? ", " + experience?.state : ""}`}
                        <span>
                            {`${
                                experience?.startDate
                                    ? formatDate(experience?.startDate) + " - "
                                    : ""
                            } 
                            ${
                                !experience?.endDate
                                    ? experience?.startDate && "Present"
                                    : formatDate(experience.endDate)
                            }`}
                        </span>
                    </h2>
                    <div
                        className="text-xs my-2"
                        dangerouslySetInnerHTML={{
                            __html: experience?.workSummary,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default ExperiencePreview;
