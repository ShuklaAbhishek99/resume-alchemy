import resumeService from "@/appwrite/db/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addResume } from "@/features/resumeSlice";
import { useUser } from "@clerk/clerk-react";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { debounce } from "lodash";

function PersonalDetails() {
    const resumeData = useSelector((state) => state.resume);
    const { isSignedIn, isLoaded } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            firstName: resumeData?.firstName || "",
            lastName: resumeData?.lastName || "",
            jobTitle: resumeData?.jobTitle || "",
            address: resumeData?.address || "",
            phone: resumeData?.phone || "",
            email: resumeData?.email || "",
        },
    });
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        reset({
            firstName: resumeData?.firstName || "",
            lastName: resumeData?.lastName || "",
            jobTitle: resumeData?.jobTitle || "",
            address: resumeData?.address || "",
            phone: resumeData?.phone || "",
            email: resumeData?.email || "",
        });
    }, [
        resumeData?.firstName,
        resumeData?.lastName,
        resumeData?.jobTitle,
        resumeData?.address,
        resumeData?.phone,
        resumeData?.email,
        reset,
    ]);

    const savePersonalDetails = async (data) => {
        if (isSignedIn && isLoaded) {
            setLoading(true);
            try {
                const updatedResumeData = await resumeService.updateResume(
                    resumeData?.$id,
                    { ...data }
                );

                if (updatedResumeData) {
                    dispatch(addResume(updatedResumeData));
                }

                toast.success("Personal details saved successfully");
            } catch (error) {
                toast.error(`Error saving personal details ${error}`);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleInputChange = debounce((e) => {
        const { name, value } = e.target;

        dispatch(
            addResume({
                ...resumeData,
                [name]: value,
            })
        );
    }, 300);

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">Personal Details</h2>
            <p>Get Started with the basic information</p>

            <form onSubmit={handleSubmit(savePersonalDetails)}>
                <div className="grid grid-cols-2 mt-5 gap-3">
                    <div>
                        <label className="text-sm">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            name="firstName"
                            {...register("firstName", {
                                required: "Please enter your first name",
                            })}
                            onChange={handleInputChange}
                        />

                        {errors.firstName?.message && (
                            <small className="text-red-500 block">
                                {errors.firstName?.message}
                            </small>
                        )}
                    </div>
                    <div>
                        <label className="text-sm">Last Name</label>
                        <Input
                            name="lastName"
                            {...register("lastName")}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">
                            Job Title <span className="text-red-500">*</span>
                        </label>
                        <Input
                            name="jobTitle"
                            {...register("jobTitle", {
                                required: "Please enter job title",
                            })}
                            onChange={handleInputChange}
                        />

                        {errors.jobTitle?.message && (
                            <small className="text-red-500 block">
                                {errors.jobTitle?.message}
                            </small>
                        )}
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">Address</label>
                        <Input
                            name="address"
                            {...register("address")}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm">Phone</label>
                        <Input
                            name="phone"
                            {...register("phone")}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                            name="email"
                            {...register("email", {
                                required: "Please enter email address",
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                            value
                                        ) ||
                                        "Email address must be a valid address (example@example.com)",
                                },
                            })}
                            onChange={handleInputChange}
                        />

                        {errors.email?.message && (
                            <small className="text-red-500 block">
                                {errors.email?.message}
                            </small>
                        )}
                    </div>
                </div>
                <div className="mt-3 flex justify-end">
                    <Button type="submit" disabled={loading}>
                        {loading ? (
                            <LoaderCircle className="animate-spin" />
                        ) : (
                            "Save"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default PersonalDetails;
