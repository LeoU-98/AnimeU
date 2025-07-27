import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="main-header">
      <Link to="./AnimeU" className="logo">
        <div className="logo-img-box">
          <img src={logo} alt="logo" className="logo-img"></img>
        </div>
        <h1 className="logo-title">AnimeU</h1>
      </Link>
    </header>
  );
}
