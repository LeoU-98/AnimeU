import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import ControlBar from "../Home/ControlBar";

function Layout() {
  return (
    <div className="container">
      <Header />
      <div className="anime">
        <ControlBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
