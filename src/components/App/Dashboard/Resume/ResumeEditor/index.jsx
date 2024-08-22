import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

function ResumeEditor() {
    const screenWidth = window.innerWidth;

    return screenWidth < 1024 ? (
        <div className="h-full">
            <div className="h-full overflow-y-auto bg-white m-2">
                <PreviewSection />
            </div>

            <div className="h-full overflow-y-auto m-2">
                <FormSection />
            </div>
        </div>
    ) : (
        <div className="h-full">
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-full rounded-lg"
            >
                <ResizablePanel defaultSize={50}>
                    <div className="h-full overflow-y-auto m-2">
                        <FormSection />
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                    <div className="h-full overflow-y-auto bg-white m-2">
                        <PreviewSection />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

export default ResumeEditor;
