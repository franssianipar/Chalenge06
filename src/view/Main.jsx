import { useState } from "react";
import Carousel from "../component/Carousel";
import Home1 from "../component/Home1";
import axios from "axios"
import { useEffect } from "react"
import { API_KEY } from "../util/constant"
import Search from "../component/Search";
import Login from "../component/Login";
import Register from "../component/Register";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useSearchParams } from "react-router-dom";


export default function Main(){
    const [showMyModal,setShowMyModal] =useState(false)
    const [showModal,setShowModal] =useState(false)
    const handleOnClose =()=>setShowMyModal(false)
    const handleClose =()=>setShowModal(false)
    const[data,setData]=useState([])
    const [search, setSearch] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        setSearchParams({["query"]: search})   
    }, [search])
    
    useEffect(()=>{
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
    }, [])

    return(
        <>
        <div className="">
            
            
            <Carousel search={search} setSearch={setSearch} setShowMyModal={setShowMyModal} setShowModal={setShowModal}/>
            
           
                <Login  visible={showMyModal} onClose={handleOnClose}/>
                
            
            <GoogleOAuthProvider clientId="134468154099-apc6un8gp22f8dadi8tf1kf4o2fv2lnk.apps.googleusercontent.com">
                <Register Visible={showModal} closeModal={handleClose}/>
            </GoogleOAuthProvider>
            {search !== "" ? <Search search={search} data={data}/> : <Home1 setData={setData} search={search} data={data}/>}
            
        </div>
        </>
    )
}