import { useSelector } from "react-redux";

function SummeryPreview() {
    const resumeData = useSelector((state) => state.resume);

    return <p className="text-xs">{resumeData?.summary}</p>;
}

export default SummeryPreview;
