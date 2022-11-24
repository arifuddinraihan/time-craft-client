import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import useTitle from '../../../Hook/useTitle';
import { MdArrowForwardIos } from "react-icons/md";

const ErrorPage = () => {
    useTitle("Error Page")
    return (
        <div className="min-w-screen min-h-screen bg-base-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-base-200 shadow-xl p-10 lg:p-20 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2 z-10 lg:z-0">
                    <div className="mb-10 md:mb-20 text-warning font-light">
                        <h1
                            className="font-black uppercase text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary mb-10">
                            You seem to be lost!</h1>
                        <p>The page you're looking for isn't available.</p>
                        <p>Try searching again or use the Go Back button below.</p>
                    </div>
                    <div className="mb-20 md:mb-0">
                        <Link to={'/'}>
                            <PrimaryButton classes='gap-6'>Go Back <MdArrowForwardIos></MdArrowForwardIos> </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-64 md:w-96 h-96 md:h-full bg-warning bg-opacity-10 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div className="w-96 h-full bg-base-100 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>
    );
};

export default ErrorPage;