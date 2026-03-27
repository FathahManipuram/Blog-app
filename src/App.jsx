import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import "./components.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogForm from "./pages/BlogForm";
import BlogCard from "./components/blog/BlogCard";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import Loader from "./components/ui/Loader";
import SingleBlog from "./components/blog/SingleBlog";
import { BlogProvider } from "./context/BlogContext";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import NotFound from "./components/ui/NotFound";

const App = () => {
  return (
    <BlogProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/posts"
              element={
                <ProtectedRoute>
                  <Posts />
                </ProtectedRoute>
              }
            />
            <Route path="/blog/:id" element={<PostDetails />} />
            <Route path="/add" element={
              <ProtectedRoute>
              <BlogForm />
              </ProtectedRoute>
              
              } />
            <Route path="/edit/:id" element={
              <ProtectedRoute>
              <BlogForm />
              </ProtectedRoute>
              
              } />
              
            <Route path="/list" element={
            <ProtectedRoute>
            <BlogList />
            </ProtectedRoute>
            } />

          </Route>

          <Route path="/signup" element={
            <PublicRoute>
            <Signup />
            </PublicRoute>
            } />
          <Route path="/login" element={
            <PublicRoute>
            <Login />
            </PublicRoute>
             } />

         

          <Route path="/loader" element={<Loader />} />
           <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
};

export default App;
