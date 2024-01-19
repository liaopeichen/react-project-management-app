export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label htmlFor={label}>{label}</label>
      <input
        type={textarea ? <textarea {...props} /> : <input {...props} />}
        id={label}
      />
    </p>
  );
}
