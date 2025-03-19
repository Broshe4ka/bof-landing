import styles from './welcome.module.scss';

import ButtonDefault from '@/components/ui/button/default/button';
import ButtonCopy from '@/components/ui/button/copy/button';

export default function Welcome() {
  return (
    <section id="welcome" className={styles.section}>
      <div className={`${styles.section__content} container`}>
        <div className={styles.content}>
          <h2 className={styles.content__title}>
            Добро пожаловать на #BoF!
          </h2>
          <p className={styles.content__text}>
            Прогрессивный Minecraft сервер с эксклюзивными
            механиками и уникальным геймплеем! Присоединяйся к
            нашему большому и дружному сообществу, где ты можешь
            пустить в ход всю свою фантазию и поделиться своими
            творениями со всеми!
          </p>
          <div className={styles.content__buttons}>
            <ButtonDefault href="#">Подписка</ButtonDefault>
            <ButtonCopy content="127.0.0.1:25565">
              Копировать IP
            </ButtonCopy>
          </div>
          <p className={styles.content__description}>
            Версия игры: Java Edition 1.21.4
          </p>
        </div>
      </div>
      <div className={styles.background}>
        <img
          src="/images/bg.webp"
          alt="Задний фон"
          className={styles.background__image}
        />
        <div className={styles.background__shadow} />
      </div>
    </section>
  );
}
