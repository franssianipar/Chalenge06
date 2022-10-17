
import './Home1.css'
import { useNavigate } from "react-router-dom"

export default function Search(props){
    const navigate=useNavigate()
    return(
        <>
            <div className='home'>
                <div className=" flex mt-10 ml-5">
                    <h1 className="text-5xl font-bold  ">
                        Search Result "{props.search}"
                    </h1>
                </div>

                <div class="grid grid-cols-4 mt-5 w-full">
                    {
                        props.data?.results?.map((data)=>{
                            
                            return <div key={data.id} className="hover:cursor-pointer" onClick={() => {
                                navigate("/" + data.id)
                            }}><img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className="rounded-lg w-10/12 ml-6 mt-6" alt=""/></div>
                        })
                    }
                    
                </div>

            </div>
            
        </>
    )
    
}