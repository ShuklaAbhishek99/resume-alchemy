import PersonalDetails from "../Forms/PersonalDetails";
import Summary from "../Forms/Summary";
import Education from "../Forms/Education";
import Experience from "../Forms/Experience";
import Skills from "../Forms/Skills";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { useState, useEffect } from "react";
import resumeService from "@/appwrite/db/resume";
import { useDispatch } from "react-redux";
import { addResume } from "@/features/resumeSlice";

function FormSection() {
    const { resumeId } = useParams();
    const [step, setStep] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchResumeData();
    }, []);

    const fetchResumeData = async () => {
        const resumeData = await resumeService.getResume(resumeId);

        if (resumeData) {
            dispatch(addResume(resumeData));
        }
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div className="flex gap-5">
                    <Link to={"/dashboard"}>
                        <Button>
                            <Home />
                        </Button>
                    </Link>
                    {/* <ThemeColor /> */}
                </div>
                <div className="flex gap-2">
                    <Button
                        disabled={step === 1}
                        size="sm"
                        onClick={handleBack}
                    >
                        <ArrowLeft />
                    </Button>

                    <Button
                        disabled={step === 5}
                        className="flex gap-2"
                        size="sm"
                        onClick={handleNext}
                    >
                        Next
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            {step === 1 && <PersonalDetails />}
            {step === 2 && <Summary />}
            {step === 3 && <Experience />}
            {step === 4 && <Education />}
            {step === 5 && <Skills />}
        </div>
    );
}

export default FormSection;
