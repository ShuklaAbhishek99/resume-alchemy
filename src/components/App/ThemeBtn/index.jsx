import { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { addResume } from "@/features/resumeSlice";
import resumeService from "@/appwrite/db/resume";

function ThemeColor() {
    const resumeData = useSelector((state) => state.resume);
    const [selectedColor, setSelectedColor] = useState(resumeData?.themeColor);
    const dispatch = useDispatch();

    const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33A1",
        "#A133FF",
        "#33FFA1",
        "#FF7133",
        "#71FF33",
        "#7133FF",
        "#FF3371",
        "#33FF71",
        "#3371FF",
        "#A1FF33",
        "#33A1FF",
        "#5733FF",
        "#33FF5A",
        "#5A33FF",
        "#FF335A",
        "#335AFF",
        "#000000",
        "#2C2C2C",
        "#3D3D3D",
        "#4E4E4E",
        "#5F5F5F",
        "#6F6F6F",
        "#808080",
        "#919191",
        "#A1A1A1",
        "#B2B2B2",
        "#C3C3C3",
        "#D4D4D4",
        "#E5E5E5",
        "#F6F6F6",
    ];

    const onColorSelect = async (color) => {
        setSelectedColor(color);

        const currentColor = resumeData.themeColor;

        try {
            dispatch(
                addResume({
                    ...resumeData,
                    themeColor: color,
                })
            );
            await resumeService.updateResume(resumeData?.$id, {
                themeColor: color,
            });

            toast.success("Theme changed successfully");
        } catch (error) {
            toast.error(`Error changing theme ${error}`);

            dispatch(
                addResume({
                    ...resumeData,
                    themeColor: currentColor,
                })
            );
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="flex gap-2">
                    <LayoutGrid />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="mx-4">
                <h2 className="mb-2 text-sm font-bold">Select Theme Color</h2>
                <div className="grid grid-cols-5 gap-3">
                    {colors.map((item) => (
                        <div
                            key={item}
                            onClick={() => onColorSelect(item)}
                            className={`h-5 w-5 rounded-full cursor-pointer hover:border-black border ${
                                selectedColor == item && "border border-black"
                            }`}
                            style={{
                                background: item,
                            }}
                        ></div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default ThemeColor;
