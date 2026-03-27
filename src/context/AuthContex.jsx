import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext} from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import { auth } from '../services/firebase';
import { useReducer } from 'react';

const AuthContext= createContext();
 const initialState={
	user: null,
	loading: true,
 }

 const reducer=(state, action)=>{
	switch(action.type){
		case "SET_USER":
			return{
				...state,
				user: action.payload,
				loading: false,
			}
		case "LOGOUT":
			return{
				...state,
				user: null,
				loading: false,
			}	
		default:
			return state	
	}

 }

export function AuthProvider({children}){
const [state, dispatch]= useReducer(reducer, initialState)
console.log("context state:", state)

useEffect(()=>{
	const unsubscribe= onAuthStateChanged(auth, (user)=>{
	if(user){
		dispatch({type: "SET_USER", payload: user})
	}else{
		dispatch({type: "LOGOUT"})
	}
	})
	return ()=> unsubscribe()
},[])

	
  return (
	<AuthContext.Provider value={{...state,dispatch}}>
		{!state.loading && children}
	</AuthContext.Provider>
  )
}

export const useAuth= ()=> useContext(AuthContext)


