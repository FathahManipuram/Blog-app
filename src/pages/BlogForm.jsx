import React, { useEffect, useReducer } from 'react'
import { blogReducer, initialState } from '../Reducer/blogReducer'
import { useNavigate, useParams } from 'react-router-dom'
import {addDoc, collection, doc, getDoc, updateDoc} from "firebase/firestore"
import { db } from '../services/firebase'
import Button from '../components/ui/Button'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { showSuccess } from '../helper/toast'
import { useAuth } from '../context/AuthContex'

const BlogForm = () => {
	const [state, dispatch]= useReducer(blogReducer, initialState)
	const {user} =useAuth()
	const navigate= useNavigate()
	const {id}= useParams()

useEffect(()=>{
	if(!id){
		dispatch({type: "RESET"})
		return
	}
	const fetchBlog= async ()=>{
		const docRef= doc(db, "blogs", id);
		const snapshot = await getDoc(docRef);

		if(snapshot.exists()){
			const data= snapshot.data()
			dispatch({type: "SET_FIELD", field: "category", value: data.category})
			dispatch({type: "SET_FIELD", field: "title", value: data.title});
			dispatch({type: "SET_FIELD", field: "content", value: data.content})
		}
	}
	fetchBlog()
},[id])


	const handleSubmit= async(e)=>{
		e.preventDefault();

		
		if(!state.title.trim()){
			return dispatch({type: "SET_ERROR", payload: "Please enter a blog title."})
		}

		if(!state.category || state.category.trim()===""){
			return dispatch({type: "SET_ERROR", payload: "Please select a category."})
		}

		const plainText= state.content.replace(/<[^>]*>/g,"").trim();

		if(plainText.length < 100){
			return dispatch({type:"SET_ERROR", 
				payload: `Content is too short (${plainText.length}/100 chars). Please write a bit more!`
			})
		}

		try{

dispatch({type:"SET_LOADING", payload:true})

const blogData= {
		userId: user.uid,
		category: state.category,
		title: state.title,
		content: state.content,
		createdAt:Date.now(),
	}

 if(id){
	await updateDoc(doc(db, "blogs", id),blogData)
 }else{
	await addDoc(collection(db,"blogs"),{
		...blogData,
		createdAt: Date.now()
	});
 }
showSuccess("Blog created successfully")
 dispatch({type: "RESET"});
 navigate("/")
		}catch(err){
			dispatch({type:"SET_ERROR", payload: err.message})
		}finally{
			dispatch({type: "SET_LOADING", payload: false})
		}

	}
  return (
	<div className='max-w-4xl mx-auto p-6 mt-28'>
<div className='flex flex-rows items-center justify-between pb-4'>
<h2 className='text-2xl font-bold text-gray-800'>{id ? "Edit Blog Post": "Create New Post"}</h2>
<div className='w-1/5'><Button onClick={()=>navigate(-1)}>Cancel</Button></div>
</div>
<form onSubmit={handleSubmit} className='space-y-6'>
<input 
className='w-full text-gray-950 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none transition'
value={state.title} 
onChange={(e)=>{
	dispatch({
		type: "SET_FIELD",
		field: "title",
		value: e.target.value,
	})
}}
placeholder='Enter title'
/>

<input 
className='w-full text-gray-950 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none transition'
value={state.category} 
onChange={(e)=>{
	dispatch({
		type: "SET_FIELD",
		field: "category",
		value: e.target.value,
	})
}}
placeholder='Enter Category'
/>

<div className='bg-white text-gray-950 rounded-xl overflow-hidden border border-gray-300'>
<ReactQuill
className='min-h-96'
theme='snow' 
value={state.content}
onChange={(value)=>
	dispatch({
		type:"SET_FIELD",
		field: "content",
		value,
	})
}
placeholder='Write your story here...'
/>
</div>
<div className='flex flex-col gap-3'>
<Button disabled={state.loading}>{state.loading ? "Processing..." : "Save Post"}</Button>
{state.error && <p className='text-red-500 text-sm font-medium p-3 rounded-lg border border-red-700'>{state.error}</p>}
</div>
</form>
</div>
  )
}

export default BlogForm
