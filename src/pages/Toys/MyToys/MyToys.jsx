import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysSingle from "./MyToysSingle";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [dataLoading, setDataLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

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
        fetch(`http://localhost:5173/myToys/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = toys.filter(toy => toy._id !== id)
              setToys(remaining);
            }
          })


      }
    })
  }

  const handleSingleToy = id => {
    navigate(`/toy/${id}`);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
        setDataLoading(false);
      })
  }, [user, toys]);

  if (dataLoading) {
    return (
      <div className='flex justify-center items-center'>
        <div className='text-center h-[50vh] w-[50vh] flex justify-center items-center'>
          <progress className="progress w-56"></progress>
        </div>
      </div>
    )
  }

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
                handleSingleToy={handleSingleToy}
              ></MyToysSingle>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;