import styles from './about.module.scss';

import Slider from './slider/slider';
import Info from './info/info';

import { sliderData, infoData } from '@/data';

export default function About() {
  return (
    <section
      id="about"
      className={`${styles.about} container section`}
    >
      <h2 className="section__title">Давайте знакомиться!</h2>

      <div className={styles.about__wrapper}>
        {sliderData.map((slide) => (
          <Slider key={slide.id} {...slide} />
        ))}
        {infoData.map((info) => (
          <Info key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
}
