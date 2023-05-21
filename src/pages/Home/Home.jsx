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
      <Banner></Banner>
      <Category></Category>
      <BannerTwo></BannerTwo>
      <Gallery></Gallery>
      <Coupon></Coupon>
      <Review></Review>
    </div>
  );
};

export default Home;