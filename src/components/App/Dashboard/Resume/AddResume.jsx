import { PlusCircle } from "lucide-react";
import React from "react";

function AddResume() {
    return (
        <div>
            <div className="p-14 py-24 border-4 border-dashed bg-secondary flex justify-center items-center rounded-lg mt-10 h-[280px] hover:scale-105 hover:shadow-md transition-all cursor-pointer">
                <PlusCircle />
            </div>
        </div>
    );
}

export default AddResume;
