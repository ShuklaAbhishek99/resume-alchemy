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

function ResumeCard({ resumeId, resumeTitle }) {
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (
        <Link
            to={`/dashboard/resume/${resumeId}/edit`}
            className="hover:scale-105 hover:shadow-md transition-all"
        >
            <div
                className="p-14 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 h-[280px] rounded-t-lg border-t-4"
                style={{
                    borderColor: "red",
                }}
            >
                <div className="flex items-center justify-center h-[180px]">
                    <img src="/cv.png" width={80} height={80} />
                </div>
            </div>
            <div
                className="border p-3 flex justify-between  text-white rounded-b-lg shadow-lg"
                style={{
                    background: "red",
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
                                navigate(`/dashboard/resume/${resumeId}/edit`);
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
                                navigate(`/dashboard/${resumeId}/view`);
                            }}
                        >
                            Download
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
                <AlertDialog open={openAlert}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel
                            // onClick={() => setOpenAlert(false)}
                            >
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                            // onClick={onDelete}
                            // disabled={loading}
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
            </div>
        </Link>
    );
}

export default ResumeCard;
