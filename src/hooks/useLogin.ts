import { useAuth } from "@/app/Context/auth";
import { initializeSupabase } from "@/supabase/init";
import { Session, User, WeakPassword } from "@supabase/supabase-js";

type DataType = {
    user: User | null
    session: Session | null
    weakPassword?: WeakPassword | undefined
}

function setUserContextValues(data: DataType,
    accessToken: string,
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>,
    setFirstName: React.Dispatch<React.SetStateAction<string | undefined>>,
    setLastName: React.Dispatch<React.SetStateAction<string | undefined>>,
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>,
    setUserId: React.Dispatch<React.SetStateAction<string | undefined>>,
) {
    if (accessToken) setToken(accessToken)
    const identityData = data?.user?.identities?.[0]?.identity_data
    if (identityData) {
        setUserId(data.user?.id)
        setEmail(data.user?.email)
        setFirstName(identityData.firstName)
        setLastName(identityData.lastName)
    }
}

async function loginUser(email: string, password: string) {
    const supabase = initializeSupabase()

    if (!supabase) {
        return {
            error: {
                message: 'Error connecting to server'
            }
        }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email, password
    })

    return { data, error }
}

async function signUpUser(email: string, password: string, data: { [key: string]: any }) {
    const supabase = initializeSupabase()

    if (!supabase) {
        return {
            error: {
                message: 'Error connecting to server'
            }
        }
    }

    const { data: signupData, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: { data }
    })

    return { data: signupData, error }
}

export default function () {
    return { setUserContextValues, loginUser, signUpUser }
}