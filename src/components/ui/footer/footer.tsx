import styles from './footer.module.scss';

import Link from 'next/link';

import { socialsData } from '@/data';
import { SocialsData } from '@/types';

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__header}>
        <div className={styles.footer__logo}>
          <img
            src="/icons/logo.svg"
            alt=""
            className={styles.logo}
          />
          {/* Добавить ссылку на почту */}
          <a href="№">Контакты</a>
        </div>
        <ul className={styles.footer__nav}>
          <li>
            <Link href="#" className={styles.link}>
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link}>
              Пользовательское соглашение
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link}>
              Правила проекта
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          {socialsData.map((props: SocialsData) => {
            return (
              <li key={props.id}>
                <a href={props.url}>
                  <img
                    src={props.icon}
                    alt={'Иконка' + props.name}
                    className={styles.socials__img}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className={styles.footer__info}>
        Not an official Minecraft product. We are in no way
        affiliated with or endorsed by Mojang Synergies AB,
        Microsoft Corporation or other rightsholders.
      </p>
    </footer>
  );
}
