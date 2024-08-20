import { Button } from "@/components/ui/button";
import { Brain, LoaderCircle } from "lucide-react";
import { useState } from "react";
import {
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnUnderline,
    Editor,
    EditorProvider,
    Separator,
    Toolbar,
} from "react-simple-wysiwyg";

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <div className="flex justify-between my-2">
                <label className="text-xs">Summery</label>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={""}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary"
                >
                    {loading ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        <>
                            <Brain className="h-4 w-4" /> Generate from AI
                        </>
                    )}
                </Button>
            </div>
            <EditorProvider>
                <Editor
                    value={""}
                    onChange={(e) => {
                        "";
                    }}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;
