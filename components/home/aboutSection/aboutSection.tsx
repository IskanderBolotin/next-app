import Image from "next/image";
import IconV from "./images/icon-v.svg";
import s from "./aboutSection.module.scss";
import ProjectVideo from "@/components/projectVideo/projectVideo";

const AboutSection = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.item}>
          <div className={s.imageWrapper}>
            <h2 className={s.title}>о проекте</h2>
            <div className={s.image}>
              <div className={s.inner}>
                <Image
                  src="/images/about-banner.jpg"
                  alt="About Banner"
                  quality={100}
                  fill
                />
                <div className={s.absolute}>
                  <div className={s.around}>
                    <div className={s.aroundInner}>
                      <IconV />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.info}>
            <div className={s.infoTitle}>
              уютное и безопасное пространство для счастливой,
              <span className={s.color}>спокойной и размеренной жизни</span>
            </div>
            <div className={s.text}>
              <span className={s.color}>
                Квартиры от 65 до 356 м2 с чистовой отделкой,
              </span>
              балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
              территориИ.
            </div>
            <div className={s.video}>
              <ProjectVideo title="Видео о проекте" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutSection;
