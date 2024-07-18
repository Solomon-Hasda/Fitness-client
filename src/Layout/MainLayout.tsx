import Footer from "@/pages/HOme/Footer";
import Header from "@/pages/HOme/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[1200px] m-auto  ">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;