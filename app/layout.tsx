import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaq | Influential",
  description: "A multipage Next.js + Tailwind site about Shaq and why he’s influential to me.",
  icons: {
    icon: "/favicon-from-image.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">
        <Navbar />
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        
      </body>
    </html>
  );
}
