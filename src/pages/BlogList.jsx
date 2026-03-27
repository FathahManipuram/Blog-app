
import React, { useState } from 'react'
import BlogCard from '../components/blog/BlogCard'
import { AnimatePresence, motion } from 'motion/react'
import { containerVariants} from '../helper/utils'
import { useBlog } from '../context/BlogContext'
import Empty from '../components/ui/Empty'
import Loader from '../components/ui/Loader'
import Button from '../components/ui/Button'

const BlogList = () => {
const [currentPage, setCurrentPage]= useState(1)
const {blogs, setBlogs} = useBlog()


  const itemPerPage= 6
  const totalPages = Math.ceil((blogs?.length|| 0)/itemPerPage)

  if(blogs?.length===0) return <Empty/>

  const startIndex= (currentPage- 1)* itemPerPage
  const endIndex = startIndex + itemPerPage

  const currentBlogs= blogs?.slice(startIndex, endIndex)

  const handlePageChange=(pageNumber)=>{
	setCurrentPage(pageNumber)
	window.scrollTo({top:0, behavior:'smooth'})
  }




  return (
	<div>
		<motion.div 
        className="blog-grid pt-28 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

<AnimatePresence mode='wait'>
	  
	  <motion.div 
key={currentPage}
initial={{opacity:0,y:20}}
animate={{opacity:1, y:0}}
exit={{opacity: 0, y:-20}}
transition={{duration: 0.3, ease:"easeOut" }}
className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] px-4 md:px-12 lg:px-24 mx-auto max-w-7xl gap-12'>
	{currentBlogs?.map((blog)=>(
		<div key={blog.id}>
			<BlogCard post={blog} setBlogs={setBlogs}/>
		</div>

	))}
	</motion.div>
</AnimatePresence>

	{totalPages > 1 &&(
		<div className='flex justify-center items-center gap-2 mt-16'>
			<Button 
			onClick={()=> handlePageChange(currentPage-1)}
			disabled={currentPage === 1}
			className={`px-12 py-2 w-auto border border-[var(--border)] bg-[var(--surface)] hover:bg[var(--surface-)] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed': ''}`}
			>Prev</Button>
			{Array.from({length: totalPages},(_, index)=>(
				<button
				key={index+1}
				onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 rounded-lg border border-[var(--border)] transition-all flex items-center justify-center
                  ${currentPage === index + 1 
                    ? 'bg-[var(--primary)] text-white border-[var(--primary)]' // Active page style
                    : 'bg-[var(--surface)] hover:bg-[var(--border)]'           // Inactive page style
                  }`}
				>{index + 1}</button>
			))}
			<Button 
			onClick={() => handlePageChange(currentPage + 1)}
			disabled={currentPage === totalPages}
			className={`px-12 py-2 w-auto border border-[var(--border)] bg-[var(--surface)] hover:bg[var(--surface-)] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
			>
				Next
			</Button>

		</div>
	)}
	</motion.div>
	</div>
  )
}

export default BlogList
