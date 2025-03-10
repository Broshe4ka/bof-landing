import styles from './footer.module.scss';

import Link from 'next/link';

import { socialsData } from '@/data';
import { SocialsData } from '@/types';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__header}>
        <div className={styles.footer__logo}>
          <Image
            width={40}
            height={40}
            src="/icons/logo.svg"
            alt=""
            className={styles.logo}
          />
          {/* Добавить ссылку на почту */}
          <a href="mailto:support@bofgg.ru">Контакты</a>
        </div>
        <ul className={styles.footer__nav}>
          <li>
            <Link
              href="/privacy-policy"
              className={styles.link}
            >
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link href="/terms-of-use" className={styles.link}>
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
                  <Image
                    width={48}
                    height={48}
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
