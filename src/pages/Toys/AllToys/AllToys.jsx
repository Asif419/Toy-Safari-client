import { useLoaderData, useNavigate } from "react-router-dom";
import AllToysSingle from "./AllToysSingle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";
import UseTitle from "../../../utilities/UseTitle";


const AllToys = () => {
  const { user } = useContext(AuthContext);
  const allToys = useLoaderData();
  const [toys, setToys] = useState(allToys);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  UseTitle('All Toys');

  const handleSingleToy = id => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to login First',
      })
        .then(result => {
          if (result.isConfirmed) {
            navigate(`/toy/${id}`);
          }
        })
    }
    else {
      navigate(`/toy/${id}`);
    }
  }

  let debounceTimer;

  const handleSearchData = (value) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (value === '' || !value) {
        setToys(allToys);
        return;
      }
      else {
        fetch(`https://toy-safari-server.vercel.app/searchToys/${value}`)
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
  }, [allToys, searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <input onChange={handleSearch} type="text" placeholder="Search Here | ex. horse, dog" className="input input-bordered my-3 w-full max-w-xs" />
      </div>
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
            {/* row */}
            {toys.length ?
              toys.map(toy =>
                <AllToysSingle
                  key={toy._id}
                  toy={toy}
                  handleSingleToy={handleSingleToy}
                ></AllToysSingle>)
              :
              <p className="mx-auto p-10 text-center">No result found</p>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;