import { ImCross } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState, } from "react"

import axios from "axios"


export default function Login({ visible,onClose}){

    

    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [type,setType] =useState("password" )
    const [icon,setIcon] =useState(FaEyeSlash)

    if(!visible) return null;

    const authy=()=>{
        axios.post(`https://challenge6-backend.herokuapp.com/api/v1/auth/login`, {
            email:email, password:password
        })
    .then((resp)=>{
        localStorage.setItem("token", resp.data.token)
        window.location.reload()
    })
    .catch((err)=>{
        console.log("Ini error:" + err)
    })
  
    }

    
    const handleToogle=()=>{
        if(type === "password"){
            
            setIcon(FaEye)
            setType('text')
        }
        else{
            setIcon(FaEyeSlash)
            setType('password')
        }
    }
   
    return(
        <>
            <div className=" fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center" >
                    <div className=" bg-white rounded border-2 shadow-lg w-2/3 m-auto my-10" >
                    <div className="ml-10 flex mt-5 ">
                        <h1 className="text-4xl">Log In To Your Account</h1>
                        <button className="ml-auto mr-14" onClick={()=>onClose(false)}><ImCross/></button>
                    </div>
                    <hr className="w-11/12 ml-10 mt-5 " />
                    <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                        <input pattern="/^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.(com|co.id|id)$/g" className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type="email" placeholder="Email Address" onChange={function(e){
                        setEmail(e.target.value)}}/>
                        <AiOutlineMail className="ml-auto text-black mt-3" />
                    </div>
                    <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                        <input pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/"className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type={type}placeholder="Password" id="myInput" onChange={function(e) {
                            setPassword(e.target.value)
                        }}/>
                        <span  className="mt-3" onClick={handleToogle}>
                            {icon} 
                        </span>
                    </div>
                    
                    
                    <div className="mb-auto flex mt-10 ">
                        <button className="ml-10 bg-red-600 rounded-full w-2/12 h-10 mb-8 mt-5" onClick={()=>{
                            authy()
                        }}>Login</button>
                        
                    </div>                 
                    
                </div>
               
            </div>
        
        </>
    )
}