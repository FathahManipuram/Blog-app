import { onAuthStateChanged } from 'firebase/auth/cordova';
import React, { Children, useContext, useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import { auth } from '../services/firebase';

const AuthContext= createContext();

export function AuthProvider({children}){
	const [user, SetUser]=useState(null)
	const [loading, setLoading]= useState(true)


useEffect(()=>{
	const unsubscribe= onAuthStateChanged(auth, (user)=>{
	SetUser(user)	
	setLoading(false)
	})
	return ()=> unsubscribe()
},[])

	
  return (
	<AuthContext.Provider value={user}>
		{!loading && children}
	</AuthContext.Provider>
  )
}

export const useAuth= ()=> useContext(AuthContext)


