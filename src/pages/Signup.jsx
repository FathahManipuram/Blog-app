import React, { useState } from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { auth } from '../services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { showSuccess } from '../helper/toast'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSignup = async () => {
	console.log("clicked")
    setError("")

    if (!email || !password || !confirmPassword) {
      return setError("All fields are required")
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters")
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match")
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      showSuccess("User created")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">

      <div className="w-full max-w-md rounded-2xl border border-[var(--border)] 
        bg-[var(--surface)] backdrop-blur-xl p-8 shadow-2xl space-y-6">

       
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-[var(--text-secondary)] text-sm">
            Join us and start your journey
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <div className="space-y-4">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeHolder="Enter your name"
            label="Name"
          />

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
            onChange={(e) => setPassword(e.target.value)}
            placeHolder="Enter your password"
            label="Password"
          />

          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeHolder="Confirm your password"
            label="Confirm Password"
          />
        </div>

        <Button onClick={handleSignup}>
          Sign Up
        </Button>

       
        <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
          <div className="flex-1 h-px bg-[var(--border)]" />
          OR
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

    
        <p className="text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{" "}
          <span className="text-[var(--primary)] cursor-pointer hover:underline">
            <Link to="/login">Login</Link>
          </span>
        </p>

      </div>
    </div>
  )
}

export default Signup