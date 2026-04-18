import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Запуск 3.0 | Трилогия запуска",
  description:
    "3-дневная трилогия запуска: продукт, продажи и масштабирование в формате прохождения с артефактами.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
