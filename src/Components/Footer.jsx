import {fb, in_, insta, git, loc} from '../images'

const Footer=()=>{
   return (
    <>
    <footer className="flex flex-wrap bg-blue-100 p-4 mt-5">
        <div className="flex flex-col gap-5 w-1/2">
            <h1 className='text-rose-500 text-3xl'>Tech<span className='text-blue-500'>Eager</span></h1>
            <p className="text">
                This project showcases our ability to build a complete single-page React application with all 
                essential sections — from navigation and interactive sliders to contact forms integrated with
                real APIs. Each section is thoughtfully designed to reflect both aesthetic appeal and practical
                functionality. 
            </p>
            <p className="text">📞  9824442812</p>
        </div>
        <div className="flex flex-col w-1/4 justify-start gap-5 items-center">
            <h1 className='text-black text-xl'>Get-<span className='text-rose-500'>Connected</span></h1>
            <div className='flex gap-15'>
                <div className='flex flex-col gap-6'>
                    <a href="https://www.facebook.com/abi.irtehhc">
                        <img className='h-10 hover:scale-110' src={fb} alt="logo png" />
                    </a>

                    <a href="https://www.linkedin.com/in/abi-chhetri-b4aaa231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <img className='h-10 hover:scale-110' src={in_} alt="logo png" />
                    </a>
                </div>

                <div className='flex flex-col gap-6'>

                    <a href="https://github.com/Abi-chhetri">
                        <img className='h-10 hover:scale-110' src={git} alt="logo png" />
                    </a>

                    <a href="https://www.instagram.com/xettri_abi6?igsh=MTZyaTdqZnN0NWg1bQ==">
                        <img className='h-10 hover:scale-110' src={insta} alt="logo png" />
                    </a>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center right-0  w-1/4 gap-3'>
            <div className='flex justify-center items-center gap-2'>
                <img className='h-10' src={loc} alt="location logo png"/><span> KamalPokhari-1, Kathmandu</span>
            </div>
            <iframe height={200} width={300} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2122662550255!2d85.32268482518154!3d27.7107317261806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908c874a40b%3A0x87a26cbf3b75037c!2sKamal%20Pokhari!5e0!3m2!1sen!2snp!4v1752145555301!5m2!1sen!2snp" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </footer>
    </>
)}

export default Footer;