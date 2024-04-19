'use client'
import React from 'react'
import { useAuth } from '../Context/auth'

export default function MediaList() {
    const { token } = useAuth()

    if (!token) return <div>Login or register to access your Watch Tracker!</div>

    return (
        <div>MediaList</div>
    )
}
