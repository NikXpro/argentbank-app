import "@components/Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="sign-in-button" onClick={onClick}>
      {children}
    </button>
  );
}
