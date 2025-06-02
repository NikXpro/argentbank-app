import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { getProfile, logout } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";
import "./Nav.scss";

export function Nav() {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token } = useSelector((state: RootState) => state.auth);
  const isLoggedIn = !!token && !!user;

  useEffect(() => {
    // Si on a un token mais pas d'utilisateur, on récupère le profil
    if (token && !user) {
      dispatch(getProfile());
    }
  }, [dispatch, token, user]);

  const handleLogout = () => {
    dispatch(logout());
  };

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
      <div className="main-nav-items">
        {isLoggedIn ? (
          <>
            <NavLink to="/profile" className="main-nav-items-item">
              <i className="fa fa-user-circle"></i>
              {` ${user?.firstName} `}
            </NavLink>
            <NavLink
              to="/"
              className="main-nav-items-item"
              onClick={handleLogout}
            >
              <i className="fa fa-sign-out"></i>
              {" Sign Out"}
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className="main-nav-items-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}
