import { ArrowUpRight, Clock } from 'lucide-react'
import React from 'react'


const BlogCard = ({post}) => {
  return (
	<div className='rounded-2xl overflow-hidden border border-white/70 bg-gray-900/70 backdrop-blur-xl hover:bg-gray-800 transition group'>
	  <div className='relative'>
		<img className='w-full h-48 object-cover' src="/src/assets/walk.jpg" alt="post" />

		<div className='absolute top-3 left-3 text-xs py-1 px-3 rounded-full border border-white/10 backdrop-blur-md bg-black/40'>
 <p>title</p>
 </div>
	  </div>


 <div className='p-5 space-y-3'>
	<div className='flex items-center gap-2 text-xs text-gray-400 '>
		<Clock size={14} />
		<span>time</span>
	</div>
	<h3 className='text-lg font-semibold group-hover:text-white transition'>Title</h3>
	<p className='text-sm text-gray-400 line-clamp-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa itaque, eaque voluptates dicta at perspiciatis mollitia? Similique, ex dolores.</p>


<div className='flex items-center justify-between pt-2'>
<div className='flex items-center justify-between pt-2'>
		<span className='py-2 px-5 rounded-full bg-white/5 group-hover:bg-white/10 transition'>Read Article</span>
	</div>
	<div className='p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition'>
	<ArrowUpRight size={18} />
	</div>

</div>
	
 </div>
	 
	</div>
  )
}

export default BlogCard
