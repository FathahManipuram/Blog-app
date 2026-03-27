// import React, { useState } from 'react'
// import Input from '../components/ui/Input'
// import { auth } from '../services/firebase'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import Button from '../components/ui/Button'

import React, { useState } from 'react'
import Input from '../components/ui/Input'
import { auth } from '../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Button from '../components/ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { showError, showSuccess } from '../helper/toast'
import { MoveLeft } from 'lucide-react'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const navigate= useNavigate()

  const handleClick = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
	  showSuccess("Logged in successfully!")
    navigate("/")
    } catch (err) {
      showError(err.message)
    }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">
      <p onClick={()=> navigate(-1)} className='absolute top-8 left-8 bg-[var(--surface)] p-3 rounded-full hover:bg-[var(--surface-hover)] cursor-pointer'><MoveLeft/></p>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-[var(--border)] 
        bg-[var(--surface)] backdrop-blur-xl p-8 shadow-2xl space-y-6">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-[var(--text-secondary)] text-sm">
            Login to your account
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeHolder="Enter your email"
            label="Email"
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            placeHolder="Enter your password"
            label="Password"
          />
        </div>

        {/* Button */}
        <Button onClick={handleClick}>
          Login
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
          <div className="flex-1 h-px bg-[var(--border)]" />
          OR
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-[var(--text-secondary)]">
          Don't have an account?{" "}
          <span className="text-[var(--primary)] cursor-pointer hover:underline">
			<Link to="/signup">Sign up</Link>
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login