import { Link, NavLink } from "react-router-dom";
import Header from "../Custom/Header";
import {
    AtomIcon,
    Share2,
    Edit,
    ChevronRight,
    ArrowRight,
    Heart,
} from "lucide-react";
import { SocialPress } from "./SocialPress";

function Home() {
    return (
        <div className="overflow-hidden">
            <Header />
            <div>
                <section className="z-50">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <NavLink
                            to={"https://abhishekshukla.xyz"}
                            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                            role="alert"
                            target="_blank"
                        >
                            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                                New
                            </span>
                            <span className="text-sm font-medium">
                                View my portfolio
                            </span>
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </NavLink>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            <span>Build Your Resume </span>
                            <span className="text-primary">With AI</span>
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            Effortlessly Create a Winning Resume with Our
                            AI-Powered Builder
                        </p>
                        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link
                                to="/dashboard"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-green-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                            </Link>
                            <Link
                                to={
                                    "https://github.com/ShuklaAbhishek99/resume-alchemy"
                                }
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-github mr-2 -ml-1 w-5 h-5"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                <span>View code on GitHub</span>
                            </Link>
                        </div>
                    </div>
                    <div className="py-8 bg-white dark:bg-black dark:text-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <h2 className="font-bold text-3xl">How it Works?</h2>
                        <h2 className="text-md text-gray-500">
                            Create your professional resume in just 3 simple
                            steps
                        </h2>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="block rounded-xl border bg-white border-gray-200 dark:bg-black dark:border-gray-700 dark:text-white p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 cursor-pointer">
                                <div className="w-full">
                                    <AtomIcon className="h-8 w-8 mx-auto" />
                                </div>

                                <h2 className="mt-4 mb-2 text-xl font-bold">
                                    Craft Your Resume
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Start by entering your information and let
                                    our AI do the heavy lifting. It generates a
                                    well-structured resume tailored to your
                                    industry and experience.
                                </p>
                            </div>

                            <div className="block rounded-xl border bg-white border-gray-200 dark:bg-black dark:border-gray-700 dark:text-white p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 cursor-pointer">
                                <div className="w-full">
                                    <Edit className="h-8 w-8 mx-auto" />
                                </div>

                                <h2 className="mt-4 text-xl font-bold">
                                    Customize to Perfection
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Make any adjustments you like—modify
                                    sections, tweak the design, and add
                                    personalized details to make your resume
                                    stand out.
                                </p>
                            </div>

                            <div className="block rounded-xl border bg-white border-gray-200 dark:bg-black dark:border-gray-700 dark:text-white p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 cursor-pointer">
                                <div className="w-full">
                                    <Share2 className="h-8 w-8 mx-auto" />
                                </div>

                                <h2 className="mt-4 text-xl font-bold">
                                    Share & Download
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Once you&apos;re satisfied, share your
                                    resume directly or download it instantly.
                                    Start impressing employers with a polished,
                                    professional resume.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <SocialPress />
                <div className="my-12 text-center">
                    <Link
                        to="/auth/sign-in"
                        className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-green-600 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Get Started Today
                    </Link>
                </div>
            </div>

            <footer className="flex justify-center flex-wrap my-10">
                <span>Made with</span>
                <span className="mx-2">
                    <Heart className="text-red-500 fill-red-500" />
                </span>
                <span>by Abhishek Shukla</span>
            </footer>
        </div>
    );
}

export default Home;
