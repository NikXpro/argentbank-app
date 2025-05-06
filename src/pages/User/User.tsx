import "@pages/User/User.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Input } from "../../components/Pages/Signin/Input";
import { AccountItem } from "../../components/Pages/User/AccountItem";
import { getProfile, logout, updateProfile } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";

export function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const loadUserData = async () => {
      // Si pas de token, redirection vers login
      if (!token) {
        navigate("/login");
        return;
      }

      // Si token mais pas d'utilisateur, on récupère le profil
      if (token && !user) {
        try {
          await dispatch(getProfile());
        } catch (err) {
          console.error("Failed to load profile:", err);
          // Si le token est expiré, on déconnecte l'utilisateur
          if (error === "jwt expired") {
            dispatch(logout());
          }
          navigate("/login");
        }
      }

      // Mise à jour du formulaire quand l'utilisateur est chargé
      if (user) {
        setFormData({
          firstName: user.firstName,
          lastName: user.lastName,
        });
      }
    };

    loadUserData();
  }, [dispatch, navigate, token, user, error]);

  if (!user) {
    return null;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(updateProfile(formData));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
    });
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1 className="header-title">
          Welcome back
          <br />
          {isEditing ? (
            <form onSubmit={handleSave} className="edit-form">
              <div className="input-group">
                <div className="group-wrapper left">
                  <Input
                    id="firstName"
                    label="First Name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    hideLabel
                    placeholder="First Name"
                  />
                  <Button
                    type="submit"
                    className="edit-button"
                    disabled={isLoading}
                  >
                    Save
                  </Button>
                </div>
                <div className="group-wrapper">
                  <Input
                    id="lastName"
                    label="Last Name"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    hideLabel
                    placeholder="Last Name"
                  />
                  <Button
                    type="button"
                    className="edit-button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            `${user.firstName} ${user.lastName}!`
          )}
        </h1>
        {!isEditing && (
          <Button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </Button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <div className="accounts">
        <AccountItem
          title="Argent Bank Checking"
          amount="$2,082.79"
          description="Available Balance"
          number="x8349"
        />
        <AccountItem
          title="Argent Bank Savings"
          amount="$10,928.42"
          description="Available Balance"
          number="x6712"
        />
        <AccountItem
          title="Argent Bank Credit Card"
          amount="$184.30"
          description="Current Balance"
          number="x8349"
        />
      </div>
    </div>
  );
}
