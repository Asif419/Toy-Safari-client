import { useLoaderData } from "react-router-dom";
import money from '../../../assets/icon/money.png';
import quantity from '../../../assets/icon/quantity.png';
import ratings from '../../../assets/icon/rating.png';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";


const Toy = () => {
  const data = useLoaderData();
  const [toy] = data;
  const { toyName, sellerName, subCategory, price, availableQuantity, pictureURL, sellerEmail, sellerImageURL, rating, description } = toy;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 p-2 md:p-3 my-5">
      <div className="hero bg-base-200 p-3 md:p-5 rounded-3xl">
        <div>
          {/* img and details */}
          <div className="hero-content flex-col lg:flex-row">
            <img src={pictureURL} className="w-full md:w-1/3 rounded-lg shadow-2xl" />
            <div>
              <div className="flex justify-items-center items-center gap-3">
                <h1 className="text-5xl font-bold text-black">{toyName}</h1>
                <button disabled className="btn btn-ghost btn-xs text-white">{subCategory}</button>
              </div>
              <p className="">{description}</p>
            </div>
          </div>
          {/* price, quantity, availability */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="px-5 flex flex-col justify-items-center items-center">
              <img src={money} className="w-12 h-12" alt="money" />
              <p className="font-bold">price</p>
              <p>$ {price}</p>
            </div>
            <div className="flex flex-col justify-items-center items-center">
              <img src={ratings} className="w-12 h-12" alt="rating" />
              <p className="font-bold">Rating</p>
              <div>
                <Rating
                  fullSymbol={<FaStar />}
                  emptySymbol={<FaRegStar />}
                  initialRating={rating}
                  readonly
                />
              </div>
            </div>
            <div className="flex flex-col justify-items-center items-center">
              <img src={quantity} className="w-12 h-12" alt="quantity" />
              <p className="font-bold">Available Quantity</p>
              <p>{availableQuantity} pics</p>
            </div>
          </div>
          {/* buy button */}
          <div className="flex justify-items-center items-center">
            <button className="btn btn-primary flex ">Buy Now</button>
          </div>
        </div>
      </div>

      <div className='px-5 md:px-36'>
        <p className="text-center font-semibold tracking-wider">Seller Information</p>
        <hr />
        <div className='p-5 md:p-10 py-10 md:py-16 relative'>
          <div className='flex justify-center'>
            <div className="-mb-16 z-20">
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={sellerImageURL} />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='z-10'>
              <div className="card card-compact w-96 bg-base-300 shadow-xl p-5">
                <div className="card-body mt-14">
                  <h2 className="card-title">{sellerName}</h2>
                  <p>{sellerEmail}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-black text-white">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Toy;