import { useState  } from 'react';
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from '@react-hook/window-size';
 
export default function HeroSection() { 

  const [selected, setSelected] = useState('TR');

  const WindowWidth = useWindowWidth()

      const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'
      }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3500,
      cssEase: "linear"
    };

  return (
    <div className=" relative h-auto md:h-[500px] before:bg-gradient-to-r  before:from-purple-600 before:to-transparent  before:absolute  before:inset-0  before:w-full  before:h-full  before:z-10">
       {WindowWidth> 768 && <Slider {...settings}>
            <div>
                 <img  className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"/>
            </div>
            <div>
                 <img  className="w-full h-[500px] object-cover"  src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
            </div> 
            <div>
                 <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"/>
           </div> 
        </Slider>}
        <div className="md:container flex justify-between items-center md:absolute top-0 left-0 md:left-1/2 -translate-x-1/2 h-full z-20">
           <div className=" md:block ">
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
              <h3 className="mt-4 text-2xl md:text-4xl font-semibold text-white">
                  Dakikalar içinde <br /> kapınızda <br />
              </h3>
          </div>
          <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
              <h4 className="text-violet-900 text-center font-semibold mb-4 "> Giris yap veya kayıt ol</h4>
                <div className="grid  gap-y-3">
                  <div className="flex gap-x-2 ">
                    <ReactFlagsSelect
                        countries={Object.keys(phones)}
                        customLabels={ phones }
                        onSelect={code => setSelected(code)}
                        selected={selected}
                        className="flag-select"
                    />
                    <label className="flex-1 relative group block cursor-pointer">
                        <input required  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-red-400 focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                        <span className="absolute top-0 left-0 h-full px-4 flex items-center text-xs text-gray-500 transition-all peer-valid:h-7 peer-valid:text-purple-900 peer-valid:text-xs ">Telefon numarası</span>
                    </label>
                  </div>
                  <button className="bg-purple-300 text-sky-800 transition-colors hover:text-sky-800 hover:bg-purple-300  h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
                       Telefon numarası ıle devam et
                  </button>
                  <hr className="h-{1px} bg-gray-300 my-2" />
                  <button className="bg-blue-700 bg-opacity-10 text-blue-700 px-4 text-opacity-80 transition-colors hover:bg-blue-700  hover:text-white h-12 flex items-center  rounded-md w-full text-sm font-semibold ">
                      <FaFacebook size={24}  />
                       <span className="mx-auto">Facebook ıle devam et</span> 
                  </button>
                </div>
            </div>
         </div>
     </div> 
  )
}

