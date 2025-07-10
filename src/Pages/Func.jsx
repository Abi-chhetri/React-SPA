import { useEffect ,useRef,useState} from "react";
import {dev} from '../images'

const Func=()=>{
    const [context, setContext]=useState([])
    const [data,setData]=useState([])
    const [msg,setMsg]=useState([])
    const [bar,setBar]=useState("hidden")

    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cd204192ccmsh2e168c2fee1dec0p1df439jsn99ec96fdda64',
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };


   useEffect(()=>{
        async function apiCall() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result.data || []);

                if(result.message){
                    setMsg(result.message)
                }
            } catch (error) {
                console.error(error);
            }
        }
        apiCall();
    },[])
    
    function Component(){
        if(data.length>1){
            return <>
                    {data.map((e,i)=>(
                        <div key={i} className="bg-gray-800 border-2 rounded-tr-2xl rounded-bl-2xl overflow-hidden w-75">
                            <div>
                                <img className="h-80 w-full" src={e.image} loading="lazy" alt="thumbnail"/>
                            </div>
                            <div className="flex flex-col justify-between gap-5 p-2 text-white">
                                <p>Title: {e.title}</p>
                                <p>Genre: {e.genres.map(e=> " "+e+",")}</p>
                                <p>Total Episodes: {e.episodes}</p>
                                <p>Type: {e.type}</p>
                                <p>Ranking: #{e.ranking}</p>
                                <div className="flex justify-between">
                                    <a className="anchor" href={e.link}>Get Detials &#8594;</a>
                                    <button className="anchor"
                                    onClick={()=>{
                                        setContext((prev)=>[...prev,{title:e.title, id:i, link:e.link}])
                                    }}
                                    >Add to watch list</button>
                                </div>
                        </div>
                        </div>
                    ))}
            </>   
        }

        return <>
        <h1 className="text-white text-4xl h-100 flex justify-center items-center">{msg}</h1>
        </>
    }

    useEffect(()=>{
        const listdata=JSON.parse(localStorage.getItem("watch"))
        setContext(listdata);
    },[])

    useEffect(()=>{
        localStorage.setItem("watch",JSON.stringify(context))
    },[context])



    function sidebar(){
        setBar("none")
    }

    function hideBar(){
        setBar("hidden")
    }
  
    function watchListCompo(){
        return context.map((e,i)=>(
                    <div key={i} className="w-full max-h-80 bg-white text-black p-2 mb-1 text-sm flex flex-col">
                        <ul className='pl-4 flex justify-between pr-2 items-center' style={{ listStyleType: 'square'}}>
                            <li>
                                <a href={e.link}>{e.title} &#8594;</a>
                            </li>
                            <button className="w-max text-xl border-2 border-black px-2 active:bg-black active:text-white"
                            onClick={()=>{
                            setContext(()=>context.filter((each)=> each.id == e.id ? "":each))
                            }}
                            >
                                ×
                            </button>
                        </ul>
                    </div>
                ))
    }

    //this is the main jsx return rest of upside code is function that returns jsx to the main jsx using function call
    return (
        <>
            <div className="flex justify-between items-center bg-black sticky top-14 z-10">
                <h1 className="text-black h-full bg-amber-300 text-2xl p-2 font-bold">Anime World</h1>
                <button onClick={sidebar} className="flex gap-2 mr-2 text-white border-2 border-white p-1 font-bold hover:bg-white hover:border-red-300 rounded-2xl hover:text-black relative">
                    Watch List
                </button>
                <div className={` absolute right-0 bg-black w-100 top-0 h-40 overflow-scroll z-50 rounded-lg text-white pr-1 ${bar}`}>
                    <div className="font-bold flex w-full bg-orange-400 text-2xl justify-around gap-30 items-center py-1.5 sticky z-60 top-0">
                        <h1>Watch List</h1>
                        <div onClick={hideBar}>⛌</div>
                    </div>

                    {context.length ? watchListCompo():<h1 className="text-center text-3xl mt-5">Empty list</h1>}

                </div>
            </div>
            <div className="w-full flex justify-center bg-gray-400 pb-25 -mb-10">
                <div className="w-5/6 bg-gray-400 mt-5 -mb-10 p-2 flex flex-wrap justify-between items-center gap-2 gap-y-4">
                    {data ? <Component/>:"Loading ...."}
                </div>
            </div>
        </>
    )
}
export default Func;