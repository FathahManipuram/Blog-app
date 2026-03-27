import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Empty = () => {
	const navigate= useNavigate()
  return (
	<div className='w-full h-screen flex items-center justify-center flex-col gap-5'>
	  <p className='text-gray-700 text-4xl font-bold'>No blogs found</p>
	  
	  <div className='flex flex-col gap-2 w-3/4 md:w-1/2 md:flex-row'>
	  <Button onClick={()=> navigate(-1)} className={'bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)]'}>Go to home</Button>
	  <Button onClick={()=> navigate("/add")}>Create Your First Post</Button>
	  </div>
	  
	</div>
  )
}

export default Empty
