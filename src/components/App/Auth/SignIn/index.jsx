import Header from "@/components/App/Custom/Header";
import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
    return (
        <>
            <Header />
            <div className="flex justify-center my-10">
                <SignIn />
            </div>
        </>
    );
}

export default SignInPage;
