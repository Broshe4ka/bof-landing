import styles from './subs.module.scss';
import Sub from './sub/sub';
import subsData from '@/data/subsData';

export default function Subs() {
  return (
    <section className={`${styles.subs} section container`}>
      <h2 className="section__title">
        Выберите свой вариант подписки!
      </h2>

      <div className={styles.subs__wrapper}>
        {subsData.map((sub) => (
          <Sub key={sub.id} {...sub} />
        ))}
      </div>
    </section>
  );
}
