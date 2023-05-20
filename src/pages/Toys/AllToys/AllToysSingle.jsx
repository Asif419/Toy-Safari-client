
const AllToysSingle = ({ toy, handleSingleToy }) => {
  const { _id, sellerName, sellerImageURL, pictureURL, toyName, subCategory, price, availableQuantity, } = toy;

  return (
    <>
      <tr className="text-center">
        <th>
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16">
              <img src={pictureURL} alt={toyName} />
            </div>
          </div>
        </th>
        <td>
          <p className="font-bold">{toyName}</p>
          <span className="badge badge-ghost badge-sm">{subCategory}</span>
        </td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={sellerImageURL} alt={sellerName} />
            </div>
          </div>
        </td>
        <td>
          <div>
            {sellerName}
          </div>
        </td>
        <td>
          <button onClick={() => handleSingleToy(_id)} className="btn btn-ghost btn-xs">Details</button>
        </td>
      </tr >
    </>
  );
};

export default AllToysSingle;