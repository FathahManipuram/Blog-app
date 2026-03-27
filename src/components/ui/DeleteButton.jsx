import React from 'react'
import { handleDelete } from '../../helper/utils'
import { Trash } from 'lucide-react'
import { useBlog } from '../../context/BlogContext'


const DeleteButton = ({id}) => {
	const {setBlogs} = useBlog()
  return (
	<p onClick={()=>handleDelete(id, setBlogs)} className='text-xs p-2 rounded-full border border-white/10 backdrop-blur-md bg-black/40'><Trash size={14}/></p>	
  )
}

export default DeleteButton;
