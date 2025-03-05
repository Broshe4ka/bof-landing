import styles from './burger.module.scss';

import ButtonDefault from '../../button/default/button';

import { linksData, navData, socialsData } from '@/data';
import { NavData, SocialsData } from '@/types';

interface BurgerProps {
  isOpen: boolean;
}

export default function Burger({ isOpen }: BurgerProps) {
  return (
    <div
      className={`${styles.burger}  
      ${isOpen ? styles.open : ''} container`}
    >
      <nav className={styles.burger__wrapper}>
        <ButtonDefault href={linksData.authClear}>
          Авторизация
        </ButtonDefault>
        <ul className={styles.links}>
          {/* Inside link */}
          {navData.map((props: NavData) => (
            <li key={props.id}>
              <a href={props.url} className={styles.link}>
                {props.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.socials}>
          {/* Socials */}
          {socialsData.map((props: SocialsData) => (
            <li key={props.id}>
              <a href={props.url}>
                <img
                  src={props.icon}
                  alt={'Логотип ' + props.name}
                  className={styles.socials__img}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
