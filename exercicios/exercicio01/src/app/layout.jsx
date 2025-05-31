import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cursar",
  description: "Site de cursos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header className="bg-blue-700 p-5 text-amber-50 text-center">
          <h2>
            Site dos cursos
          </h2>
          <nav className="font-thin">
            <Link href="/"> Inicio </Link>
            <Link href="courses">Cursos </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
