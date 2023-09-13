import Link from "next/link";
import cn from "classnames";
import TransparentButton from "@/components/common/transparentButton";
import SelectCustom from "../selectCustom/selectCustom";
import Logo from "@/public/logo.svg";
import IconPhone from "./icons/icon-phone.svg";
import s from "./header.module.scss";

const options = [
  { value: "apartment_1", label: "Квартира 1" },
  { value: "apartment_2", label: "Квартира 2" },
  { value: "apartment_3", label: "Квартира 3" },
];

type Props = {
  btnHandler: () => void;
};

const Header: React.FC<Props> = ({ btnHandler }) => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.line}>
          <div className={cn(s.item, s.itemMenu)}>
            <button className={s.burger}>
              <span className={s.burgerInner}>
                <span className={s.burgerIcon}>
                  <span className={s.solid}></span>
                  <span className={s.solid}></span>
                  <span className={s.solid}></span>
                </span>
                <span className={s.burgerText}>МЕНЮ</span>
              </span>
            </button>
          </div>
          <div className={cn(s.item, s.itemSelect)}>
            <div className={s.selectWrapper}>
              <SelectCustom options={options} placeholder="Выбрать квартиру" />
            </div>
          </div>
          <div className={cn(s.item, s.itemLogo)}>
            <Link href="/" className={s.logo}>
              <Logo />
            </Link>
          </div>
          <div className={cn(s.item, s.itemTel)}>
            <a className={s.link} href="tel:+74955272121">
              +7 495 527 21 21
            </a>
          </div>
          <div className={cn(s.item, s.itemCall)}>
            <div className={s.shortBtn}>
              <button className={s.callBtn} onClick={btnHandler}>
                <span className={s.callInner}>
                  <IconPhone />
                </span>
              </button>
            </div>
            <div className={s.longBtn}>
              <TransparentButton text="Заказать звонок" onClick={btnHandler}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
