'use client'
import { initializeSupabase } from '@/supabase/init'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuth } from '../Context/auth'
import { redirect, useSearchParams } from 'next/navigation'

type LoginInputs = {
    title: string
    type: 'movie' | 'series' | 'book'
}

export default function Create() {
    const [formError, setFormError] = useState<false | string>(false)
    const [messageSuccess, setMessageSuccess] = useState<string | undefined>()

    const { } = useAuth()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginInputs>()

    async function seeUser() {
        const supabase = initializeSupabase()

        const { data: { user } } = await supabase.auth.getUser()

        console.log('user', user)
    }
    seeUser()
    const onSubmit: SubmitHandler<LoginInputs> = async submitHandlerData => {
        setFormError(false)
        const supabase = initializeSupabase()

        if (!supabase) {
            setFormError('Error connecting to server')
            return
        }

        const { data: { user } } = await supabase.auth.getUser()

        const { title, type } = submitHandlerData

        const { error } = user ? await supabase
            .from(type)
            .insert({ title, user_id: user.id }) : { error: { message: 'User not found' } }

        if (error) {
            setFormError(error.message)
            console.error(error.message)
        } else {
            setMessageSuccess(`Media "${title}" was created in ${type}`)
            reset()
            setTimeout(() => {
                setMessageSuccess(undefined)
            }, 3000);
        }
    }

    if (messageSuccess) return (
        <div className="bg-black p-6  md:mx-auto">
            <svg viewBox="0 0 24 24" className="text-[#525252] w-16 h-16 mx-auto my-6">
                <path fill="#FFF"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
            </svg>
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-200 font-semibold text-center">{messageSuccess}</h3>
                <p className="text-gray-200 my-2">You can now start tracking it in the main page.</p>
            </div>
        </div>
    )

    return (
        <div className="max-w-xl container mx-auto ">
            <div className=" w-full">
                <p className="text-center text-neutral-600 text-base font-semibold text-white">Track a new media</p>
                <div className="mt-10">
                    <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-2">
                            <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg">
                                <input type="text" placeholder="Title" id="titleInput"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                    {...register("title", { required: 'Please provide an title' })}
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3>Please select a type</h3>
                            <div>
                                <label htmlFor="movieRadioButton">
                                    <input type="radio" aria-label="Movie" placeholder="Type" id="movieRadioButton" value="movies"
                                        className="text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                        {...register("type", { required: 'Please provide a type' })}
                                    />
                                    Movie
                                </label>
                            </div>
                            <div>
                                <label htmlFor="seriesRadioButton">
                                    <input type="radio" aria-label="Series" placeholder="Type" id="seriesRadioButton" value="series"
                                        className="text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                        {...register("type", { required: 'Please provide a type' })}
                                    />
                                    TV Series
                                </label>
                            </div>
                            <div>
                                <label htmlFor="bookRadioButton">
                                    <input type="radio" aria-label="Book" placeholder="Type" id="bookRadioButton" value="books"
                                        className="text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                                        {...register("type", { required: 'Please provide a type' })}
                                    />
                                    Book
                                </label>
                            </div>
                            {formError ? <p className='text-red-500'>{formError}</p> : <></>}
                        </div>
                        <button
                            className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Create new media</button>

                    </form>
                    <div className="relative flex items-center mt-8">
                        <div className="border h-0 w-2/4 border-stone-300"></div>
                        <div className=" text-stone-300 px-4 text-sm font-normal">OR</div>
                        <div className=" border h-0 w-2/4 border-stone-300"></div>
                    </div>
                    <Link href="/signup">
                        <button
                            className="border border-indigo-900 rounded-lg text-center text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">Doesn't have an account? Signup
                            now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}