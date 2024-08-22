import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const html = document.querySelector("html");

        html.classList.remove("light", "dark");

        if (currentTheme) {
            html.classList.add(currentTheme);
            localStorage.setItem("theme", currentTheme);
        } else {
            const defaultTheme = "light";
            html.classList.add(defaultTheme);
            setCurrentTheme(defaultTheme);
            localStorage("theme", defaultTheme);
        }
    }, [currentTheme]);

    const changeTheme = () => {
        if (currentTheme === "light") {
            const html = document.querySelector("html");
            html.classList.remove("light", "dark");
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setCurrentTheme("dark");
        } else {
            const html = document.querySelector("html");
            html.classList.remove("light", "dark");
            html.classList.add("light");
            localStorage.setItem("theme", "light");
            setCurrentTheme("light");
        }
    };

    return (
        <>
            <div className="flex justify-between py-1 px-5 shadow-md dark:shadow-2xl dark:shadow-emerald-900">
                <div>
                    <img
                        src="/Logo.png"
                        alt="logo"
                        title="Resume Alchemy"
                        className="w-14 min-w-12 min-h-12 m-1 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>

                <div className="flex gap-3">
                    <Button
                        className="my-auto"
                        title="Theme"
                        onClick={changeTheme}
                    >
                        {currentTheme === "light" ? <Sun /> : <MoonStar />}
                    </Button>
                    {isSignedIn ? (
                        <div className="flex gap-3 my-auto">
                            <Link title="Dashboard" to="/dashboard">
                                <Button>Dashboard</Button>
                            </Link>
                            <UserButton />
                        </div>
                    ) : (
                        <div className="my-auto">
                            <Link title="SignIn or Create Account" to="/auth/sign-in">
                                <Button>Get started</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* future updates */}
            {/* {isSignedIn && (
                <div className="text-blue-gray-900 bg-white dark:bg-black shadow-md dark:shadow-2xl">
                    <ul className="flex mx-3">
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <NavLink
                                to="/username"
                                className={({ isActive }) =>
                                    `flex items-center transition-colors p-2 rounded-lg hover:bg-emerald-100 dark:hover:text-gray-500 ${
                                        isActive
                                            ? "text-primary bg-emerald-100"
                                            : "text-gray-500"
                                    }`
                                }
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <NavLink
                                to="/explore"
                                className={({ isActive }) =>
                                    `flex items-center transition-colors p-2 rounded-lg hover:bg-emerald-100 dark:hover:text-gray-500 ${
                                        isActive
                                            ? "text-primary bg-emerald-100"
                                            : "text-gray-500"
                                    }`
                                }
                            >
                                Explore
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )} */}
        </>
    );
}

export default Header;
