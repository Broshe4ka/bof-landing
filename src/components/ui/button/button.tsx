import { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({
  href,
  children,
}: ButtonProps) {
  return (
    <>
      <a href={href} className={styles.button}>
        {children}
      </a>
    </>
  );
}
