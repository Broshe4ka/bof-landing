'use client';

import Image from 'next/image';
import styles from './button.module.scss';

import { ReactNode, useState } from 'react';

interface ButtonProps {
  content: string;
  children: ReactNode;
}

export default function ButtonCopy({
  content,
  children,
}: ButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Ошибка при копировании:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`${isCopied ? styles.copied : ''} ${
        styles.button
      }`}
    >
      <Image
        width={20}
        height={20}
        src="/icons/copy.svg"
        alt="Копировать"
      />
      {isCopied ? ` IP Скопирован!` : children}
    </button>
  );
}
