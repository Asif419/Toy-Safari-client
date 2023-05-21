import coupon from '../../assets/picture/coupon-one.png';
import logo from '../../assets/picture/coupon.png'
import boss from '../../assets/picture/boss.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Coupon = () => {

  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };

    AOS.init({
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='mt-20'>
      <div className='mb-10'>
        <img className='h-20 w-[80px] mx-auto border-2 border-dashed rounded-full p-2' src={logo} alt="" />
        <p className='font-bold text-center my-2 text-3xl text-black'>Coupon</p>
        <hr className='w-1/2 mx-auto' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {/* left side */}
        <div
          className={`px-5 rounded-xl bg-pink-100 flex justify-evenly items-center transition-transform duration-300 transform-gpu hover:bg-pink-200`}

        >
          <div data-aos="fade-up-right" data-aos-duration="600">
            <img
              className={`h-40 md:h-72 w-40 md:w-72 scale-105`}
              src={coupon}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="600">
            <p className={`text-2xl md:text-5xl font-bold`}>Get off
              <span className={`transition-opacity duration-500`}> 5% </span>
            </p>
            <p className={`text-center font-semibold text-xs md:text-2xl`}>Best toys for Children</p>
            <button className={`btn btn-secondary w-2/3 md:w-full mx-auto`}>
              Buy!
            </button>
          </div>

        </div>
        {/* right side */}
        <div
          className={`px-5 rounded-xl bg-slate-300 flex justify-evenly items-center transition-transform duration-300 transform-gpu hover:bg-slate-200`}
          data-aos="fade-down" data-aos-duration="800"
        >
          <img src={boss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Coupon;