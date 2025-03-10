import { InfoDataProps } from '@/types';

import styles from './info.module.scss';
import Image from 'next/image';

export default function Info(props: InfoDataProps) {
  return (
    <>
      <section className={styles.info}>
        <div className={styles.text}>
          <Image
            width={48}
            height={48}
            src={props.icon}
            alt="Иконка"
            className={styles.text__icon}
          />
          <div className={styles.text__info}>
            <h2 className="title">{props.title}</h2>
            <h2 className="subtitle">{props.subtitle}</h2>
            {props.text.map((text, index) => (
              <p
                className="text"
                key={index}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <Image
            width={1024}
            height={1024}
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
