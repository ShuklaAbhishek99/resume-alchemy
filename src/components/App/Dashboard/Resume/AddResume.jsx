import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const industries = [
    "Agriculture",
    "Automotive",
    "Banking & Finance",
    "Biotechnology",
    "Construction",
    "Consumer Goods",
    "Education",
    "Energy",
    "Entertainment & Media",
    "Environmental Services",
    "Food & Beverage",
    "Healthcare",
    "Hospitality",
    "Information Technology",
    "Insurance",
    "Legal Services",
    "Manufacturing",
    "Mining",
    "Nonprofit",
    "Pharmaceuticals",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Transportation & Logistics",
    "Utilities",
    "Aerospace",
    "Chemical",
    "Defense",
    "Electronics",
    "Engineering",
    "Fashion",
    "Forestry",
    "Government",
    "Human Resources",
    "Import & Export",
    "Internet & E-commerce",
    "Investment",
    "Jewelry",
    "Marketing & Advertising",
    "Medical Devices",
    "Music",
    "Oil & Gas",
    "Public Relations",
    "Publishing",
    "Research & Development",
    "Security",
    "Shipping",
    "Sports",
    "Textiles",
    "Tourism",
    "Video Games",
    "Waste Management",
    "Web Development",
];

function AddResume() {
    const [openDailog, setOpenDialog] = useState(false);

    return (
        <div>
            <div
                className="p-14 py-24 border-4 border-dashed bg-secondary flex justify-center items-center rounded-lg mt-10 h-[280px] hover:scale-105 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setOpenDialog(true)}
            >
                <PlusCircle />
            </div>

            <Dialog open={openDailog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume?</DialogTitle>
                        <DialogDescription>
                            <p className="my-1">Add a title for your resume</p>
                            <Input
                                className="my-2"
                                placeholder="Ex - Full Stack resume"
                            />
                        </DialogDescription>
                        <DialogDescription>
                            <p className="my-1">Choose your work field</p>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    {industries.map((industry) => (
                                        <SelectItem
                                            key={industry}
                                            value={industry}
                                        >
                                            {industry}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <div className="flex justify-end gap-5">
                            <Button type="submit">Create</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddResume;
