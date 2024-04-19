'use client'
import Link from 'next/link'
import React from 'react'
import Search from './Search'
import { useAuth } from '../Context/auth'

export default function NavBar() {
  const { token, setToken } = useAuth()

  function handleLogout () {
    setToken(undefined)
  }

  return (
    <div className="mb-6 m-2 bg-gray-500 rounded-xl">
      <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-5">
        <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
          <span className="my-0 flex text-white font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
            <Link href="/">
              Watch Tracker
            </Link>
          </span>
          <span className="pt-1 text-white text-[0.95rem] font-medium">
            Track your media
          </span>
        </div>
        <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
          {token && <Search />}
          <div className="relative flex items-center ml-2 lg:ml-4">
            {token ? (
              <a onClick={handleLogout} className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent shadow-none cursor-pointer rounded-2xl text-stone-500 hover:text-primary active:text-primary focus:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9908 7.82251C16.2897 7.5357 16.7644 7.54547 17.0512 7.84433L20.541 11.4807C20.8195 11.7709 20.8195 12.2291 20.541 12.5193L17.0512 16.1557C16.7644 16.4545 16.2897 16.4643 15.9908 16.1775C15.692 15.8907 15.6822 15.4159 15.969 15.1171L18.2404 12.7502L11.2727 12.7502C10.8585 12.7502 10.5227 12.4144 10.5227 12.0002C10.5227 11.586 10.8585 11.2502 11.2727 11.2502L18.2408 11.2502L15.969 8.88295C15.6822 8.58409 15.692 8.10932 15.9908 7.82251Z" fill="#DDD" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H13.4545C13.8688 3.25 14.2045 3.58579 14.2045 4V7C14.2045 7.41421 13.8688 7.75 13.4545 7.75C13.0403 7.75 12.7045 7.41421 12.7045 7V4.75H4.75V19.25H12.7045V17C12.7045 16.5858 13.0403 16.25 13.4545 16.25C13.8688 16.25 14.2045 16.5858 14.2045 17V20C14.2045 20.4142 13.8688 20.75 13.4545 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V4Z" fill="#DDD" />
                </svg>
              </a>
            ) : (
              <Link href="/login" className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent shadow-none cursor-pointer rounded-2xl text-stone-500 hover:text-primary active:text-primary focus:text-primary">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#DDD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}