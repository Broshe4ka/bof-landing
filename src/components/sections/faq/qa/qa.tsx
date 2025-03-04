'use client';

import { useState } from 'react';
import styles from './qa.module.scss';

interface faqDataProps {
  id: number;
  question: string;
  answer: string;
}

export default function Qa(props: faqDataProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.qa} ${
        isOpen ? styles.open : styles.close
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.qa__title}
      >
        <h3>{props.question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <p
        className={`${styles.qa__text} ${
          isOpen ? styles.open__content : ''
        } `}
        dangerouslySetInnerHTML={{ __html: props.answer }}
      />
    </div>
  );
}
