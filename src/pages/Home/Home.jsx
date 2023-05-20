import Banner from "./Banner";
import Category from "./Category/Category";
import Coupon from "./Coupon";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="py-5">
      <Banner></Banner>
      <Category></Category>
      <Gallery></Gallery>
      <Coupon></Coupon>
    </div>
  );
};

export default Home;