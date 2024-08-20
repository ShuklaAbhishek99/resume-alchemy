import PersonalDetails from "../Forms/PersonalDetails";
import Summary from "../Forms/Summary";
import Education from "../Forms/Education";
import Experience from "../Forms/Experience";
import Skills from "../Forms/Skills";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

function FormSection() {
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
                    {2 > 1 && (
                        <Button size="sm" onClick={() => ""}>
                            {" "}
                            <ArrowLeft />{" "}
                        </Button>
                    )}
                    <Button
                        disabled={""}
                        className="flex gap-2"
                        size="sm"
                        onClick={() => ""}
                    >
                        Next
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <PersonalDetails />
            {/* <Summary /> */}
            {/* <Experience /> */}
            {/* <Education /> */}
            {/* <Skills /> */}
        </div>
    );
}

export default FormSection;
