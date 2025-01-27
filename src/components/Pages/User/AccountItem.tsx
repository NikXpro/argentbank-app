import "@components/Pages/User/AccountItem.scss";
import { Button } from "../../Button";

type AccountItemProps = {
  title: string;
  amount: string;
  description: string;
  number: string;
};

export function AccountItem({
  title,
  amount,
  description,
  number,
}: AccountItemProps) {
  return (
    <div className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title} ({number})
        </h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <Button className="account-cta">View transactions</Button>
    </div>
  );
}
