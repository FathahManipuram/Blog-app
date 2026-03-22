// import React, { useState } from 'react'
// import Input from '../components/ui/Input'
// import { auth } from '../services/firebase'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import Button from '../components/ui/Button'


// const Login = () => {
// 	const [email, setEmail]= useState("")
// 	const [password, setPassWord]=useState("")

// 	const handleClick= async()=>{
// 		await signInWithEmailAndPassword(auth, email, password)
// 	}

//   return (
// <div className='flex justify-center items-center h-screen'>
// 	<div className='rounded-2xl overflow-hidden border border-white/70 bg-gray-900/70 backdrop-blur-xl p-7 space-y-3'>
// 	<h1 className='text-center text-3xl pb-5'>Login</h1>
// 	  <Input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeHolder={"Your email"} label={"Username"}/>
// 	  <Input type="password" value={password} onChange={(e)=> setPassWord(e.target.value)} placeHolder={"Your password"} label={"Password"}/>
// 	  <Button onClick={handleClick}>Login</Button>
// 	</div>
// 	</div>
//   )
// }

// export default Login




import React, { useState } from 'react'
import Input from '../components/ui/Input'
import { auth } from '../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { showError, showSuccess } from '../helper/toast'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")

  const handleClick = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
	  showSuccess("Logged in successfully!")
	  console.log("logged")
    } catch (err) {
      showError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">

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