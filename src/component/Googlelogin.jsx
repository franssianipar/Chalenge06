import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";


export default function Googlelogin(){
  
    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
          try {
            
            const data = {
              access_token: response.access_token,
            };
            const result = await axios.post(
              `https://challenge6-backend.herokuapp.com/api/v1/auth/google`,
              data
            );
            if (result.data.token) {
              localStorage.setItem("token", result.data.token);
              window.location.reload()
            }
          } catch (error) {
            alert(error.response.data.message);
          }
        },
        onError: (error) => {
          alert(error);
        },
      });

     
    

    return(
        <>
          <button className="ml-auto mr-10 bg-red-600 rounded-full w-3/12 h-10 mb-8 mt-5 flex" onClick={()=>{
            googleLogin()
            
            }}>
            <FaGoogle size={30} className="ml-2 mt-1  text-white" />
            <span className="text-lg ml-1 text-white mt-1">Sign Up With Google</span>
        </button>
        
        
        
        
        </>
    )
}