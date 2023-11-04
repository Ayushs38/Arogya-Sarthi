"use client";
import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form';


function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data: any) => console.log(data);

    return (
        <div>
            <section className="bg-amber-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
                    >
                        <img
                            className="w-35 h-20 mr-2"
                            src="Arogya sarthi Logo.png"
                            alt="logo"
                        />

                    </a>
                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Get Started
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="text"
                                        {...register("example")}


                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                                        placeholder="abc@xyz.com"


                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     "
                                        required={true}
                                    />
                                </div>
                                

                                <button
                                    type="submit"
                                    className="w-full text-black bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                >
                                    Sign In
                                </button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Don't have an account?{" "}
                                    <Link href="/register " className="font-medium text-blue-700 hover:underline ">Register here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login 