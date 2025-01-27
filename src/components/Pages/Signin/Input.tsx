import "@components/Pages/Signin/Input.scss";

type InputProps = {
  id: string;
  label: string;
  type: string;
  isRemember?: boolean;
};

export function Input({ id, label, type, isRemember = false }: InputProps) {
  if (isRemember) {
    return (
      <div className="input-remember">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
}
