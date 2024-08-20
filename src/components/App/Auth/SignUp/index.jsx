import Header from "@/components/App/Custom/Header";
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
    return (
        <>
            <Header />
            <div className="flex justify-center my-10">
                <SignUp />
            </div>
        </>
    );
}
