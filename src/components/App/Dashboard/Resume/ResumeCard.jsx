import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Loader2Icon, MoreVertical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
import resumeService from "@/appwrite/db/resume";
import { addResumeList } from "@/features/resumeListSlice";

function ResumeCard({ resumeId, resumeTitle, themeColor }) {
    const { isLoaded, isSignedIn } = useUser();
    const resumeList = useSelector((state) => state.resumeList);
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        if (isLoaded && isSignedIn) {
            setLoading(true);
            try {
                const deletedResume = await resumeService.deleteResume(id);

                if (deletedResume) {
                    const updatedResumeList = resumeList?.filter(
                        (resume) => resume?.$id !== id
                    );

                    dispatch(addResumeList(updatedResumeList));
                }
            } catch (error) {
                toast.error(`Error deleting the resume ${error}`);
            } finally {
                setLoading(false);
                setOpenAlert(false);
            }
        }
    };

    return (
        <>
            <Link
                to={`/dashboard/resume/${resumeId}/edit`}
                className="hover:scale-105 hover:shadow-md transition-all"
            >
                <div
                    title="View Resume"
                    className="p-14 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 h-[280px] rounded-t-lg border-t-4"
                    style={{
                        borderColor: themeColor,
                    }}
                >
                    <div className="flex items-center justify-center h-[180px] min-w-[4.5rem]">
                        <img src="/cv.png" width={80} height={80} />
                    </div>
                </div>
                <div
                    title="Options"
                    className="border p-3 flex justify-between  text-white rounded-b-lg shadow-lg"
                    style={{
                        background: themeColor,
                    }}
                >
                    <h2 className="text-sm">{resumeTitle}</h2>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <MoreVertical className="h-4 w-4 cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(
                                        `/dashboard/resume/${resumeId}/edit`
                                    );
                                }}
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/resume/${resumeId}`);
                                }}
                            >
                                View
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenAlert(true);
                                }}
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </Link>

            <AlertDialog
                open={openAlert}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenAlert(false);
                            }}
                        >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(resumeId);
                            }}
                            disabled={loading}
                        >
                            {loading ? (
                                <Loader2Icon className="animate-spin" />
                            ) : (
                                "Delete"
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default ResumeCard;
