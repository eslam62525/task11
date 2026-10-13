import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <div className=" bg-white">
    <header className="flex  justify-center   ">
      <div className="container w-[75%] flex items-center justify-between px-4   ">
        <div className="logo flex items-center">
          <img src="/public/Background.svg" alt=" logo" className="pt-5" />
          <h1 className=" font-bold "> Gourmet Bistro </h1>
        </div>
        <nav className=" w-[45%] flex justify-between">
          <a href="./home" className=" text-[#6B7280] hover:text-[#FF6B35]  ">
            Home
          </a>
          <a href="./menu" className=" text-[#6B7280] hover:text-[#FF6B35] ">
            menu
          </a>
          <a
            href="./Our Story"
            className=" text-[#6B7280] hover:text-[#FF6B35]  "
          >
            Our Story
          </a>
          <a
            href="./Gollery"
            className=" text-[#6B7280] hover:text-[#FF6B35]  "
          >
            Gollery
          </a>
        </nav>
        <button className=" bg-[#FF6B35] hover:bg-amber-300 rounded-full p-1">
          Book a Table
        </button>
      </div>
    </header>

    <div className="heroSection w-full h-140 bg-[url('/Container%20(5).svg')] flex justify-center items-center ">
      <div className=" w-[45%]  ">
        <div className=" bg-[#FF6B351A] w-[30%] h-[5%] rounded-full font-light text-[#FF6B35] px-2">
          THE ART OF DINING
        </div>
        <h1 className=" w-full px-2  text-7xl pt-3  text-white">
          Elevated culinar <span className="text-[#FF6B35]"> experiences </span>
          for every palate.
        </h1>
        <p className=" pt-4 px-2  w-[73%] text-[#E5E7EB] font-light ">
          Discover a symphony of flavors crafted with locally sourced
          ingredients and exceptional passion.
        </p>
        <div className=" w-[70%]  pt-3 px-2 flex gap-3  ">
          <button className=" flex justify-center gap-2 bg-[#FF6B35] hover:bg-amber-300 rounded-2xl p-2 text-white w-37.5">
            
            <img src="/public/SVG.svg" alt="" /> View Menu
          </button>
          <button className=" flex justify-center gap-2 bg-[#FFFFFF33] hover:bg-[#FF6B35] rounded-2xl p-2 text-white w-37.5">
            
            <img src=" /public/Group.svg " alt="" /> Book a Table
          </button>
        </div>
        <div className="  w-full flex gap-10 items-center px-2 pt-6 ">
          
          <img src="/public/Container (6).svg" alt="" className=" w-20" />
          <p className=" text-white "> 4.9/5 from over 2,000+ happy diners </p>
        </div>
      </div>
    </div>

    <footer className="  w-full  flex items-center justify-center ">
      <div className="  w-[90%] h-[80%] flex  items-center justify-center ">
        <div className="lift w-[50%] h-150 pt-10 flex relative  ">
          <div className="foto h-full w-full ">
            <img
              src="/public/Professional chef carefully garnishing a gourmet plate in a high-end kitchen, close-up, shallow depth of field..svg"
              alt=""
              className=" w-full h-full "
            />
          </div>
          <div className="w-50 h-50 absolute top-130 left-100 ">
            
            <img src="/public/Background (1).svg" alt="" />
          </div>
        </div>
        <div className="right  w-[50%]  ">
          <h1 className=" text-2xl ">
            
            Crafting stories on every plate since
            <span className=" text-[#FF6B35] ">2008</span>
          </h1>
          <div className=" w-full   pt-2 ">
            <p className=" text-[#6B7280] text-sm  ">
              
              Gourmet Bistro was born from a simple vision: to create a space
              where culinary excellence meets genuine hospitality. Our journey
              began in a small kitchen with big dreams, focusing on the purity
              of ingredients and the joy of shared meals.
            </p>
          </div>
          <div className=" w-full pt-4  ">
            <p className=" text-[#6B7280] text-sm   ">
              
              Today, we continue that legacy, blending traditional techniques
              with modern innovation to bring you a menu that celebrates the
              best of the season..
            </p>
          </div>

          <div className=" w-full  pt-1 flex gap-2 ">
            <div className="lift  w-[50%] h-full flex gap-1 pt-3 ">
              <div className="logo pt-1 ">
                
                <img src="/public/Overlay.svg" alt="" />
              </div>
              <div className="explan  w-[70%] h-full ">
                <h1> Fresh Harvest </h1>
                <p className=" font-serif text-xs text-[#6B7280]  " > Daily sourced organic ingredients. </p>
              </div>
            </div>

            <div className="lift  w-[50%] h-full flex gap-1 pt-3 ">
              <div className="logo pt-1 ">
                
                <img src="/public/Overlay (1).svg" alt="" />
              </div>
              <div className="explan  w-[70%] h-full ">
                <h1> Expert Chefs </h1>
                <p className=" font-serif text-xs text-[#6B7280]  " >Award-winning culinary team. </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  </div>,
);
