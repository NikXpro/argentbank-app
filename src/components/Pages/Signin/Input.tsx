import "@components/Pages/Signin/Input.scss";

type InputProps = {
  id: string;
  label: string;
  type: string;
  isRemember?: boolean;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hideLabel?: boolean;
  placeholder?: string;
};

export function Input({
  id,
  label,
  type,
  isRemember = false,
  value,
  checked,
  onChange,
  hideLabel = false,
  placeholder,
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
      {!hideLabel && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder || (hideLabel ? label : undefined)}
        aria-label={label}
      />
    </div>
  );
}
