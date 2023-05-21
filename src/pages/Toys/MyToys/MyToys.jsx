import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysSingle from "./MyToysSingle";
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import UseTitle from "../../../utilities/UseTitle";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [dataLoading, setDataLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const [sort, setSort] = useState(false);
  const [order, setOrder] = useState(true);
  const navigate = useNavigate();


  UseTitle('My Toys');

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
        fetch(`https://toy-safari-server.vercel.app/myToys/${id}`, {
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

  const handleEdit = id => {
    navigate(`/myToys/${id}`);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  const handleOrder = () => {
    setOrder(!order);
  }

  useEffect(() => {
    console.log(1);
    fetch(`https://toy-safari-server.vercel.app/myToys?email=${user.email}&sort=${sort}&order=${order}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
        setDataLoading(false);
      })
  }, [sort, order]);

  useEffect

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
    <>
      <div className="flex mt-3 mx-2">
        <div className="ml-auto">
          {sort && order && (
            <>
              <FaSortDown className="w-7 h-7"></FaSortDown>
            </>
          )}
          {sort && !order && (
            <>
              <FaSortUp className="w-7 h-7"></FaSortUp>
            </>
          )}
        </div>
        <div className="ml-1">
          <button onClick={handleOrder} className={`btn btn-sm bg-orange-900 text-white ${sort ? '' : 'hidden'} `}>
            {
              order ? 'Descending' : 'Ascending'
            }
          </button>
        </div>
        <div className="ml-1">
          <button onClick={handleSort} className={`btn btn-sm text-white ${sort ? 'bg-orange-900' : 'bg-black'} `}>Price</button>
        </div>
      </div>
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
              <th>Toy</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Seller</th>
              <th>Seller Name</th>
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
                  handleEdit={handleEdit}
                ></MyToysSingle>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;