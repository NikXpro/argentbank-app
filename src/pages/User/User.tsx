import "@pages/User/User.scss";
import { Button } from "../../components/Button";
import { AccountItem } from "../../components/Pages/User/AccountItem";

export function User() {
  return (
    <div className="main bg-dark">
      <div className="header">
        <h1 className="header-title">
          Welcome back
          <br />
          Tony Jarvis!
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
