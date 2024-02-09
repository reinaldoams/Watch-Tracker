import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className="max-w-xl container mx-auto ">
      <div className=" w-full">
        <p className="text-center text-neutral-600 text-base font-semibold text-white">Login into your account</p>
        <div className="mt-10">
          <form action="" className="px-10">
            <div className="mt-2">
              <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                <input type="text" name="" aria-label="Email" placeholder="Email" id=""
                  className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                <input type="password" aria-label="Password" name="" placeholder="Password" id=""
                  className="w-full text-neutral-600 placeholder:text-neutral-600 p-4 bg-transparent outline-none" />
              </div>
            </div>
            <button
              className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Login
              now</button>

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

          </form>
        </div>
      </div>
    </div>
  )
  return (
    <form>
      <label htmlFor="email-input">E-mail</label>
      <input id="email-input" />
      <label htmlFor="password-input">Password</label>
      <input id="password-input" />
    </form>
  )
}

export default Login