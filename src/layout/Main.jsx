import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet ></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;