'use client'
import { initializeSupabase } from '@/supabase/init'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuth } from '../Context/auth'

type LoginInputs = {
  email: string
  password: string
}

export default function Login() {
  const [formError, setFormError] = useState<false | string>(false)

  const { setToken } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = async submitHandlerData => {
    console.log(submitHandlerData)
    const supabase = initializeSupabase()

    if (!supabase) {
      console.log('no database')
      setFormError('Error connecting to server')
      return
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: submitHandlerData.email,
      password: submitHandlerData.password,
    })

    if (error) {
      setFormError('Error creating user')
      console.error(error.message)
    } else {
      data?.session?.access_token && setToken(data.session.access_token)
      console.log('user "data":', data)
    }
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
                  {...register("email", { required: 'Please provide an email' })}
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                <input type="password" aria-label="Password" placeholder="Password" id=""
                  className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                  {...register("password", { required: 'Please provide a password' })}
                />
              </div>
            </div>
            <button
              className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Login
              now</button>

          </form>
          <div className="relative flex items-center mt-8">
            <div className="border h-0 w-2/4 border-stone-300"></div>
            <div className=" text-stone-300 px-4 text-sm font-normal">OR</div>
            <div className=" border h-0 w-2/4 border-stone-300"></div>
          </div>
          <Link href="/signup">
            <button
              className="border border-indigo-900 rounded-lg text-center text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">Signup
              now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}