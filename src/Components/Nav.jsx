import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'
import {imdb} from '../images'

const Nav=()=>{

    const [active, setActive]=useState(true)

    let path=window.location.pathname;

    useEffect(()=>{
        function hideNav(){
            if(path=="/func"){
                setActive(false)
            }
        }
        hideNav()
    },[path])

    function home(){
        if(!active){
            setActive(true)
        }
    }

    function nextPage(){
        if(active){
            setActive(false)
        }
    }

    function conditionalNav(){
        if(active){
            return (
            <>
                <a href="#about" className='transition duration-300 ease-in-out hover:text-orange-400'>ABOUT US</a>
                <a href="#team" className='transition duration-300 ease-in-out hover:text-orange-400'>OUR TEAM</a>
                <a href="#contact" className='transition duration-300 ease-in-out hover:text-orange-400'>CONTACT US</a>
            </>
            )
        }
        return null;
    }

   return (
    <>
    <nav className="flex justify-between items-center p-3 bg-white sticky top-0 z-10">
        <div className='text-rose-500 text-3xl'>Tech<span className='text-blue-500'>Eager</span></div>


        <div className='flex justify-around gap-10 text-indigo-900 font-medium'>
            <NavLink to="/" onClick={home} className={({ isActive }) =>
            isActive
              ? 'transition duration-300 ease-in-out text-orange-600 border-b-2 border-orange-600 pb-1'
              : 'transition duration-300 ease-in-out hover:text-orange-500'
            }>HOME</NavLink>

            {conditionalNav()}

            <NavLink to="/func" onClick={nextPage} className={({isActive})=> 
            isActive ? 
                "transition duration-300 ease-in-out text-orange-600 border-orange-600 border-b-3"
                :"transition duration-300 ease-in-out hover:text-orange-400"
            }>
                <img className='h-5 w-8' src={imdb} alt="imdb loho" />
            </NavLink>
        </div>

        <div className='pr-4'>
           <a href="tel:+9779824442812">📞</a>
        </div>
    </nav>
    </>
)}

export default Nav;