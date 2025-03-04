import styles from './faq.module.scss';
import faqData from '@/data/faqData';
import Qa from './qa/qa';

export default function Faq() {
  return (
    <div className={`${styles.faq} section container`}>
      <h2 className="section__title">
        У вас остались вопросы?
      </h2>
      <div className={styles.faq__wrapper}>
        {faqData.map((elem) => (
          <Qa key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
