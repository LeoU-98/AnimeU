import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

function Layout() {
  return (
    <div className="container">
      <Header />
      <div className="anime">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
