import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "SOVEREIGN_INTEL | Ruslanas Fiodorovas",
  description:
    "Strateginės nekilnojamojo turto operacijos. Turto inventorius, rinkos žvalgyba, konsultacijos ir vertinimas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className={`${inter.variable} dark h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"
        />
      </head>
      <body className="min-h-full flex flex-col bg-lowest">{children}</body>
    </html>
  );
}
