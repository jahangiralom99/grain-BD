import { Outlet } from "react-router-dom";
import Navbar2 from "./Pages/Navbar/Navbar2";
import Navbar1 from "./Pages/Navbar/Navbar1";
import Navbar3 from "./Pages/Navbar/Navbar3";

const Root = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3/>
      <Outlet />
      footer
    </div>
  );
};

export default Root;
