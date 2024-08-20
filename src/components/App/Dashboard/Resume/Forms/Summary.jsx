import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, LoaderCircle } from "lucide-react";

function Summary({}) {
    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Summary</h2>
                <p>Add Summary for your job title</p>

                <form className="mt-7" onSubmit={""}>
                    <div className="flex justify-between items-end">
                        <label>Add Summary</label>
                        <Button
                            variant="outline"
                            onClick={() => ""}
                            type="button"
                            size="sm"
                            className="border-primary text-primary flex gap-2"
                        >
                            <Brain className="h-4 w-4" /> Generate from AI
                        </Button>
                    </div>
                    <Textarea
                        className="mt-5"
                        required
                        value={""}
                        defaultValue={""}
                        onChange={""}
                    />
                    <div className="mt-2 flex justify-end">
                        <Button type="submit" disabled={""}>
                            {"1" === "2" ? (
                                <LoaderCircle className="animate-spin" />
                            ) : (
                                "Save"
                            )}
                        </Button>
                    </div>
                </form>
            </div>

            {"" && (
                <div className="my-5">
                    <h2 className="font-bold text-lg">Suggestions</h2>
                    {[]?.map((item, index) => (
                        <div
                            key={index}
                            onClick={""}
                            className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
                        >
                            <h2 className="font-bold my-1 text-primary">
                                Level: {""}
                            </h2>
                            <p>{""}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Summary;
