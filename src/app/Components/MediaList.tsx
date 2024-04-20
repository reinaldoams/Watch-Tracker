'use client'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/auth'
import { initializeSupabase } from '@/supabase/init'

export default function MediaList({ type }: { type: string }) {
    const [listError, setListError] = useState<string | undefined>()
    const [userData, setUserData] = useState<any>()

    const { userId } = useAuth()

    if (!userId) return <div>Login or register to access your Watch Tracker!</div>

    async function fetchUserData() {
        const supabase = initializeSupabase()
        if (!supabase) return { error: { message: 'Error connecting to server' } }
        const { error, data } = await supabase
            .from('cities')
            .select()
    }

    useEffect(() => {
        if (userId) fetchUserData()
    }, [userId])


    return (
        <div>MediaList</div>
    )
}
