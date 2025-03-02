import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../styles/global.scss";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "#BoF",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunitoSans.variable}`}>{children}</body>
    </html>
  );
}
