import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const data = useLoaderData();
  const [toy] = data;
  const { toyName, subCategory, price, availableQuantity, pictureURL, rating, description } = toy;
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      subCategory: subCategory.toLowerCase() || "domestic" // Set the default value here
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <div className="mx-auto p-5 form-control w-full max-w-xl bg-base-200 rounded-2xl my-10">
      <form className="flex flex-col gap-2 w-full justify-items-center items-center" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
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
                <option value="wild">Wild</option>
                <option value="domestic">Domestic</option>
                <option value="bird">Bird</option>
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
              <input className="w-10/12 px-3 py-1 rounded-lg" type="number" step="any" min="0" defaultValue={price} {...register("price", { min: 0, required: true })} />
              {/* {errors.price && <p className="text-red-500">Please enter a non-negative number.</p>} */}
            </div>
          </div>
          <div className="grid grid-cols-8 gap-3 justify-items-center items-center">
            <div className="col-span-3">
              <span className="label-text font-semibold">Quantity</span>
            </div>
            <div className="col-span-5">
              <input className="w-10/12 px-3 py-1 rounded-lg" type="number" min="0" defaultValue={availableQuantity} {...register("availableQuantity", { min: 0, required: true })} />
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
              <input className="w-10/12 px-3 py-1 rounded-lg" type="number" step="any" min="0" defaultValue={rating} {...register("rating", { min: 0, required: true })} />
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

        <input className="btn bg-black text-white w-1/3 mx-auto mt-5" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateToy;