'use client';

import styles from './header.module.scss';
import Link from 'next/link';
import { useState } from 'react';

import ButtonDefault from '../button/default/button';
import Burger from './burger/burger';

import { linksData, navData, socialsData } from '@/data';
import { NavData, SocialsData } from '@/types';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Burger isOpen={isOpen} />
        <nav className={`${styles.header__body} container`}>
          <Link href="/" className={styles.logo}>
            <img
              src="/icons/logo.svg"
              alt="Логоип #BoF"
              className={styles.logo__img}
            />
            <h1 className={styles.logo__title}>#BoF</h1>
          </Link>
          <ul className={styles.nav}>
            {navData.map((props: NavData) => (
              <li key={props.id} className={styles.nav__item}>
                <a href={props.url} className={styles.hover}>
                  {props.name}
                </a>
              </li>
            ))}
            <li className={styles.nav__item}>
              <div
                className={`${styles.select} ${styles.hover}`}
              >
                <p className={styles.select__title}>
                  Наши ресурсы
                </p>
                <img
                  src="/icons/select.svg"
                  alt="Select Down"
                  className={styles.select__img}
                />
                <ul className={styles.select__wrapper}>
                  {socialsData.map((props: SocialsData) => {
                    return (
                      <li
                        key={props.id}
                        className={styles.select__item}
                      >
                        <a
                          href={props.url}
                          className={styles.select__link}
                        >
                          <img
                            src={props.icon}
                            alt={'Иконка' + props.name}
                            className={styles.link__img}
                          />
                          <p className={styles.link__text}>
                            {props.name}
                          </p>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
          <div className={styles.header__buttons}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${styles.burger} ${
                isOpen ? styles.open : ''
              }`}
            >
              <span className={styles.burger__row}></span>
              <span className={styles.burger__row}></span>
              <span className={styles.burger__row}></span>
            </button>
            <ButtonDefault href={linksData.authClear}>
              Авторизация
            </ButtonDefault>
          </div>
        </nav>
      </header>
    </>
  );
}
