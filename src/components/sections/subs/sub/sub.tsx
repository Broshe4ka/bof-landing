import styles from './sub.module.scss';

import ButtonDefault from '@/components/ui/button/default/button';

import { SubProps } from '@/types';

export default function Sub(props: SubProps) {
  return (
    <div
      style={{ background: props.bg }}
      className={styles.sub}
    >
      <div className={styles.sub__wrapper}>
        <div className={styles.sub__info}>
          <h3 className={styles.info__title}>
            Подписка на {props.period}
          </h3>
          <h4 className={styles.info__price}>
            {props.price} ₽ / {props.period}
          </h4>
          <ul className={styles.info__items}>
            {props.fetureList.map((feature, index) => (
              <li key={index} className={styles.info__item}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <ButtonDefault href={props.url}>
          Приобрести
        </ButtonDefault>
        <img
          src={props.image}
          alt="Маскот"
          className={styles.sub__img}
        />
      </div>
    </div>
  );
}
