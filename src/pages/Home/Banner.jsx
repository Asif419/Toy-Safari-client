import { FaSearchengin, FaMedapps, FaHandPeace } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="hero min-h-[500px] bg-base-200 rounded-lg p-2 md:p-5">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="h-[250px] lg:h-[480px] carousel carousel-vertical px-10">
          <div className="carousel-item">
            <img src="https://i.ibb.co/VBFc1vP/Horse.webp" alt="Wolf" className="" />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/r4M8jK4/Lion.jpg" alt="Wolf" className="h-full w-full object-cover" />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/5GLdDbG/Wolf.jpg" alt="Wolf" className="" />
          </div>
          {/* Add more carousel items as needed */}
        </div>
        <div className="">
          <h1 className="text-5xl font-bold text-black">Welcome to ToySafariWorld</h1>
          <p className="my-3 md:my-5">
            Welcome to ToySafariWorld! Discover a captivating collection of animal toys and embark on exciting adventures. Explore our wide range of high-quality toys, featuring wild creatures, domestic pets, and birds. Immerse yourself in imaginative play with realistic and beautifully crafted toys. With our user-friendly website, finding your favorite toys is a breeze. Let your imagination run wild as you explore the world of animal toys at ToySafariWorld. Start your adventure today!
          </p>
          <div className='text-1xl text-black grid grid-cols-2 mb-3 md:mb-5'>
            <span className='flex gap-2 justify-items-center items-center'>
              <FaSearchengin />
              New Arrival: Friday
            </span>
            <span className='flex gap-2 justify-items-center items-center'>
              <FaMedapps />
              Discount: 5%
            </span>
            <span className='flex gap-2 justify-items-center items-center'>
              <FaHandPeace />
              Review: 30,000+
            </span>
          </div>
          <button className="btn bg-black text-white mr-2">Buy Now!</button>
          <button className="btn btn-primary">Get Coupon</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;