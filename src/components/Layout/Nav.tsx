import { NavLink } from "react-router";
import "./Nav.scss";
export function Nav() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/signin" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </NavLink>
      </div>
    </nav>
  );
}
