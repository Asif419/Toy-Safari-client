import { useState } from 'react'
import logo from '../../assets/icon/best.png'
import Marquee from "react-fast-marquee";
const Gallery = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className='mt-20'>
      <div className='my-3 md:my-5'>
        <div className='my-5'>
          <img className='h-20 w-[80px] mx-auto border-2 border-dashed rounded-full p-2' src={logo} alt="" />
          <p className='font-bold text-center my-2 text-3xl text-black'>Gallery of Best sells</p>
          <hr className='w-1/2 mx-auto' />
        </div>
        {/* card from here */}
        <Marquee
          pauseOnHover
          speed={150}
        >
          <div className='grid grid-cols-4 justify-items-center gap-2 md:gap-8 px-5 mt-10'>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out object-cover rounded-lg h-full w-full ${isHovered2 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/MSfgpgQ/Tiger.jpg"
                alt="Tiger"
              />
              {isHovered1 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Tiger Toys!</h2>
                  <p>This amazing tiger is perfect for any child who loves to play pretend.</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out object-cover rounded-lg h-full w-full ${isHovered2 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/r4M8jK4/Lion.jpg"
                alt="Lion"
              />
              {isHovered2 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Lion Toys!</h2>
                  <p>Embark on thrilling animal adventures with this set of realistic safari animal figures.</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full object-cover ${isHovered3 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/VBFc1vP/Horse.webp"
                alt="Eagle"
              />
              {isHovered3 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Horse Toys!</h2>
                  <p>This beautiful horse is perfect for any little girl or boy. It has long</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full ${isHovered4 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/Wn2fnTL/Eagle.jpg"
                alt="Shoes"
              />
              {isHovered4 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Eagle Toys!</h2>
                  <p>This beautiful eagle is perfect for any little girl or boy who loves to play pretend.</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Marquee>
      </div>

    </div>
  );
};

export default Gallery;