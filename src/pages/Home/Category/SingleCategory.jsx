import { useNavigate } from "react-router-dom";
import AllToysSingle from "../../Toys/AllToys/AllToysSingle";

const SingleCategory = ({ toys }) => {
  const navigate = useNavigate();


  const handleSingleToy = id => {
    navigate(`/toy/${id}`);
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead className="text-center">
          <tr>
            <th>Toy</th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Seller</th>
            <th className="w-2">Name</th>
            <th>Show Details</th>
          </tr>
        </thead>
        <tbody>
          {
            toys.map(toy =>
              <AllToysSingle
                key={toy._id}
                toy={toy}
                handleSingleToy={handleSingleToy}
              ></AllToysSingle>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default SingleCategory;