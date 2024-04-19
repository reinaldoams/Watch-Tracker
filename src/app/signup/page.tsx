'use client'
import { initializeSupabase } from '@/supabase/init'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuth } from '../Context/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

type SignupInputs = {
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
}

export default function Signup() {
    const [formError, setFormError] = useState<false | string>(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { setToken } = useAuth()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm<SignupInputs>()

    const onSubmit: SubmitHandler<SignupInputs> = async function (submitHandlerData) {
        if (submitHandlerData.password !== submitHandlerData.confirmPassword) {
            console.log('setting password dont match error')
            setError('confirmPassword', { type: 'focus', message: 'Passwords don\'t match!' }, { shouldFocus: true });
            return
        }

        const supabase = initializeSupabase()

        if (!supabase) {
            console.log('no database')
            setFormError('Error connecting to server')
            return
        }

        const { data, error } = await supabase.auth.signUp({
            email: submitHandlerData.email,
            password: submitHandlerData.password,
            options: {
                data: {
                    firstName: submitHandlerData.firstName,
                    lastName: submitHandlerData.lastName,
                }
            }
            
        })

        if (error) {
            setFormError('Error creating user')
            console.error(error.message)
        } else {
            if (data?.session?.access_token) {
                setToken(data.session.access_token)
                redirect('/')
            }
        }
    }



    return (
        <div className="max-w-xl container mx-auto ">
            <div className=" w-full">
                <h2 className="text-center text-neutral-600 text-base font-semibold text-white text-3xl">Login into your account</h2>
                <div className="mt-10">
                    <p className='text-red-500 text-center text-2xl'>{formError}</p>
                    <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type="text" placeholder="First Name" id="firstNameInput"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("firstName", { required: 'Please provide an first name' })}
                                />
                            </div>
                            <p className='text-red-500'>{errors?.firstName?.message}</p>
                        </div>
                        <div>
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type="text" placeholder="Last Name" id="lastNameInput"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("lastName", { required: 'Please provide an last name' })}
                                />
                            </div>
                            <p className='text-red-500'>{errors?.lastName?.message}</p>
                        </div>
                        <div>
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type="text" placeholder="Email" id="emailInput"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("email", { required: 'Please provide an email' })}
                                />
                            </div>
                            <p className='text-red-500'>{errors?.email?.message}</p>
                        </div>
                        <div>
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type={showPassword ? 'text': 'password'} aria-label="Password" placeholder="Password" id=""
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("password", { required: 'Please provide a password' })}
                                />
                                <Image className="mr-2" onClick={() => setShowPassword(prev => !prev)} src={showPassword ? '/images/svg/hide-icon.svg' : '/images/svg/show-icon.svg'} width={30} height={30} alt={showPassword ? 'Hide password icon' : 'Show password icon'} />
                            </div>
                            <p className='text-red-500'>{errors?.password?.message}</p>
                        </div>
                        <div>
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                <input type={showConfirmPassword ? 'text': 'password'} aria-label="Confirm Password" placeholder="Confirm password" id="confirmPassword"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("confirmPassword", { required: 'Please confirm your password' })}
                                />
                                <Image className="mr-2" onClick={() => setShowConfirmPassword(prev => !prev)} src={showConfirmPassword ? '/images/svg/hide-icon.svg' : '/images/svg/show-icon.svg'} width={30} height={30} alt={showConfirmPassword ? 'Hide password icon' : 'Show password icon'} />
                            </div>
                            <p className='text-red-500'>{errors?.confirmPassword?.message}</p>
                        </div>
                        <button
                            className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Create user</button>

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