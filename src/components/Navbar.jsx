import React from 'react'
import { useAuth } from '../context/AuthContex'
import { CircleUser } from 'lucide-react'
import Button from './ui/Button'
import { useNavigate } from 'react-router-dom'
import { logoutHandle } from '../helper/utils'

const Navbar = () => {
	const {user}=useAuth()
	const navigate= useNavigate()
  return (
	<div className='fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50'>
	 
	  <div className='backdrop-blur-xl bg-gray-900/70 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg'>
		<p className='text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent'>My Blog</p>
		<div className={`flex gap-5 items-center ${!user? "w-1/5" :""}`}>
		 {user ?(
			<>
			<p className='cursor-pointer hover:text-[var(--primary)]' onClick={logoutHandle}>Logout</p>
			<CircleUser/>
			</>
			
			
			):(
			<Button onClick={()=>navigate("/login") }>Login</Button>
		 )}
		</div>

	  </div>
	
	</div>
  )
}

export default Navbar
