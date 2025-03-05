import styles from './welcome.module.scss';

import ButtonDefault from '@/components/ui/button/default/button';
import ButtonTransparent from '@/components/ui/button/transparent/button';

export default function Welcome() {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__content} container`}>
        <div className={styles.content}>
          <h2 className={styles.content__title}>
            Добро пожаловать на #BoF!
          </h2>
          <p className={styles.content__text}>
            Прогрессивный Minecraft сервер с эксклюзивными
            механиками и уникальным геймплеем! Присоединяйся к
            нашему большому и дружному сообществу, где ты можешь
            пустить в ход всю свою фантазию и поделиться ей со
            всеми!
          </p>
          <div className={styles.content__buttons}>
            <ButtonDefault href="#">Подписка</ButtonDefault>
            <ButtonTransparent href="#">
              <img src="/icons/copy.svg" alt="Копировать" />
              Копировать IP
            </ButtonTransparent>
          </div>
          <p className={styles.content__description}>
            Версия игры: Java Edition 1.21.4
          </p>
        </div>
      </div>
      <div className={styles.background}>
        <img
          loading="lazy"
          src="/images/bg.png"
          alt="Задний фон"
          className={styles.background__image}
        />
        <div className={styles.background__shadow} />
      </div>
    </section>
  );
}
