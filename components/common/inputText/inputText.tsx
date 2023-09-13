import { InputHTMLAttributes } from "react";
import s from "./inputText.module.scss";

type Props = {
  id: string;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement> 

const InputText: React.FC<Props> = ({id, placeholder, ...props}) => {
  const {type, ...otherProps} = props;
  return (
    <div className={s.wrapper}>
      <input className={s.text} type="text" {...otherProps} id={id} placeholder={placeholder}/>
      <label className={s.label} htmlFor={id}>{placeholder}</label>
    </div>
  )
}

export default InputText;