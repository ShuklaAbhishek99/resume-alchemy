import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EducationalPreview() {
    const resumeData = useSelector((state) => state.resume);
    const [educationList, setEducationList] = useState([]);

    useEffect(() => {
        if (resumeData.education) {
            const eduData = JSON.parse(resumeData.education);
            setEducationList(eduData || []);
        }
    }, [resumeData?.education]);

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
                Education
            </h2>
            <hr
                style={{
                    borderColor: resumeData?.themeColor,
                }}
            />

            {educationList?.map((education, index) => (
                <div key={index} className="my-5">
                    <h2
                        className="text-sm font-bold"
                        style={{
                            color: resumeData?.themeColor,
                        }}
                    >
                        {education.universityName}
                    </h2>
                    <h2 className="text-xs flex justify-between">
                        {`${education?.degree}${
                            education?.major && education?.degree
                                ? " in " + education?.major
                                : education?.major
                        }`}
                        <span>
                            {`${
                                education?.startDate
                                    ? formatDate(education?.startDate) + " - "
                                    : ""
                            }${
                                education?.startDate
                                    ? formatDate(education?.endDate)
                                    : ""
                            }`}
                        </span>
                    </h2>
                    <p className="text-xs my-2">{education?.description}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationalPreview;
