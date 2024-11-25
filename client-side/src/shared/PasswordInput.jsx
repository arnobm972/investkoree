const PasswordInput = ({
  showPassword,
  togglePasswordVisibility,
  ...props
}) => (
  <div className="input-field relative">
    <input type={showPassword ? "text" : "password"} {...props} />
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute right-3 top-1/2"
    >
      {showPassword ? (
        <i className="fas fa-eye" />
      ) : (
        <i className="fas fa-eye-slash" />
      )}
    </button>
  </div>
);
export default PasswordInput;
