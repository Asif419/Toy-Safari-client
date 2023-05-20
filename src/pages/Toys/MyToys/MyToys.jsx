import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysSingle from "./MyToysSingle";
import Swal from 'sweetalert2';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  // console.log(toys);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user.email}`)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [user, toys]);


  return (
    <div className="overflow-x-auto w-full my-5">
      <table className="table w-full">
        {/* head */}
        <thead className="text-center">
          <tr>
            {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
            <th>Delete</th>
            <th>Seller</th>
            <th>Name</th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Show Details</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {
            toys.map(toy =>
              <MyToysSingle
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToysSingle>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;