import "@pages/Signin/Signin.scss";
import { Button } from "../../components/Pages/Signin/Button";
import { Input } from "../../components/Pages/Signin/Input";

export function Signin() {
  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form action="">
          <Input id="username" label="Username" type="text" />
          <Input id="password" label="Password" type="password" />
          <Input
            id="remember-me"
            label="Remember me"
            type="checkbox"
            isRemember
          />
          <Button />
        </form>
      </section>
    </div>
  );
}
