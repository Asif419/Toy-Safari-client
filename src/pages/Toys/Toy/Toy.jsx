import { useLoaderData } from "react-router-dom";

const Toy = () => {
  const data = useLoaderData();
  const [toy] = data;
  const { toyName, sellerName, subCategory, price, availableQuantity, pictureURL, sellerEmail, sellerImageURL, rating, description } = toy;
  console.log(toy);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-5">
      <div className="hero min-h-min bg-base-200 p-3 md:p-5 rounded-3xl">
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <img src={pictureURL} className="w-1/3 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl font-bold">{toyName}</h1>
              <p className="">{description}</p>
            </div>
          </div>
          <div>

          </div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      <div className="divider lg:divider-horizontal">OR</div>
      
      <div className='px-5 md:px-36'>
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
              <div className="card card-compact w-96 bg-pink-100 shadow-xl p-5">
                <div className="card-body mt-14">
                  <h2 className="card-title">{sellerName}</h2>
                  <p>{sellerEmail}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;