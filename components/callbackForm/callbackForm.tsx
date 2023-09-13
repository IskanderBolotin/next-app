import { useState } from "react";
import BlueButton from "../common/blueButton/blueButton";
import InputText from "../common/inputText";
import InputTel from "../common/inputTel";
import s from "./callbackForm.module.scss";

const CallbackForm = () => {
  const [nameState, setNameState] = useState<string>("");
  const [telState, setTelState] = useState<string>("");
  const [mailState, setMailState] = useState<string>("");

  const buttonHandler = () => {
    console.log("Имя:", nameState);
    console.log("Телефон:", telState);
    console.log("E-mail:", mailState);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.title}>ЗАКАЗАТЬ ЗВОНОК</div>
      <div>
        <div className={s.item}>
          <InputText id="name" placeholder="Ваше имя" value={nameState} onChange={(e) => setNameState(e.target.value)}/>
        </div>
        <div className={s.item}>
          <InputTel id="tel" placeholder="Телефон" value={telState} onChange={(e) => setTelState(e.target.value)}/>
        </div>
        <div className={s.item}>
          <InputText id="e-mail" placeholder="e-mail" value={mailState} onChange={(e) => setMailState(e.target.value)}/>
        </div>
        <div className={s.bottom}>
          <div className={s.text}>
            Нажимая на кнопку «Отправить», вы&nbsp;ознакомлены
            и&nbsp;соглашаетесь с&nbsp;политикой обработки персональных данных
          </div>
          <div className={s.btn}>
            <BlueButton text="ОТПРАВИТЬ" onClick={buttonHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
