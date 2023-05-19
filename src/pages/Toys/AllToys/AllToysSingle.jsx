
const AllToysSingle = ({ singleToy }) => {
  const { _id, sellerName, sellerImageURL, toyName, subCategory, price, availableQuantity, } = singleToy
  console.log(singleToy);
  return (
    <>
      <tr>
        {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
        <th>
          <div className="flex items-center space-x-10">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Seller Name</div>
            </div>
          </div>
        </th>
        <td>
          Toy Name
          <br />
          <span className="badge badge-ghost badge-sm">Category of toy</span>
        </td>
        <td>Price</td>
        <td>Available Quantity</td>
        <th>
          <button className="btn btn-ghost btn-xs">Details</button>
        </th>
      </tr>
    </>
  );
};

export default AllToysSingle;