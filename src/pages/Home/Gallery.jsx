import { useState } from 'react'
import logo from '../../assets/icon/best.png'

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='my-3 md:my-5'>
      <div>
        <img className='h-20 w-[80px] mx-auto border-2 border-dashed rounded-full p-2' src={logo} alt="" />
        <p className='font-bold text-center my-2 text-3xl'>Gallery of Best sells</p>
      </div>
      <div
        className="relative w-72 bg-base-100 shadow-xl image-full group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`transition-opacity duration-500 ease-in-out rounded-lg ${isHovered ? 'opacity-70' : 'opacity-100'}`}
          src="https://i.ibb.co/j6K82ZQ/Cow.jpg" alt="Shoes" />
        {isHovered && (
          <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
            <h2 className="card-title">Cow Toys!</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
            <div className="card-actions justify-end my-2">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;


{/* <div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body ">
    <h2 className="card-title">Cow Toys!</h2>
    <p>This amazing tiger is perfect for any child who loves to play.</p>
  </div>
  <figure><img className='h-60 rounded-lg' src="https://i.ibb.co/j6K82ZQ/Cow.jpg" alt="Cows" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
  </div>
</div> */}

{/*
const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card w-96 bg-base-100 shadow-xl image-full group transition-opacity ${
        isHovered ? 'opacity-100' : 'opacity-50'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure>
        <img src="https://i.ibb.co/j6K82ZQ/Cow.jpg" alt="Shoes" />
      </figure>
      <div
        className={`card-body ${
          isHovered ? 'block' : 'hidden'
        } group-hover:block`}
      >
        <h2 className="card-title">Cow Toys!</h2>
        <p>If a dog chews shoes, whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );

*/}