import "./header.css";
import logo from "../images/logo.jpg";

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <div className="logo-img-box">
          <img src={logo} alt="logo" className="logo-img"></img>
        </div>
        <p className="logo-title">AnimeU</p>
      </div>
    </header>
  );
}
