import { useState } from "react";
import axios from "axios"
import { useEffect } from "react"
import { API_KEY } from "../util/constant"
import Login from "../component/Login";
import Register from "../component/Register";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Detail from "../component/Detail";



export default function Main(){
    const [showMyModal,setShowMyModal] =useState(false)
    const [showModal,setShowModal] =useState(false)
    const handleOnClose =()=>setShowMyModal(false)
    const handleClose =()=>setShowModal(false)
    const[data,setData]=useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        if (search === "") {
            axios.get('https://api.themoviedb.org/3/movie/popular', {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                }
            })
            .then((resp)=>{
                setData(resp.data)
                console.log("Ini response:" + resp)
            })
            .catch((err)=>{
                console.log("Ini error:" + err)
            })
        } else {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                },
                params: {
                    query: search
                }
            })
                .then((resp)=>{
                    setData(resp.data)
                    console.log("Ini response:" + resp)
                })
                .catch((err)=>{
                    console.log("Ini error:" + err)
                })
        }
    }, [search])

    return(
        <>
        <div className="">
            <Detail data={data} search={search} setSearch={setSearch} setShowMyModal={setShowMyModal} setShowModal={setShowModal}/>
            
            <GoogleOAuthProvider clientId="134468154099-apc6un8gp22f8dadi8tf1kf4o2fv2lnk.apps.googleusercontent.com">
                <Login  visible={showMyModal} onClose={handleOnClose}/>
                
            </GoogleOAuthProvider>
            
            <Register Visible={showModal} closeModal={handleClose}/>
        </div>
        </>
    )
}