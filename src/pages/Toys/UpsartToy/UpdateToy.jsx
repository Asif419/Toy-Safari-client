import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";
import 'animate.css';

const UpdateToy = () => {
  const data = useLoaderData();
  const [toy] = data;
  const { _id, toyName, subCategory, price, availableQuantity, pictureURL, rating, description } = toy;
  const navigate = useNavigate();
  // const [changed, setChanged] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      subCategory: subCategory || "Domestic" // Set the default value here
    }
  });

  const onSubmit = updatedToy => {

    fetch(`https://toy-safari-server.vercel.app/myToys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedToy)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Data Updated Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
            .then((result) => {
              if (result.isConfirmed) {
                navigate(`/myToys`);
              }
            })
        }
      })
  };

  return (
    <>
      <div>
        <p className="text-center my-2 text-2xl">Update <span className="font-bold tracking-wider text-red-800 ">  {toyName}  </span>  toy</p>
        <hr className="w-1/3 mx-auto" />
      </div>
      <div className="mx-auto p-5 form-control w-full max-w-xl bg-base-200 rounded-2xl my-10">
        <form className="flex flex-col gap-2 w-full justify-items-center items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid grid-cols-8 gap-3 justify-items-center items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Toy Name</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" defaultValue={toyName} {...register("toyName", { required: true })} />
              </div>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-center items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Category</span>
              </div>
              <div className="col-span-5">
                <select className="w-max px-3 py-1 rounded-lg" {...register("subCategory", { required: true })}>
                  <option value="Wild">Wild</option>
                  <option value="Domestic">Domestic</option>
                  <option value="Bird">Bird</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid grid-cols-8 gap-3 justify-items-center items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Price</span>
              </div>
              <div className="col-span-5 sm:w-1/2 md:w-full mx-start">
                <input className="w-10/12 px-3 py-1 rounded-lg" type="number" step="any" min="0" defaultValue={price} {...register("price", { min: 0, required: true, setValueAs: (value) => parseFloat(value) })} />
                {/* {errors.price && <p className="text-red-500">Please enter a non-negative number.</p>} */}
              </div>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-center items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Quantity</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" type="number" min="0" defaultValue={availableQuantity} {...register("availableQuantity", { min: 0, required: true, setValueAs: (value) => parseFloat(value) })} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid grid-cols-8 gap-3 justify-items-center items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Picture URL</span>
              </div>
              <div className="col-span-5 sm:w-1/2 md:w-full mx-start">
                <input className="w-10/12 px-3 py-1 rounded-lg" defaultValue={pictureURL} {...register("pictureURL", { required: true })} />
                {/* {errors.price && <p className="text-red-500">Please enter a non-negative number.</p>} */}
              </div>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-center items-center">
              <div className="col-span-3">
                <span className="label-text font-semibold">Rating</span>
              </div>
              <div className="col-span-5">
                <input className="w-10/12 px-3 py-1 rounded-lg" type="number" step="any" min="0" defaultValue={rating} {...register("rating", { min: 0, max: 5, required: true, setValueAs: (value) => parseFloat(value) })} />
                {errors.rating && <p className="text-red-500">Please give number inside 0-5.</p>}
              </div>
            </div>
          </div>

          <div className="w-full px-3 md:px-4 justify-items-center items-center">
            <div className="my-2">
              <span className="label-text font-semibold">Description</span>
            </div>
            <div>
              <textarea
                className="w-full px-3 py-1 rounded-lg"
                rows={4}
                defaultValue={description}
                {...register("description")}
              />
            </div>
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          {/* <div id="toastContainer"></div> */}
          <input className="btn bg-black text-white w-1/3 mx-auto mt-5" type="submit" value="Update" />
        </form>
      </div>
    </>
  );
};

export default UpdateToy;