import Link from 'next/link'
import React from 'react'
import Search from './Search'

export default function NavBar() {
  return (
    <div className="mb-6 m-2 bg-gray-500 rounded-xl">
      <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-5">
        <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
          <span className="my-0 flex text-white font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
            Watch Tracker
          </span>
          <span className="pt-1 text-white text-[0.95rem] font-medium">
            Track your media
          </span>
        </div>
        <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
          <Search />
          <div className="relative flex items-center ml-2 lg:ml-4">
            <Link href="/login" className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent shadow-none cursor-pointer rounded-2xl text-stone-500 hover:text-primary active:text-primary focus:text-primary">
              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#DDD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}