import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleRegister = data => {
        console.log(data)
    }
    return (
        <div className='container mx-auto'>
            <div className="w-full max-h-auto overflow-scroll d-block min-h-screen p-4 flex items-center justify-center" >
                <div className="bg-base-100 py-6 px-10 sm:max-w-md w-full ">
                    <div className="text-2xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary pb-12">
                        Login to TimeCraft
                    </div>
                    <form onSubmit={handleSubmit(handleRegister)} >
                        <div>
                            <input type="text" {...register("name", { required: "Your full name is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200" placeholder="Full Name *"
                            />
                            {errors.name && <p className='text-error my-2'>{errors.name.message}</p>}
                        </div>
                        <div className='my-6'>
                            <input type="text" {...register("email", { required: "Your email is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200" placeholder="Your Email" />
                            {errors.email && <p className='text-error my-2'>{errors.email.message}</p>}
                        </div>
                        <div className="my-6">
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200" placeholder="********" />
                            {errors.password && <p className='text-error my-2'>{errors.password.message}</p>}
                        </div>
                        {errors.accepted && <p className='text-error my-2'>{errors.accepted.message}</p>}
                        <div className="flex justify-center my-6">
                            <input className="btn btn-outline rounded-full w-full sm:w-56 text-lg font-semibold "
                                type="submit" value="Login"
                            />
                        </div>
                        <div className="flex justify-center ">
                            <p className="text-gray-500">Already have an account? </p>
                            <Link to={'/login'} className="hover:text-warning hover:underline hover:underline-offset-2 pl-2">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;