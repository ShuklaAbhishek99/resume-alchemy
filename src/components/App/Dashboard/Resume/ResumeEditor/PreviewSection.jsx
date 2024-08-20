import PersonalDetailPreview from "../Previews/PersonalDetails";
import SummaryPreview from "../Previews/Summary";
import ExperiencePreview from "../Previews/Experience";
import EducationalPreview from "../Previews/Education";
import SkillsPreview from "../Previews/Skills";

function PreviewSection() {
    return (
        <div
            className="shadow-lg h-full p-14 border-t-[20px] bg-white text-black"
            style={{
                borderColor: "red",
            }}
        >
            {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={""} />
            {/* Summery  */}
            <SummaryPreview resumeInfo={""} />
            {/* Professional Experience  */}
            {"dd"?.Experience?.length > 0 && (
                <ExperiencePreview resumeInfo={""} />
            )}
            {/* Educational  */}
            {"d"?.education?.length > 0 && (
                <EducationalPreview resumeInfo={""} />
            )}
            {/* Skills  */}
            {"dd"?.skills?.length > 0 && <SkillsPreview resumeInfo={""} />}
        </div>
    );
}

export default PreviewSection;
