import UseTitle from "../../utilities/UseTitle";
import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
import Category from "./Category/Category";
import Coupon from "./Coupon";
import Gallery from "./Gallery";
import Review from "./Review";

const Home = () => {

  UseTitle('Home');

  return (
    <div className="py-5">
      <div className="px-2 md:px-0">
        <Banner></Banner>
      </div>
      <div className="px-2 md:px-0">
        <Category></Category>
      </div>
      <BannerTwo></BannerTwo>
      <Gallery></Gallery>
      <div className="px-2 md:px-0">
        <Coupon></Coupon>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;