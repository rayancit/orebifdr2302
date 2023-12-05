import React from "react";

const Input = ({
  className,
  labelClassName,
  label,
  inputClassName,
  placeholder,
  type,
  isRequired,
  value,
  onChange,
}) => {
  return (
    <div className={className}>
      <label htmlFor="" className={`block ${labelClassName}`}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
