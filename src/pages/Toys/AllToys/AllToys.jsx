import { useLoaderData } from "react-router-dom";
import AllToysSingle from "./AllToysSingle";
import { useEffect, useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();
  const [toys, setToys] = useState(allToys);
  const [searchValue, setSearchValue] = useState('');


  let debounceTimer;

  const handleSearchData = (value) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (value === '' || !value) {
        setToys(allToys);
        return;
      }
      else {
        fetch(`http://localhost:5000/searchToys/${value}`)
          .then((res) => res.json())
          .then((data) => setToys(data));
      }
    }, 300);
  };


  const handleSearch = event => {
    clearTimeout(debounceTimer);
    const value = event.target.value;
    setSearchValue(value);
  }

  useEffect(() => {
    handleSearchData(searchValue);
  }, [allToys, searchValue])

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
              toys.map(toy =>
                <AllToysSingle
                  key={toy._id}
                  toy={toy}
                ></AllToysSingle>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;