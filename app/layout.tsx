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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-6`}
      >
        <header className="text-3xl font-bold mb-6 text-primary border-b border-primary">
          <Link href="/">Store</Link>
        </header>
        <main className="max-w-7xl mx-auto "> {children}</main>
      </body>
    </html>
  );
}
