import "@components/Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  type,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
