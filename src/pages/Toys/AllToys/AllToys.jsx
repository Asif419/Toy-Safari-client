import { useLoaderData } from "react-router-dom";
import AllToysSingle from "./AllToysSingle";

const AllToys = () => {
  const allToys = useLoaderData();
  // console.log(allToys)
  return (
    <div>
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