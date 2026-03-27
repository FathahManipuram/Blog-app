import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { showError, showSuccess } from "./toast";
import { signOut } from "firebase/auth";


export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};


//Delete
	export const handleDelete= async (id, setBlogs)=>{
    const confirmDelete= window.confirm("Do you want delete?")
    if(confirmDelete){
   await deleteDoc(doc(db, "blogs", id))
   showSuccess("Delete successfully")
		setBlogs((prev)=> prev.filter((b)=> b.id !==id))
    }
		return
	}


  //local Date
  export const localeDate=(timestamp)=>{
    const date= new Date(timestamp)
    return date.toLocaleString()
  }

  //logout

export const logoutHandle= async ()=>{
    try{
      const conformLogout= window.confirm("Do you want logout")
      if(conformLogout){
      await signOut(auth);
      }else{
        return
      }

    }catch(error){
showError(error.message)
    }
  }


 



