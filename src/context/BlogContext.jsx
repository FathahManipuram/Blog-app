import { collection, getDocs } from "firebase/firestore";
import { Children, createContext, useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import Loader from "../components/ui/Loader";


const BlogContext= createContext()

export const BlogProvider=({children})=>{
	const [blogs, setBlogs]=useState([])
	const [loader, setLoader]= useState(true)
	
		useEffect(()=>{
			const fetchBlogs= async()=>{
				const snapshot= await getDocs(collection(db,"blogs"))
				const data= snapshot.docs.map((doc)=>({
					id: doc.id,
					...doc.data()
				}))
				setBlogs(data)
				setLoader(false)
			}
			fetchBlogs()
		},[])
		
if(loader) return <Loader/>
	return(
		<BlogContext.Provider value={{blogs, setBlogs}}>
			{children}
		</BlogContext.Provider>
	)
}


export const useBlog =()=> useContext(BlogContext)