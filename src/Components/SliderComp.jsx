import {vision, building, crafted, empowering, innovate, Solution, speed, creativity} from '../images'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComp=()=>{

    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover:false,
    };

    const data=[
        {
            title:"Empowering Ideas Through Code",
            img: empowering,
        },
        {
            title:"Innovate, Design and Deliver",
            img: innovate,
        },
        {
            title:"Where Creativity Meets Functionality",
            img: creativity,
        },
        {
            title:"Building Experiences, Not Just Websites",
            img: building,
        },
        {
            title:"Crafted with Precision, Powered by Passion",
            img: crafted,
        },
        {
            title:"Your Vision, Our Code",
            img: vision,
        },
        {
            title:"Speed, Simplicity and Scalability",
            img: speed,
        },
        {
            title:"Dynamic Solutions for a Digital World",
            img: Solution,
        },
    ]

    return (
    <>
    <div className="overflow-x-hidden h-180 w-full">
      <Slider {...settings}>
        {data.map((e, index) => (
          <div className="relative" key={index}>
            <img className="w-full h-170 object-cover object-center" src={e.img} alt={e.title} />
            <div className="absolute inset-0 flex justify-center items-center z-10 text-white text-6xl bg-black/40">
              <h1 className='slider-text'>{e.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
)}

export default SliderComp;
