import { ImCross } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import {CgProfile } from "react-icons/cg"
import { useState } from "react"
import axios from "axios"
import Googlelogin from "./Googlelogin"

export default function Register({Visible,closeModal}){
    const[passwordEye,setPasswordEye]=useState(false)
    const[confirmPasswordEye,setConfirmPasswordEye]=useState(false)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmationPassword,setConfirmationPassword]=useState("")
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")

    if(!Visible) return null;


    const authy=(e)=>{
        const email =e.target.value;

        if (firstName === "") {
            alert(" first Name is required");
            return;
        }
        if (lastName === "") {
            alert(" last Name is required");
            return;
        }
        
        
        if (email === "") {
            alert("Email is required");
            return;
        }
        if (password === "") {
            alert("Password is required");
            return;
        }
        if (confirmationPassword === "") {
            alert("Password Confirmation is required");
            return;
        }
        
        if (confirmationPassword === password) {
            axios.post(`https://challenge6-backend.herokuapp.com/api/v1/auth/register`, {
                email:email, password:password ,name:firstName + lastName
            })
            .then((resp)=>{
                localStorage.setItem("token", resp.data.token)
                window.location.reload()
            })
            .catch((err)=>{
                console.log("Ini error:" + err)
            })    
        } else {
            alert("Confirmation password tidak sama!")
        }
    }

    
    const handleToogle=()=>{
        setPasswordEye(!passwordEye)
        
    }
    const handleConfirmToogle=()=>{
        setConfirmPasswordEye(!confirmPasswordEye)
        
    }

    return(
        <>
        <div className=" fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center" >
            <div className=" bg-white rounded border-2 shadow-lg w-2/3 m-auto my-10" >
                <div className="ml-10 flex mt-5 ">
                    <h1 className="text-4xl">Create Account</h1>
                    <button className="ml-auto mr-14" onClick={()=>closeModal(false)}><ImCross/></button>
                </div>
                <hr className="w-11/12 ml-10 mt-5 " />
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input  className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent " type="text" placeholder="First Name" onChange={function(e){
                        setFirstName(e.target.value)}}/>
                    <CgProfile size={17} className="ml-auto text-black mt-2" />
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input  className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent " type="text" placeholder="Last Name" onChange={function(e){
                        setLastName(e.target.value)}}/>
                    <CgProfile size={17} className="ml-auto text-black mt-2" />
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input pattern="/^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.(com|co.id|id)$/g"  className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type="email" value={email} placeholder="Email Address" onChange={function(e){
                        setEmail(e.target.value)}} required/>
                    <AiOutlineMail className="ml-auto text-black mt-3" />
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/" title="must use uppercase, lowercase and numbers"className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent"  type={(passwordEye===false)? 'password':'text'} placeholder="Password"  id="myInput" onChange={function(e){
                        setPassword(e.target.value)}} required/>
                    <span  className="mt-3">
                    {
                            (passwordEye=== false)?<FaEyeSlash onClick={handleToogle}/>:<FaEye onClick={handleToogle}/>
                        }
                        
                    </span>
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/" required title="Minimum of 7 characters. Should have at least one special character and one number." className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type={(confirmPasswordEye===false)? 'password':'text'} placeholder="Password Confirmation" id="myInput" onChange={(e) => {
                        setConfirmationPassword(e.target.value)
                    }} />
                    <span className="mt-3">
                        {
                            (confirmPasswordEye=== false)?<FaEyeSlash onClick={handleConfirmToogle}/>:<FaEye onClick={handleConfirmToogle}/>
                        }
                    </span>
                </div>
                <div className="flex">
                    <button className="ml-auto mr-10 bg-red-600 rounded-full w-2/12 h-10 mb-8 mt-5" onClick={()=>{
                            authy()
                        }}>Register Now</button>
                </div>
                <Googlelogin/>
                
            </div>     
        </div>
        </>
    )
}