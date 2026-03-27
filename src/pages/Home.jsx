import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import { ChevronRight } from 'lucide-react'
import { useAuth } from '../context/AuthContex'

const subHead=[
  "Share your stories with the world.",
  "Discover perspectives that inspire.",
  "Write your thoughts, beautifully.",
  "Connect through the power of words."
]
const Home = () => {
	const [text, setText]= useState("")
	const [phraseIndex, setPhraseIndex]=useState(0)
	const [isDeleting, setIsDeleting]= useState(false)
	const navigate= useNavigate()
	const {dispatch}= useAuth()

useEffect(()=>{
	const currentphrase= subHead[phraseIndex]
	let typespeed= isDeleting? 30 : 80;

	if(!isDeleting && text===currentphrase){
		typespeed= 1000;
		setIsDeleting(true)
	}else if(isDeleting && text===''){
		setIsDeleting(false)
		setPhraseIndex((prev)=> (prev+1) % subHead.length)
		typespeed=5000;
	}

	const timer= setTimeout(()=>{
		setText(currentphrase.substring(0,text.length+(isDeleting? -1:1)))
	}, typespeed)

return ()=> clearTimeout(timer)
},[text, isDeleting,phraseIndex])



  return (
	<div className='min-h-screen flex items-center justify-center bg-[var(--bg)] px-4'>
		<motion.div
		initial={{opacity: 0, scale: 0.9}}
		animate={{opacity: 1, scale: 1}}
		transition={{duration: 0.8, delay: 0.2}}
		className='max-w-3xl text-center space-y-6'
		>
			<div className='inline-flex items-center gap-4 px-6 py-2 font-normal text-xs sm:text-sm uppercase text-[var(--text-secondary)] bg-[var(--surface)] backdrop-blur-xl border border-[var(--border)] rounded-2xl'>
				<span className='w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]'></span> Your new creative space Version 1.0
			</div >
			<h1 className="text-4xl md:text-8xl font-bold leading-tight">
				Amplify your <span className='text-gradient'>Voice</span> Today
			</h1>

			<div className='text-[clamp-(1.2rem, 2vw, 1.5rem)]'>
				<p className='"text-gray-400 text-lg min-h-[28px] pb-10'>{text}<span className='cursor'>|</span></p>
			</div>

			<div className='flex gap-5 items-center justify-center md:w-1/2 mx-auto'>
				<Button onClick={()=> navigate("/list")} className={"bg-gradient-to-br from-primary to-secondary flex justify-center items-center gap-5"}>Start Reading <ChevronRight size={18}/> </Button>
				<Button onClick={()=> navigate("/add")} className={'bg-var(--bg) border border-[var(--border)] hover:bg-[var(--surface)]'}>Create</Button>
			</div>
		</motion.div>

	</div>
  )
}

export default Home
