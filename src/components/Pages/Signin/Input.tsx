import "@components/Pages/Signin/Input.scss";

type InputProps = {
  id: string;
  label: string;
  type: string;
  isRemember?: boolean;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  id,
  label,
  type,
  isRemember = false,
  value,
  checked,
  onChange,
}: InputProps) {
  if (isRemember) {
    return (
      <div className="input-remember">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
