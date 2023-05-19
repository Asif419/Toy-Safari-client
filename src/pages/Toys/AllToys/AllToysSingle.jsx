
const AllToysSingle = ({ singleToy }) => {
  const { _id, sellerName, sellerImageURL, toyName, subCategory, price, availableQuantity, } = singleToy
  console.log(singleToy);
  return (
    <>
      <tr className="text-center">
        {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
        <th>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={sellerImageURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </th>
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
        <th>
          <button className="btn btn-ghost btn-xs">Details</button>
        </th>
      </tr >
    </>
  );
};

export default AllToysSingle;