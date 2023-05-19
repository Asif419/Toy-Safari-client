import { useLoaderData } from "react-router-dom";
import AllToysSingle from "./AllToysSingle";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Available Quantity</th>
              <th></th>
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