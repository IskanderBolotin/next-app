import MainBanner from "@/components/mainBanner/mainBanner";
import AboutSection from "@/components/home/aboutSection/aboutSection";
import React from "react";
import Image from "next/image";
import s from "./page.module.scss";


const Home: React.FC = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.banner}>
          <div className="container">
            <MainBanner
              src="/images/main-banner.jpg"
              alt="Main Banner"
              quality={100}
              fill
              priority
            />
          </div>
        </div>
        <div className="container">
          <div className={s.titleLine}>
            <h1 className={s.mainTitle}>
              Дом бизнес-класса <br />
              для ценителей роскоши
            </h1>
            <div className={s.image}>
              <div className={s.logo}>
                <div className={s.logoInner}>
                  <Image
                    src="/images/INCHAPIN.png"
                    alt="INCHAPIN"
                    quality={100}
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <div className="container">
          <AboutSection />
        </div>
      </section>
      
    </>
  );
};
export default Home;
