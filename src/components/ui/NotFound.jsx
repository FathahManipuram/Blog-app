import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContex";

export default function NotFound() {
  const {user}= useAuth()
  const navigate= useNavigate()


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712] text-white px-4">
      <div className="text-center max-w-xl">

       
        <h1 className="text-7xl font-bold mb-4">404</h1>


        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>

   
        <p className="text-gray-400 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

       
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:opacity-90"
          >
            Go Home
          </Link>

         {!user &&
        //  (
        //   <p
        //     onClick={()=> navigate(-1)}
        //     className="px-5 py-2 rounded-xl border border-gray-600 hover:bg-gray-800"
        //   >
        //     Go Back
        //   </p>
        //  )
        //  :
         (
           <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-gray-600 hover:bg-gray-800"
          >
            Login
          </Link>
         )}
        </div>

      </div>
    </div>
  );
}