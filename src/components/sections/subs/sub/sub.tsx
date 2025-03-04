import styles from './sub.module.scss';
import Button from '@/components/ui/button/button';

interface subProps {
  id: number;
  period: string;
  price: number | string;
  fetureList: string[];
  url: string;
  image: string;
  bg: string;
}

export default function Sub(props: subProps) {
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
        <Button href={props.url}>Приобрести</Button>
        <img
          src={props.image}
          alt="Маскот"
          className={styles.sub__img}
        />
      </div>
    </div>
  );
}
