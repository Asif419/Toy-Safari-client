import { LazyLoadImage } from "react-lazy-load-image-component";
import money from '../../../assets/icon/money.png';
import ratings from '../../../assets/icon/rating.png';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const SingleCategory = ({ toy, handleSingleToy }) => {
  const { _id, toyName, subCategory, price, rating, pictureURL } = toy;

  return (
    <div className="overflow-x-auto w-full">
      <div className=" border-2 border-dotted rounded-3xl">
        <div className="bg-base-200 rounded-3xl m-1">
          {/* img and details */}
          <div className="hero-content flex-col">
            <LazyLoadImage
              className='w-full max-h-[30vh] rounded-lg shadow-2xl'
              src={pictureURL}
              effect="blur"
              alt={toyName} />
            <div>
              <div className="flex justify-items-center items-center gap-3">
                <h1 className="text-4xl font-bold text-black">{toyName}</h1>
                <button disabled className="btn btn-ghost btn-xs text-white">{subCategory}</button>
              </div>
            </div>
          </div>
          {/* price, quantity, availability */}
          <div className="grid grid-cols-2 items-center justify-center">
            <div className="flex flex-col justify-items-center items-center">
              <img src={money} className="w-12 h-12" alt="money" />
              <p className="font-bold">price</p>
              <p>$ {price}</p>
            </div>
            <div className="flex flex-col justify-items-center items-center">
              <img src={ratings} className="w-12 h-12" alt="rating" />
              <p className="font-bold">Rating</p>
              <div>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  readOnly />
              </div>
            </div>
          </div>
          {/* buy button */}
          <div className="flex justify-center items-center">
            <button onClick={() => handleSingleToy(_id)} className="btn btn-primary flex my-2">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;