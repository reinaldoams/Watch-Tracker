'use client' 
import React, { ReactNode, createContext, useContext, useState } from 'react'

interface AuthContextType {
  token: string | undefined
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>
  firstName: string | undefined
  setFirstName: React.Dispatch<React.SetStateAction<string | undefined>>
  lastName: string | undefined
  setLastName: React.Dispatch<React.SetStateAction<string | undefined>>
  email: string | undefined
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined)
  const [firstName, setFirstName] = useState<string | undefined>(undefined)
  const [lastName, setLastName] = useState<string | undefined>(undefined)
  const [email, setEmail] = useState<string | undefined>(undefined)

  return (
    <AuthContext.Provider value={{ token, setToken, firstName, setFirstName, lastName, setLastName, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
};
