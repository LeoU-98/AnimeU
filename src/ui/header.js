import "../Styles/Header.css";
import logo from "../images/logo.jpg";

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <div className="logo-img-box">
          <img src={logo} alt="logo" className="logo-img"></img>
        </div>
        <h1 className="logo-title">AnimeU</h1>
      </div>
    </header>
  );
}
