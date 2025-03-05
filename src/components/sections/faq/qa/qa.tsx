'use client';

import styles from './qa.module.scss';

import { useState } from 'react';

import { FaqDataProps } from '@/types';

export default function Qa(props: FaqDataProps) {
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
