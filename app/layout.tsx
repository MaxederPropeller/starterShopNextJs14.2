import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "./shop/helpers/context/cartContex";
import { ThemeProvider } from "@/lib/ThemeProvider";
import Footer from "@/components/footer/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Starter",
  description: "A starter for Next.js with TypeScript, Tailwind CSS, and ESLint.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster 
            position="bottom-right" 
          />
        </CartProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
