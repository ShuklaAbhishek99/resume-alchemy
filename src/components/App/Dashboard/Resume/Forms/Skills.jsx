import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

function Skills() {
    const [skillsList, setSkillsList] = useState([
        {
            name: "",
            rating: 0,
        },
    ]);

    const [loading, setLoading] = useState(false);

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
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
                                onChange={(e) => ""}
                            />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={item.rating}
                            onChange={(v) => ""}
                        />
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
                        + Add More Skill
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

export default Skills;
