import styles from './header.module.scss';
import Button from '../button/button';
import linksData from '@/data/links';
import socialsData from '@/data/socials';

interface linksDataProps {
  authClear: string;
  authSubSeason: string;
  authSubMounthly: string;
}

interface socialsDataProps {
  id: number;
  name: string;
  icon: string;
  url: string;
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__body} container`}>
        <div className={styles.logo}>
          <img
            src="/icons/logo.svg"
            alt="Логоип #BoF"
            className={styles.logo__img}
          />
          <h1 className={styles.logo__title}>#BoF</h1>
        </div>
        <ul className={styles.nav}>
          <li className={styles.nav__item}>
            <a href="" className={styles.hover}>
              О проекте
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="" className={styles.hover}>
              Подписка
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="" className={styles.hover}>
              Карта сервера
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="" className={styles.hover}>
              Ответы на вопросы
            </a>
          </li>
          <li className={styles.nav__item}>
            <div className={`${styles.select} ${styles.hover}`}>
              <p className={styles.select__title}>
                Наши ресурсы
              </p>
              <img
                src="/icons/select.svg"
                alt="Select Down"
                className={styles.select__img}
              />
              <ul className={styles.select__wrapper}>
                {socialsData.map(
                  ({
                    id,
                    name,
                    url,
                    icon,
                  }: socialsDataProps) => {
                    return (
                      <li
                        key={id}
                        className={styles.select__item}
                      >
                        <a
                          href={url}
                          className={styles.select__link}
                        >
                          <img
                            src={icon}
                            alt={'Иконка' + name}
                            className={styles.link__img}
                          />
                          <p className={styles.link__text}>
                            {name}
                          </p>
                        </a>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          </li>
        </ul>
        <Button href={linksData.authClear}>Авторизация</Button>
      </div>
    </header>
  );
}
