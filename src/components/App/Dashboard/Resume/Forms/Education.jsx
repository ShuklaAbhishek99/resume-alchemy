import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

function Education() {
    const [loading, setLoading] = useState(false);

    const [educationalList, setEducationalList] = useState([
        {
            universityName: "",
            degree: "",
            major: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    ]);

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">Education</h2>
            <p>Add Your educational details</p>

            <div>
                {educationalList.map((item, index) => (
                    <div key={index}>
                        <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                            <div className="col-span-2">
                                <label>University Name</label>
                                <Input
                                    name="universityName"
                                    onChange={(e) => ""}
                                    defaultValue={item?.universityName}
                                />
                            </div>
                            <div>
                                <label>Degree</label>
                                <Input
                                    name="degree"
                                    onChange={(e) => ""}
                                    defaultValue={item?.degree}
                                />
                            </div>
                            <div>
                                <label>Major</label>
                                <Input
                                    name="major"
                                    onChange={(e) => ""}
                                    defaultValue={item?.major}
                                />
                            </div>
                            <div>
                                <label>Start Date</label>
                                <Input
                                    type="date"
                                    name="startDate"
                                    onChange={(e) => ""}
                                    defaultValue={item?.startDate}
                                />
                            </div>
                            <div>
                                <label>End Date</label>
                                <Input
                                    type="date"
                                    name="endDate"
                                    onChange={(e) => ""}
                                    defaultValue={item?.endDate}
                                />
                            </div>
                            <div className="col-span-2">
                                <label>Description</label>
                                <Textarea
                                    name="description"
                                    onChange={(e) => ""}
                                    defaultValue={item?.description}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={""}
                        className="text-primary"
                    >
                        {" "}
                        + Add More Education
                    </Button>
                    <Button
                        variant="outline"
                        onClick={""}
                        className="text-primary"
                    >
                        {" "}
                        - Remove
                    </Button>
                </div>
                <Button disabled={loading} onClick={() => ""}>
                    {loading ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        "Save"
                    )}
                </Button>
            </div>
        </div>
    );
}

export default Education;
