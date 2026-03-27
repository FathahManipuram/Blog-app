import { Edit } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditButton = ({id}) => {
	const navigate= useNavigate()

	
	const handleEdit=()=>{
		const conformEdit= window.confirm("Do you want edit your blog?")
		if(conformEdit){
navigate(`/edit/${id}`)
		}
    return
	}


  return (
	<>
	<p onClick={handleEdit} className='text-xs p-2 rounded-full border border-white/10 backdrop-blur-md bg-black/40'><Edit size={14} /></p>
	</>
  )
}

export default EditButton
