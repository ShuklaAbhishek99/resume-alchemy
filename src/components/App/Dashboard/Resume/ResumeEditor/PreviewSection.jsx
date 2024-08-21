import PersonalDetailPreview from "../Previews/PersonalDetails";
import SummaryPreview from "../Previews/Summary";
import ExperiencePreview from "../Previews/Experience";
import EducationalPreview from "../Previews/Education";
import SkillsPreview from "../Previews/Skills";
import { useSelector } from "react-redux";

function PreviewSection() {
    const resumeData = useSelector((state) => state.resume);

    return (
        <div
            className="shadow-lg h-full p-14 border-t-[20px] bg-white text-black"
            style={{
                borderColor: resumeData?.themeColor,
            }}
        >
            <PersonalDetailPreview />

            <SummaryPreview />

            {resumeData?.experience?.length > 0 && <ExperiencePreview />}

            {resumeData?.education?.length > 0 && <EducationalPreview />}

            {resumeData?.skills?.length > 0 && <SkillsPreview />}
        </div>
    );
}

export default PreviewSection;
