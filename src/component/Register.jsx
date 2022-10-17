import { ImCross } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import {CgProfile } from "react-icons/cg"
import { useState } from "react"

export default function Register({Visible,closeModal}){
    const[passwordEye,setPasswordEye]=useState(false)
    const[confirmPasswordEye,setConfirmPasswordEye]=useState(false)

    if(!Visible) return null;

    
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
                    <input className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent " type="text" placeholder="First Name"/>
                    <CgProfile size={17} className="ml-auto text-black mt-2" />
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type="text" placeholder="Last Name"/>
                    <CgProfile size={17} className="ml-auto text-black mt-2" />
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type="email" placeholder="Email Address"/>
                    <AiOutlineMail className="ml-auto text-black mt-3" />
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent"  type={(passwordEye===false)? 'password':'text'} placeholder="Password" id="myInput"/>
                    <span  className="mt-3">
                    {
                            (passwordEye=== false)?<FaEyeSlash onClick={handleToogle}/>:<FaEye onClick={handleToogle}/>
                        }
                        
                    </span>
                </div>
                <div className="border-2 flex-auto rounded-full w-11/12  h-10 flex px-5 ml-10 mb-5 mt-5">
                    <input className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type={(confirmPasswordEye===false)? 'password':'text'} placeholder="Password Confirmation" id="myInput"/>
                    <span className="mt-3">
                        {
                            (confirmPasswordEye=== false)?<FaEyeSlash onClick={handleConfirmToogle}/>:<FaEye onClick={handleConfirmToogle}/>
                        }
                    </span>
                </div>

                <button className="ml-10 bg-red-600 rounded-full w-2/12 h-10 mb-8 mt-5">Register Now</button>
            </div>     
        </div>
        </>
    )
}