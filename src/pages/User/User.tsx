import "@pages/User/User.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { AccountItem } from "../../components/Pages/User/AccountItem";
import { getProfile } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";

export function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Si pas de token, redirection vers login
    if (!token) {
      navigate("/login");
      return;
    }

    // Si token mais pas d'utilisateur, on récupère le profil
    if (token && !user) {
      dispatch(getProfile());
    }
  }, [dispatch, navigate, token, user]);

  if (!user) {
    return null;
  }

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1 className="header-title">
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        <Button className="edit-button">Edit Name</Button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <div className="accounts">
        <AccountItem
          title="Argent Bank Checking"
          amount="$2,082.79"
          description="Available Balance"
          number="x8349"
        />
      </div>
    </div>
  );
}
