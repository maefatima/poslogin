import React from "react";
import "./InputFields.scss";

interface InputFieldProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ placeholder, type, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label htmlFor="input_name"></label>
      <input
        name="input_name"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputField;
