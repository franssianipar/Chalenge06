import { FaGoogle } from "react-icons/fa";

export default function Googlelogin(){

    return(
        <>
        <button className="ml-auto mr-10 bg-red-600 rounded-full w-3/12 h-10 mb-8 mt-5 flex" >
            <FaGoogle size={30} className="ml-2 mt-1  text-white" />
            <span className="text-lg ml-1 text-white mt-1">Sign Up With Google</span>
        </button>
        
        </>
    )
}