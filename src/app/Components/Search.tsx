import React from 'react'

export default function Search() {
  return (
    <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
      <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
      </span>
      <input className="block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl" placeholder="Search..." type="text" />
      <span className="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </span>
    </div>
  )
}

