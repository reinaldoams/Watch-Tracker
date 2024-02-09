import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className="flex justify-around w-full">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
    </nav>
  )
}

export default NavBar