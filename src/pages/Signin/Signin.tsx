import "@pages/Signin/Signin.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Input } from "../../components/Pages/Signin/Input";
import { getProfile, login } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";

export function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, token } = useSelector(
    (state: RootState) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
      navigate("/profile");
    }
  }, [token, dispatch, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(
        login({
          email: formData.email,
          password: formData.password,
        })
      );
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            id="rememberMe"
            label="Remember me"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            isRemember
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
        </form>
      </section>
    </div>
  );
}
