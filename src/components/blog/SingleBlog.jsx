import { ArrowLeft, Clock, Edit, Trash } from 'lucide-react'
import React from 'react'
import EditButton from '../ui/EditButton'
import DeleteButton from '../ui/DeleteButton'
import { localeDate } from '../../helper/utils'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContex'


const SingleBlog = ({blog}) => {
 const navigate= useNavigate()
 const {user}= useAuth()
  return (
	<div className='overflow-hidden bg-gray-900/70 backdrop-blur-xl mt-36'>
	  <div className='relative'>
		<img className='w-full h-96 object-cover transition' src="/src/assets/walk.jpg" alt="post" />

	<div className='absolute top-3 left-3 flex items-center justify-between gap-1 right-3'>
 <p className='text-xs py-1 px-3 rounded-full border border-white/10 backdrop-blur-md bg-black/40'>{blog.category}</p>

	<div className='flex gap-1'>
		<p onClick={()=>navigate(-1)} className='text-xs p-2 rounded-full border border-white/10 backdrop-blur-md bg-black/40'><ArrowLeft size={14}/></p>
		{user.uid===blog.userId && (
			<>
		<EditButton id={blog.id}/>
		<DeleteButton id={blog.id}/>
			</>
		)}
		
 </div>

 
 </div>
	  </div>


 <div className='p-6 md:p-12 space-y-4 w-full overflow-hidden'>
	<div className='flex items-center gap-2 text-xs text-gray-400 '>
		<Clock size={14} />
		<span>{localeDate(blog.createdAt)}</span>
	</div>
	<h3 className='text-3xl font-semibold'>{blog.title}</h3>
	
		<div className='prose prose-invert max-w-none text-sm sm:text-base' dangerouslySetInnerHTML={{__html: blog.content}} />
	
	


<div className='flex items-center justify-between pt-2'>

	

</div>
	
 </div>
	 
	</div>
  )
}

export default SingleBlog




