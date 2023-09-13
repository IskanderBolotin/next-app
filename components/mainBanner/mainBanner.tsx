import Image, { ImageProps } from "next/image";
import s from "./mainBanner.module.scss";

type Props = {} & ImageProps;

const MainBanner: React.FC<Props> = (props) => {
  const { ...imageProps } = props;
  return (
    <div className={s.banner}>
      <div className={s.inner}>
        <Image {...imageProps} />
      </div>
    </div>
  );
};

export default MainBanner;
