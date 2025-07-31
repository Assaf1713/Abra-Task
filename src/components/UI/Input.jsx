
export default function Input({ label, id, ...props }) {
  return (
    <p className="input-field">
      <label htmlFor={id}>{label} </label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
