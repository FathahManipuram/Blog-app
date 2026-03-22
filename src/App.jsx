import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'
import './components.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BlogForm from './pages/BlogForm'
import BlogCard from './components/blog/BlogCard'
import { ToastContainer } from 'react-toastify'



const App = () => {
  return (
  
   <BrowserRouter>
     <ToastContainer position="top-right" />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/posts" element={<Posts />} />
    <Route path='/posts/:id' element={<PostDetails/>} />
    <Route path='/add' element={<BlogForm/>} />


    <Route path='/card' element={<BlogCard/>} />

   </Routes>
   </BrowserRouter>
  )
}

export default App
