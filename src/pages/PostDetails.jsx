import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { showError } from '../helper/toast'
import Loader from '../components/ui/Loader'
import { db } from '../services/firebase'
import SingleBlog from '../components/blog/SingleBlog'
import NotFound from '../components/ui/NotFound'


const PostDetails = () => {
	const {id}= useParams()
	const navigate= useNavigate()

	const [blog, setBlog]=useState(null)
	const [load, setLoad]= useState(true)
	

	useEffect(()=>{
		const fetchBlog= async ()=>{
			try{
				const docRef= doc(db, "blogs",id);
				const snapshot= await getDoc(docRef)

				if(snapshot.exists()){
					setBlog({id: snapshot.id, ...snapshot.data()})
				}else{
					navigate("*")
				}

			}catch(err){
				showError(err);
				console.log(err)
			}finally{
				setLoad(false)
			}
		}
		fetchBlog()
	},[id])

	if(load) return <Loader/>
  return (
	<div>
	 {blog && (
		<SingleBlog blog={blog}/>
	 )}
	</div>
  )
}

export default PostDetails
