import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import CartProvider from "./provider";
import ShoppingCartModal from "@/components/CartModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OkShopify",
  description: "Your first stop for interior decor and ornaments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full `}
      >  <CartProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <NavBar/>
          <ShoppingCartModal />
          {children}
          <Footer/>
        </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
