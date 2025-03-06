import styles from './styles/not-found.module.scss';

export default function NotFound() {
  return (
    <div className={`${styles.error} container`}>
      <div className={styles.error__wrapper}>
        <span className={styles.error__text}>
          Ошибка <strong>404</strong>
        </span>
        <span className={styles.error__text}>
          Не найдено. =(
        </span>
      </div>
      <img
        className={styles.error__img}
        src="/images/sniffer.webp"
        alt=""
      />
    </div>
  );
}
