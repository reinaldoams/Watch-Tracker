'use client'
import { initializeSupabase } from '@/supabase/init'
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type SignupInputs = {
    email: string
    password: string
    confirmPassword: string
}

export default function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignupInputs>()

    const onSubmit: SubmitHandler<SignupInputs> = (data) => {
        const supabase = initializeSupabase()
        console.log('supabase', supabase)
        console.log('data', data)
    }

    return (
        <div className="max-w-xl container mx-auto ">
            <div className=" w-full">
                <p className="text-center text-neutral-600 text-base font-semibold text-white">Login into your account</p>
                <div className="mt-10">
                    <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-2">
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type="text" placeholder="Email" id="emailInput"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("email")}
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type="password" aria-label="Password" placeholder="Password" id=""
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("password")}
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type="password" aria-label="Password" placeholder="Confirm password" id=""
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("confirmPassword")}
                                />
                            </div>
                        </div>
                        <button
                            className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Login
                            now</button>

                    </form>
                    <div className="relative flex items-center mt-8">
                        <div className="border h-0 w-2/4 border-stone-300"></div>
                        <div className="text-stone-300 px-4 text-sm font-normal">OR</div>
                        <div className="border h-0 w-2/4 border-stone-300"></div>
                    </div>
                    <Link href="/login">
                        <button
                            className="border border-indigo-900 rounded-lg text-center text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">Already have an account? Click here to login</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}