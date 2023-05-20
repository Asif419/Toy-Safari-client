import bannerLogo from '../../assets/icon/review.png'
import pageLogo from '../../assets/picture/logo.png'
import { FaComments } from "react-icons/fa";

const Review = () => {
  return (
    <div className="mt-20 mx-10 md:mx-20">
      <div className='my-5'>
        <img className='h-20 w-[80px] mx-auto border-2 border-dashed rounded-full p-2' src={bannerLogo} alt="" />

        <p className='font-bold text-center my-2 text-3xl text-black'>Reviews</p>
        <hr className='w-1/2 mx-auto' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
        {/* client say */}
        <div className="bg-slate-300 rounded-xl w-1/2 min-h-[40vh] mx-auto flex flex-col justify-center items-center it gap-5">
          <div className="flex items-center">
            <div className="border-r-2 border-gray-500 mr-2"></div>
            <img className="rounded-full h-20 w-20" src={pageLogo} alt="" />
            <div className="border-l-2 border-gray-500 ml-2"></div>
          </div>
          <div>
            <h2 className='text-slate-600 italic font-bold text-1xl'>Client's Say</h2>
          </div>
        </div>
        {/* client one message */}
        <div className="border-2 border-dotted rounded-xl w-full min-h-[50vh] mx-auto flex flex-col justify-center items-center gap-5">
          <div className="avatar mt-5">
            <div className="w-24 mask mask-hexagon">
              <img src="https://i.ibb.co/Cm4YfDL/photo.jpg" />
            </div>
          </div>
          <div>
            <FaComments className='text-orange-600 h-10 w-10'></FaComments>
          </div>
          <p className='text-center px-3 md:px-5 pb-3'>We are extremely pleased with our experience as a client of Toys Safari. The platform provided us with excellent visibility and exposure for our products.</p>
          {/* <div className='flex flex-col p-5 justify-center items-center'>
          </div> */}
          <div className='flex flex-col justify-center items-center mb-5 relative'>
            <p className='text-2xl tracking-widest z-10'>Aria Struck</p>
            <p className='text-sm tracking-tight text-orange-800'>Web Designer</p>
            <p className='text-7xl text-gray-300 tracking-tighter font-extrabold absolute bottom-4 z-0'>01</p>
          </div>
        </div>
        {/* client two message */}
        <div className="border-2 border-dotted rounded-xl w-full min-h-[50vh] mx-auto flex flex-col justify-center items-center gap-5">
          <div className="avatar mt-5">
            <div className="w-24 mask mask-hexagon">
              <img src="https://i.ibb.co/gJtrmww/boy.jpg" />
            </div>
          </div>
          <div>
            <FaComments className='text-orange-600 h-10 w-10'></FaComments>
          </div>
          <p className='text-center px-3 md:px-5 pb-3'>Working with Toy Safari was an incredible experience! The team truly understands the essence of quality and creativity in the toy industry.</p>
          {/* <div className='flex flex-col p-5 justify-center items-center'>
          </div> */}
          <div className='flex flex-col justify-center items-center mb-5 relative'>
            <p className='text-2xl tracking-widest z-10'>Xander Storm</p>
            <p className='text-sm tracking-tight text-orange-800'>Fashion Designer</p>
            <p className='text-7xl text-gray-300 tracking-tighter font-extrabold absolute bottom-4 z-0'>02</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;