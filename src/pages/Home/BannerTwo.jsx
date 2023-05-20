import { Link } from "react-router-dom";

const BannerTwo = () => {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/Yf1gxJw/toys.jpg")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">Hello !!</h1>
          <p className="mb-5">From wild creatures to domestic pets, we offer a wide range of high-quality toys. Let your imagination run wild as you dive into the world of animal toys. Start your safari today!</p>
          <Link to='/toys'>
            <button className="btn bg-black text-white">View All Toys</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;