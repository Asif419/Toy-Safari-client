import { FaTrashAlt, FaPenSquare } from "react-icons/fa";



const MyToysSingle = ({ toy, handleDelete, handleSingleToy, handleEdit }) => {
  const { _id, sellerName, sellerImageURL, toyName, subCategory, price, availableQuantity, } = toy;



  return (
    <>
      <tr className="text-center">
        {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
        <th>
          <button onClick={() => handleDelete(_id)}>
            <FaTrashAlt className="w-5 h-5"></FaTrashAlt>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={sellerImageURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center space-x-10">

          </div>
          <div>
            <div className="font-bold">{sellerName}</div>
          </div>
        </td>
        <td>
          {toyName}
          <br />
          <span className="badge badge-ghost badge-sm">{subCategory}</span>
        </td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <button onClick={() => handleSingleToy(_id)} className="btn btn-ghost btn-xs">Details</button>
        </td>
        <td>
          <button onClick={() => handleEdit(_id)}>
            <FaPenSquare className="w-7 h-7"></FaPenSquare>
          </button>
        </td>
      </tr >
    </>
  );
};

export default MyToysSingle;