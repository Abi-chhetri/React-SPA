import { useEffect, useState } from "react";

const OurTeam=()=>{
    const [team,setTeam] = useState([]);

    useEffect(()=>{
        async function apiCall(){
            try{
                let data =await fetch('https://randomuser.me/api/?results=5&seed=myTeam106')
                let jsonData=await data.json()
                setTeam(jsonData.results)
            }
            catch(error){
                alert("something went wrong "+ error)
            }
        }

        apiCall()
    },[])

    function teamDetial(){
        return (
            team.map((e,i)=>(
            <div key={i} className="team">
                <img className="w-120 h-80" src={e.picture.large} alt="user profile" />
                <h1 className="p-2">{e.name.title+" "+e.name.first+" "+e.name.last}</h1>
                <h1 className="p-2">email: {e.email}</h1>
            </div>
        ))
        )
    }

   return (
   <section id="team">
    <h1 className="text-center text-5xl font-bold mt-20 text-blue-900">Our Team</h1>
    <div className="flex justify-center items-center w-full mt-10">
        <div className="w-5/6 flex flex-wrap justify-center gap-10">
            {team ? teamDetial():"Loading..."}
        </div>
    </div>
   </section>
)}

export default OurTeam;