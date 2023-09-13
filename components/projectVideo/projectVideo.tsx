import Image from "next/image";
import IconPlay from "./images/icon-play.svg";
import s from "./projectVideo.module.scss";

type Props = {
  title: string;
}
const ProjectVideo: React.FC<Props> = ({title}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.title}>
          <span className={s.text}>{title}</span>
          <span className={s.time}>1:25 минут</span>
        </div>
      </div>
      <div className={s.solid}>
        <span className={s.solidInner}></span>
      </div>
      <div className={s.around}>
        <div className={s.video}>
          <div className={s.videoInner}>
            <Image src="/images/video-preview.png" alt="video-preview" quality={100} fill />
            <div className={s.absBtn}>
              <button className={s.play}>
              </button>
              <span className={s.playText}>
                <IconPlay /> play
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectVideo;
