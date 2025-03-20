import styles from "./Form.module.css";
function Input({ type, name, placeholder, value, text, handleOnChange }) {
  <div className={styles.form_control}>
    <label htmlFor={name}>{text}</label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  </div>;
}
