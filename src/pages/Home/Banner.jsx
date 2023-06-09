import { FaSearchengin, FaMedapps, FaHandPeace } from 'react-icons/fa';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Banner = () => {

  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
      },
    },
  )



  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };

    AOS.init({
      easing: 'ease-in-out',
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero min-h-[500px] bg-base-200 rounded-lg p-2 md:p-5">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="sm:order-1 pl-3">
            <h1 className="text-3xl md:text-5xl font-bold text-black" data-aos="fade-left" data-aos-duration="600">Welcome to ToySafariWorld</h1>
            <p className="my-3 md:my-5">
              Welcome to ToySafariWorld! Discover a captivating collection of animal toys and embark on exciting adventures. Explore our wide range of high-quality toys, featuring wild creatures, domestic pets, and birds. Immerse yourself in imaginative play with realistic and beautifully crafted toys. With our user-friendly website, finding your favorite toys is a breeze.
            </p>
            <div className='text-1xl text-black grid grid-cols-1 mb-3 md:mb-5'>
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
          {/* carousel */}

          <div ref={sliderRef} className="keen-slider rounded-3xl">
            <div className="keen-slider__slide">
              <LazyLoadImage
                className='w-full'
                src='https://i.ibb.co/GJdPmnf/Bear.jpg'
                effect="blur"
              />
              {/* <img src="https://i.ibb.co/GJdPmnf/Bear.jpg" alt="Wolf" className="" /> */}
            </div>
            <div className="keen-slider__slide">
              <img src="https://i.ibb.co/VBFc1vP/Horse.webp" alt="Wolf" className="" />
            </div>
            <div className="keen-slider__slide">
              <img src="https://i.ibb.co/R9SXnGJ/Cat.jpg" alt="Wolf" className="" />
            </div>
            <div className="keen-slider__slide">
              <img src="https://i.ibb.co/MSfgpgQ/Tiger.jpg" alt="Wolf" className="" />
            </div>
            <div className="keen-slider__slide">
              <img src="https://i.ibb.co/6wwp7Z4/Hawk.jpg" alt="Wolf" className="" />
            </div>
            <div className="keen-slider__slide">
              <img src="https://i.ibb.co/4tFsFws/dog.webp" alt="Wolf" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;