import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import resumeService from "@/appwrite/db/resume";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

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
    const { user, isSignedIn, isLoaded } = useUser();
    const [openDialog, setOpenDialog] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const createResume = async (data) => {
        setLoading(true);
        if (isSignedIn && isLoaded) {
            try {
                const resumeData = await resumeService.createResume(
                    user?.id || null,
                    data?.resumeTitle || null,
                    data?.industry || null
                );

                if (resumeData) {
                    navigate(`/dashboard/resume/${resumeData?.$id}/edit`);
                }
            } catch (error) {
                toast.error(`Error creating resume ${error}`);
            } finally {
                reset();
                setOpenDialog(false);
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <div
                title="Create Resume"
                className="p-14 py-24 border-4 border-dashed dark:border-gray-700 bg-secondary flex justify-center items-center rounded-lg my-5 h-[280px] hover:scale-105 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setOpenDialog(true)}
            >
                <PlusCircle />
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <form onSubmit={handleSubmit(createResume)}>
                        <DialogHeader>
                            <DialogTitle>Create New Resume?</DialogTitle>
                            <DialogDescription></DialogDescription>
                            <div>
                                <p className="my-1 text-sm text-gray-500">
                                    Add a title for your resume
                                </p>
                                <Input
                                    className="my-2"
                                    placeholder="Ex - Full Stack Resume"
                                    {...register("resumeTitle", {
                                        required: "Please enter resume title",
                                    })}
                                />
                                {errors?.resumeTitle?.message && (
                                    <p className="text-red-500 text-sm">
                                        {errors?.resumeTitle.message}
                                    </p>
                                )}
                                <p className="my-1 text-sm text-gray-500">
                                    Choose your work field
                                </p>
                                <Select
                                    required
                                    onValueChange={(value) =>
                                        setValue("industry", value, {
                                            shouldValidate: true,
                                        })
                                    }
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Field" />
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
                            </div>
                        </DialogHeader>
                        <DialogFooter>
                            <div className="flex justify-end gap-5">
                                <Button type="submit">
                                    {loading ? (
                                        <Loader2 className="animate-spin" />
                                    ) : (
                                        "Create"
                                    )}
                                </Button>
                            </div>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddResume;
