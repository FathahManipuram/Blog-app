import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const subHead=[
  "Building the ultimate web experience.",
  "Exploring the frontiers of React.",
  "Designing state-of-the-art UI.",
  "Engineering for the modern web."
]
const Home = () => {
	const [text, setText]= useState("")
	const [phraseIndex, setPhraseIndex]=useState(0)
	const [isDeleting, setIsDeleting]= useState(false)


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
	<div className='hero-container'>
		<motion.div
		initial={{opacity: 0, scale: 0.9}}
		animate={{opacity: 1, scale: 1}}
		transition={{duration: 0.8, delay: 0.2}}
		className='hero-content'
		>
			<div className='badge glass'>
				<span className='badge-dot'></span> Journey
				 Now reading Version 2.0
			</div >
			<h1 className='hero-title'>
				Elavate your <span className='text-gradient'>Digital</span> Journey
			</h1>

			<div className='hero-subtitle-wrapper'>
				<p className='hero-subtitle'>{text}<span className='cursor'>|</span></p>
			</div>

			<div className='hero-cta'>
				<button
					className='btn-primary'
				>
				Start Reading
				</button>
				<button className='btn-secondary-glass'>Subscribe</button>
			</div>
		</motion.div>

	</div>
  )
}

export default Home
