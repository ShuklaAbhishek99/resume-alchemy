import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 className="text-4xl">404 - Page Not Found</h1>
            <p className="text-xl my-3">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to={"/dashboard"}>
                <Button>Back To Home?</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
