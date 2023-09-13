import React, { InputHTMLAttributes } from "react";
import s from "./inputTel.module.scss";
import InputMask from "react-input-mask";

type Props = {
  id: string;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputTel: React.FC<Props> = ({ id, placeholder, ...props }) => {
  const { type, ...otherProps } = props;
  return (
    <div className={s.wrapper}>
      <InputMask
        mask="+7 999 999 99 99"
        value={props.value}
        onChange={props.onChange}
      >
        {() => {
          return (
            <input
              className={s.text}
              type="text"
              {...otherProps}
              id={id}
              placeholder={placeholder}
            />
          );
        }}
      </InputMask>
      <label className={s.label} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};

export default InputTel;
