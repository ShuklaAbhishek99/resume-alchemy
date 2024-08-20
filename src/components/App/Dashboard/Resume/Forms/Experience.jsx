import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import RichTextEditor from "@/components/App/RTE";

function Experience() {
    const [experinceList, setExperinceList] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Professional Experience</h2>
                <p>Add Your previous Job experience</p>
                <div>
                    {experinceList.map((item, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                                <div>
                                    <label className="text-xs">
                                        Position Title
                                    </label>
                                    <Input
                                        name="title"
                                        onChange={(event) => ""}
                                        defaultValue={item?.title}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">
                                        Company Name
                                    </label>
                                    <Input
                                        name="companyName"
                                        onChange={(event) => ""}
                                        defaultValue={item?.companyName}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">City</label>
                                    <Input
                                        name="city"
                                        onChange={(event) => ""}
                                        defaultValue={item?.city}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">State</label>
                                    <Input
                                        name="state"
                                        onChange={(event) => ""}
                                        defaultValue={item?.state}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">
                                        Start Date
                                    </label>
                                    <Input
                                        type="date"
                                        name="startDate"
                                        onChange={(event) => ""}
                                        defaultValue={item?.startDate}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs">End Date</label>
                                    <Input
                                        type="date"
                                        name="endDate"
                                        onChange={(event) => ""}
                                        defaultValue={item?.endDate}
                                    />
                                </div>
                                <div className="col-span-2">
                                    {/* Work Summery  */}
                                    <RichTextEditor
                                        index={index}
                                        defaultValue={item?.workSummery}
                                        onRichTextEditorChange={(event) =>
                                            // handleRichTextEditor(
                                            //     event,
                                            //     "workSummery",
                                            //     index
                                            // )
                                            ""
                                        }
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
                            + Add More Experience
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
        </div>
    );
}

export default Experience;
