import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "./Loading";

const Main = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className='min-h-[calc(100vh-292px)]'>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="bg-black">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;