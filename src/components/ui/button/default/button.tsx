import { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function ButtonDefault(props: ButtonProps) {
  return (
    <>
      <a href={props.href} className={styles.button}>
        {props.children}
      </a>
    </>
  );
}
