import styles from './burger.module.scss';

import ButtonDefault from '../../button/default/button';

import { linksData, navData, socialsData } from '@/data';
import { NavData, SocialsData } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Burger({
  isOpen,
  setIsOpen,
}: BurgerProps) {
  return (
    <div
      onClick={() => setIsOpen(false)}
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
              <Link
                onClick={() => setIsOpen(false)}
                href={props.url}
                className={styles.link}
              >
                {props.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.socials}>
          {/* Socials */}
          {socialsData.map((props: SocialsData) => (
            <li key={props.id}>
              <a href={props.url}>
                <Image
                  width={32}
                  height={32}
                  src={props.icon}
                  alt={'Логотип ' + props.name}
                  className={styles.socials__img}
                />
              </a>
            </li>
          ))}
        </ul>
        <div
          className="light"
          style={{
            right: '-50%',
            top: '-50%',
            width: '64rem',
            height: '64rem',
          }}
        ></div>
      </nav>
    </div>
  );
}
