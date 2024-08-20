import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PersonalDetails({ enabledNext }) {
    const params = useParams();

    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">Personal Detail</h2>
            <p>Get Started with the basic information</p>

            <form onSubmit={""}>
                <div className="grid grid-cols-2 mt-5 gap-3">
                    <div>
                        <label className="text-sm">First Name</label>
                        <Input
                            name="firstName"
                            defaultValue={""}
                            required
                            onChange={""}
                        />
                    </div>
                    <div>
                        <label className="text-sm">Last Name</label>
                        <Input
                            name="lastName"
                            required
                            onChange={""}
                            defaultValue={""}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">Job Title</label>
                        <Input
                            name="jobTitle"
                            required
                            defaultValue={""}
                            onChange={""}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">Address</label>
                        <Input
                            name="address"
                            required
                            defaultValue={""}
                            onChange={""}
                        />
                    </div>
                    <div>
                        <label className="text-sm">Phone</label>
                        <Input
                            name="phone"
                            required
                            defaultValue={""}
                            onChange={""}
                        />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <Input
                            name="email"
                            required
                            defaultValue={""}
                            onChange={""}
                        />
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
