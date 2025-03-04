import styles from './button.module.scss';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function ButtonTransparent(props: ButtonProps) {
  return (
    <a href={props.href} className={styles.button}>
      {props.children}
    </a>
  );
}
