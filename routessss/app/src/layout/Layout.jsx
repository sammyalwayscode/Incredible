import { Outlet } from "react-router-dom";
import Header from "../CompTwo/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
