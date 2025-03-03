import infoData from '@/data/infoData';
import styles from './info.module.scss';

interface infoDataProps {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  text: string[];
  image: string;
}

export default function Info(props: infoDataProps) {
  return (
    <>
      <section className={`${styles.info} container`}>
        <div className={styles.text}>
          <img
            src={props.icon}
            alt="Иконка"
            className={styles.text__icon}
          />
          <div className={styles.text__info}>
            <h2 className="title">{props.title}</h2>
            <h2 className="subtitle">{props.subtitle}</h2>
            {props.text.map((text, index) => (
              <p className="text" key={index}>
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <img
            src={props.image}
            alt="Превью"
            className={styles.image__picture}
          />
          <div className={styles.image__bg} />
        </div>
      </section>
    </>
  );
}
