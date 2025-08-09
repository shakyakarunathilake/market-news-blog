import type { Metadata } from "next";
import { Noto_Serif, Roboto, Roboto_Mono } from "next/font/google";
import { ToastProvider } from "@/context/ToastContext";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blott Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${roboto.variable} ${robotoMono.variable}`}
    >
      <body className="h-screen w-screen overflow-x-hidden scroll-smooth font-sans antialiased [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-gray-400">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
