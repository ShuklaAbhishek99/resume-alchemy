import { useState } from "react";
import AddResume from "./Resume/AddResume";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Dashboard() {
    const [openDailog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();

    return (
        <div className="p-10 md:px-20 lg:px-32">
            <h2 className="font-bold text-2xl">My Resume</h2>
            <p>Start Creating AI resume for your next job role</p>
            <div>
                <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4"
                    onClick={() => setOpenDialog(true)}
                >
                    <AddResume />
                </div>
                <Dialog open={openDailog} onOpenChange={setOpenDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Resume?</DialogTitle>
                            <DialogDescription>
                                <p>Add a title for your resume</p>
                                <Input
                                    className="my-2"
                                    placeholder="Ex - Full Stack resume"
                                />
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <div className="flex justify-end gap-5">
                                <Button
                                    variant="ghost"
                                    onClick={() => setOpenDialog(false)}
                                >
                                    Cancel
                                </Button>
                                <Button type="submit">Create</Button>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default Dashboard;
