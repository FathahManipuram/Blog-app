import { ArrowLeft, ArrowUpRight, Clock, Edit, Trash } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import EditButton from "../ui/EditButton";
import DeleteButton from "../ui/DeleteButton";
import { useAuth } from "../../context/AuthContex";
import { localeDate } from "../../helper/utils";

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  const {user} =useAuth()

  const singleBlogHandler = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div
      key={post.id}
      className="rounded-2xl overflow-hidden border border-white/70 bg-gray-900/70 backdrop-blur-xl hover:bg-gray-800 transition group hover:cursor-default"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover group-hover:scale-105 transition"
          src="/src/assets/walk.jpg"
          alt="post"
        />

        <div className="absolute top-3 left-3 flex items-center justify-between gap-1 right-3">
          <p className="text-xs py-1 px-3 rounded-full border border-white/10 backdrop-blur-md bg-black/40 uppercase font-semibold text-[var(--accent)]">
            {post.category}
          </p>
        
            <div className="flex gap-1">
		<p onClick={()=>navigate(-1)} className='text-xs p-2 rounded-full border border-white/10 backdrop-blur-md bg-black/40'><ArrowLeft size={14}/></p>
    {user.uid=== post.userId && (
      <>
      <EditButton id={post.id}/>
		<DeleteButton id={post.id}/>
      </>
    )}
            </div>
      
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs text-gray-400 ">
          <Clock size={14} />
          <span>{localeDate(post.createdAt)}</span>
        </div>
        <h3 className="text-lg font-semibold group-hover:text-white transition line-clamp-1">
          {post.title}
        </h3>
        <div
          className="text-sm text-gray-300 line-clamp-3 [&_*]:text-white!"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center justify-between pt-2">
            <span
              onClick={singleBlogHandler}
              className="py-2 px-5 rounded-full bg-white/5 group-hover:bg-[var(--primary)] transition hover:cursor-pointer"
            >
              Read Article
            </span>
          </div>
          <div onClick={singleBlogHandler} className="p-2 rounded-full bg-white/5 group-hover:bg-[var(--primary)] group-hover:rotate-45 transition cursor-pointer">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
