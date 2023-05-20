import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import 'animate.css';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = addedToy => {
    addedToy.sellerImageURL = user.photoURL;
    fetch(`http://localhost:5000/addToy`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addedToy)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Data Inserted Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
            .then((result) => {
              if (result.isConfirmed) {
                reset();
              }
            })
        }
      })
  }

  return (
    <>
      <div>
        <p className="text-center my-2 text-2xl">Add <span className="font-bold tracking-wider text-red-800 ">    </span>  toy</p>
        <hr className="w-1/3 mx-auto" />
      </div>
      <div className="mx-auto p-5 form-control w-full max-w-xl bg-base-200 rounded-2xl my-10">
        <form className="flex flex-col gap-2 w-full justify-items-center items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Toy Name</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" {...register("toyName", { required: true })} />
              </div>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Category</span>
              </div>
              <div className="col-span-5">
                <select className="w-max px-3 py-1 rounded-lg" {...register("subCategory", { required: true })}>
                  <option value="wild">Wild</option>
                  <option value="domestic">Domestic</option>
                  <option value="bird">Bird</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Seller email</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" defaultValue={user.email} readOnly {...register("sellerEmail", { required: true })} />
              </div>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Seller Name</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" defaultValue={user.displayName} readOnly {...register("sellerName", { required: true })} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Price</span>
              </div>
              <div className="col-span-5 sm:w-1/2 md:w-full mx-start">
                <input className="w-10/12 px-3 py-1 rounded-lg" type="number" step="any" min="0" {...register("price", { min: 0, required: true, setValueAs: (value) => parseFloat(value) })} />
                {/* {errors.price && <p className="text-red-500">Please enter a non-negative number.</p>} */}
              </div>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Quantity</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" type="number" min="0" {...register("availableQuantity", { min: 0, required: true, setValueAs: (value) => parseFloat(value) })} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Picture URL</span>
              </div>
              <div className="col-span-5 sm:w-1/2 md:w-full mx-start">
                <input className="w-10/12 px-3 py-1 rounded-lg" {...register("pictureURL", { required: true })} />
                {/* {errors.price && <p className="text-red-500">Please enter a non-negative number.</p>} */}
              </div>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-start items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Rating</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" type="number" step="any" min="0" {...register("rating", { min: 0, max: 5, required: true, setValueAs: (value) => parseFloat(value) })} />
                {errors.rating && <p className="text-red-500">Please give a number between 0 and 5.</p>}
              </div>
            </div>
          </div>

          <div className="w-full px-3 md:px-3 justify-items-start items-center">
            <div className="my-2">
              <span className="label-text font-semibold">Description</span>
            </div>
            <div>
              <textarea
                className="w-full px-3 py-1 rounded-lg"
                rows={4}
                {...register("description")}
              />
            </div>
          </div>
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="btn bg-black text-white w-1/3 mx-auto mt-5" type="submit" value="Add Toy" />
        </form>
      </div>
    </>
  );
};

export default AddToy;