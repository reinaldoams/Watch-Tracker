'use client'
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type LoginInputs = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data)
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
                <input type="password" aria-label="Password" name="" placeholder="Password" id=""
                  className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none"
                  {...register("password")}
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