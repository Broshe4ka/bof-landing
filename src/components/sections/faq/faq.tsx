import styles from './faq.module.scss';

import Qa from './qa/qa';

import { faqData } from '@/data';

export default function Faq() {
  return (
    <section
      id="faq"
      className={`${styles.faq} section container`}
    >
      <h2 className="section__title">
        У вас остались вопросы?
      </h2>
      <div className={styles.faq__wrapper}>
        {faqData.map((elem) => (
          <Qa key={elem.id} {...elem} />
        ))}
      </div>
      <div
        className="light"
        style={{ right: '-50%', top: '-55%' }}
      ></div>
    </section>
  );
}
