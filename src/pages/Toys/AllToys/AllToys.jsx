import { useLoaderData } from "react-router-dom";
import AllToysSingle from "./AllToysSingle";
import { useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = event => {
    const value = event.target.value;
    setSearchValue(value);
  }

  
  console.log(searchValue);

  // console.log(allToys)
  return (
    <div>
      <div className="flex justify-center items-center">
        <input onChange={handleSearch} type="text" placeholder="Search Here" className="input input-bordered my-3 w-full max-w-xs" />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Seller</th>
              <th>Name</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Show Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
              allToys.map(singleToy =>
                <AllToysSingle
                  key={singleToy._id}
                  singleToy={singleToy}
                ></AllToysSingle>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;