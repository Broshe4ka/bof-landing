import styles from './burger.module.scss';

import ButtonDefault from '../../button/default/button';

export default function Burger(isOpen: boolean) {
  return (
    <div
      className={`${styles.burger}  ${
        isOpen ? styles.open : ''
      }container`}
    >
      <nav className={styles.burger__wrapper}>
        <ul className={styles.links}>
          {/* Inside link */}

          <li>
            <a href="" className={styles.link}></a>
          </li>
        </ul>
        <ul className={styles.socials}>
          {/* Socials */}

          <li>
            <a href="">
              <img
                src=""
                alt=""
                className={styles.social__img}
              />
            </a>
          </li>
        </ul>
        <ButtonDefault href={'./'}>Авторизация</ButtonDefault>
      </nav>
    </div>
  );
}
