
import './Home1.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../util/constant'
import noImage from "../resources/no-image.png"

export default function Search(props){
    const navigate=useNavigate()
    const [data, setData] = useState([])

    const getQuery = () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        return params.get('query');
    }

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/search/movie', {
            headers: {
                "Authorization": "Bearer " + API_KEY
            },
            params: {
                query: getQuery()
            }
        })
            .then((resp)=>{
                console.log(resp)
                setData(resp.data)
            })
            .catch((err)=>{
                console.log("Ini error:" + err)
            })
    }, [])
    return(
        <>
            <div className=''>
                <div className=" flex mt-10 ml-5">
                    <h1 className="text-5xl font-bold  ">
                        Search Result "{getQuery()}"
                    </h1>
                </div>

                <div className="grid grid-cols-4 mt-5 w-full">
                    {
                        data?.results?.map((data)=>{
                            return <div key={data?.id} className="hover:cursor-pointer" onClick={() => {
                                navigate("/" + data?.id)
                            }}><img src={data?.poster_path !== null ? `https://image.tmdb.org/t/p/original/${data?.poster_path}` : noImage} className="rounded-lg w-10/12 ml-6 mt-6" alt=""/></div>
                        })
                    }
                    
                </div>

            </div>
            
        </>
    )
    
}