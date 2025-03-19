'use client';

import styles from './header.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import ButtonDefault from '../button/default/button';
import Burger from './burger/burger';

import { linksData, navData, socialsData } from '@/data';
import { NavData, SocialsData } from '@/types';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    isOpen
      ? document.body.classList.add(styles['no-scroll'])
      : document.body.classList.remove(styles['no-scroll']);

    return () => {
      document.body.classList.remove(styles['no-scroll']);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollToChange = 120;
      setIsScrolled(scrollPosition > scrollToChange);
    };
    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${isScrolled ? styles.scrolled : ''} ${
          styles.header
        }`}
      >
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        <nav className={`${styles.header__body} container`}>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#welcome"
            className={styles.logo}
          >
            <Image
              width={40}
              height={40}
              priority
              src="/icons/logo.svg"
              alt="Логоип #BoF"
              className={styles.logo__img}
            />
            <h1 className={styles.logo__title}>#BoF</h1>
          </Link>
          <ul className={styles.nav}>
            {navData.map((props: NavData) => (
              <li key={props.id} className={styles.nav__item}>
                <Link href={props.url} className={styles.hover}>
                  {props.name}
                </Link>
              </li>
            ))}
            <li className={styles.nav__item}>
              <div
                className={`${styles.select} ${styles.hover}`}
              >
                <p className={styles.select__title}>
                  Наши ресурсы
                </p>
                <Image
                  width={16}
                  height={16}
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
                          <Image
                            width={20}
                            height={20}
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
