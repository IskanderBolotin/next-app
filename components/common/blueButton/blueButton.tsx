import { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";
import s from "./blueButton.module.scss";

type Props = {
  text?: string;
  link?: string;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  LinkHTMLAttributes<HTMLAnchorElement>;

const BlueButton: React.FC<Props> = ({ text, link, children, ...props }) => {
  const renderContent = () => {
    if (!text) {
      return <span className={s.inner}>{children}</span>;
    }
    return (
      <span className={s.inner}>
        {children}
        <span className={s.text}>{text}</span>
        <span className={s.extraText}>{text}</span>
      </span>
    );
  };
  if (!!link) {
    return (
      <a className={s.button} href={link} {...props}>
        {
          renderContent()
        }
      </a>
    );
  }
  return (
    <button className={s.button} {...props}>
      {
        renderContent()
      }
    </button>
  );
};

export default BlueButton;
