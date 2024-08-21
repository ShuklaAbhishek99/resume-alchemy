import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

function ResumeEditor() {
    return (
        <div className="h-full">
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-full rounded-lg"
            >
                <ResizablePanel defaultSize={50}>
                    <div className="h-full overflow-y-auto">
                        <FormSection />
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                    <div className="h-full overflow-y-auto">
                        <PreviewSection />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

export default ResumeEditor;
