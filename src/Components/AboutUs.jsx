import {dev} from '../images'

const AboutUs=()=>{
   return (
    <section className="flex flex-col justify-center items-center" id="about">
        <h1 className="text-5xl text-red-600 mb-6 flex justify-start items-center w-5/6">ABOUT US</h1>
        <div className='flex justify-between w-5/6 gap-20'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-gray-700 border-t-2 border-blue-600 w-max'>Profile</h1>
                <h1 className='text-3xl text-blue-950 font-bold'>Welcome to our Front-End Web Development journey!</h1>
                <p className='text-justify'>
                    We are a team of aspiring front-end developers driven by creativity, curiosity, and a deep passion for building 
                    intuitive digital experiences. With a strong foundation in modern web technologies like HTML, CSS, JavaScript, and
                     React.js, we focus on crafting clean, responsive, and user-friendly interfaces. Our goal is to create websites that
                      are not only visually engaging but also perform seamlessly across all devices. We believe in writing efficient,
                       modular code that reflects best practices and delivers real value to users.
                </p>
            </div>

            <img className='h-80 w-120 object-cover object-center rounded-tl-4xl rounded-br-4xl' src={dev} alt="group of developers" />

        </div>
    </section>
)}

export default AboutUs;