import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from '@widgets/header/ui/Header';
import { AuthProvider } from '@shared/lib/AuthContext';
import {Footer} from "@widgets/footer/ui/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My shop",
  description: "My portfolio shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}  h-full w-full  antialiased`}
    >
      <body className="min-h-full">
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
