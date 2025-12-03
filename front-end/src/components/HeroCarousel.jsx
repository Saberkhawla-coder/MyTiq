
import Logo from "./Logo";
import Ticket from './Ticket'
import img1 from '../assets/images/img1.jpg'
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img4.jpg";
import img10 from "../assets/images/img1.jpg";
import img11 from "../assets/images/img2.jpg";
import img12 from "../assets/images/img4.jpg";
import MytickEvent from "./MyTicketEvent";
import EventsCard from "./Events/EventsCard";

// Bottom Left images
const leftImages = [
  { src: img4, rotate: "-40deg", left: "200px", top: "-170px" },
  { src: img5, rotate: "-45deg", left: "120px", top: "-90px" },
  { src: img6, rotate: "-51deg", left: "40px", top: "-20px" },
];

// Bottom Right images
const rightImages = [
  { src: img1, rotate: "40deg", left: "184px", top: "-170px" },
  { src: img2, rotate: "45deg", left: "264px", top: "-90px" },
  { src: img3, rotate: "51deg", left: "344px", top: "-20px" },
];

// Top Left images
const leftImagesTop = [
  { src: img7, rotate: "40deg", left: "200px", top: "180px" },
  { src: img8, rotate: "45deg", left: "120px", top: "100px" },
  { src: img9, rotate: "51deg", left: "40px", top: "30px" },
];

// Top Right images
const rightImagesTop = [
  { src: img10, rotate: "-40deg", left: "184px", top: "180px" },
  { src: img11, rotate: "-45deg", left: "264px", top: "100px" },
  { src: img12, rotate: "-51deg", left: "344px", top: "30px" },
];

const HeroCarousel = () => {
  return (
    <><div className="relative w-full min-h-screen bg-[#001233] flex justify-center items-center overflow-hidden">
      
      {/* Logo */}
      <div className="absolute top-[7%] left-1/2 -translate-x-[55%] scale-[0.5]">
        <Logo />
      </div>

      {/* Center Ticket */}
      <div className="absolute z-[9999] top-1/2 left-1/2 -translate-x-[55%] -translate-y-[55%]">
        <Ticket />
      </div>

      <div className="relative w-full max-w-[1000px] h-[660px] flex justify-center items-center">
        {/* TOP LEFT */}
        <div className="absolute left-0 top-0 w-[500px] h-[100px]">
          {leftImagesTop.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              className="absolute w-[80px] h-[100px] rounded-xl object-cover shadow-lg"
              style={{
                transform: `rotate(${img.rotate})`,
                left: img.left,
                top: img.top,
              }}
            />
          ))}
        </div>

        {/* TOP RIGHT */}
        <div className="absolute right-0 top-0 w-[500px] h-[100px]">
          {rightImagesTop.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              className="absolute w-[80px] h-[100px] rounded-xl object-cover shadow-lg"
              style={{
                transform: `rotate(${img.rotate})`,
                left: img.left,
                top: img.top,
              }}
            />
          ))}
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute left-0 bottom-0 w-[500px] h-[100px]">
          {leftImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              className="absolute w-[80px] h-[100px] rounded-xl object-cover shadow-lg"
              style={{
                transform: `rotate(${img.rotate})`,
                left: img.left,
                top: img.top,
              }}
            />
          ))}
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[100px]">
          {rightImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              className="absolute w-[80px] h-[100px] rounded-xl object-cover shadow-lg"
              style={{
                transform: `rotate(${img.rotate})`,
                left: img.left,
                top: img.top,
              }}
            />
          ))}
        </div>
      </div>
    </div>
    <EventsCard/>
    </>
    
  );
};

export default HeroCarousel;
