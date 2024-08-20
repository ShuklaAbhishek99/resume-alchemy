import AddResume from "./Resume/AddResume";
import ResumeCard from "./Resume/ResumeCard";

function Dashboard() {
    return (
        <div className="p-10 md:px-20 lg:px-32">
            <h2 className="font-bold text-2xl">My Resume</h2>
            <p>Start Creating AI resume for your next job role</p>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
                    <AddResume />
                    <ResumeCard/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
