import { Outlet } from "react-router-dom";
import Bar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Bar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
