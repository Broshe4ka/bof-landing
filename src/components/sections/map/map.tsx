'use client';

import styles from './map.module.scss';

import { useState } from 'react';

export default function Map() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      id="map"
      className={`${styles.map} section container`}
    >
      <h2 className="section__title">
        Оцените постройки наших игроков прямо из браузера!
      </h2>
      <div
        className={styles.wrapper}
        onMouseLeave={() => setIsActive(false)}
      >
        <div
          className={`${styles.overlay} ${
            isActive ? styles.hidden : ''
          }`}
          onClick={() => setIsActive(true)}
        >
          <span>Кликните чтобы начать взаимодействие</span>
        </div>
        <iframe
          loading="lazy"
          title="BlueMap - интерактивная карта"
          className={`${styles.mapIframe} ${
            isActive ? styles.isActive : ''
          }`}
          src="http://localhost:8100"
          allowFullScreen
        />
      </div>
      <div
        className="light"
        style={{ left: '-50%', top: '-5%' }}
      ></div>
    </section>
  );
}
