import { useLoaderData } from "react-router-dom";

const Toy = () => {
  const toy = useLoaderData();
  const { toyName, sellerName, subCategory, price, availableQuantity, pictureURL, sellerEmail, sellerImageURL, rating, description } = toy;
  return (
    <>


      {/* Put this part before </body> tag */}

    </>
  );
};

export default Toy;