import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lalezar } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme-provider";

const inter = Inter({ subsets: ["latin"] });
const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],

  variable: "--font-lalezar",
});

export const metadata: Metadata = {
  title: "Rexcode",
  description: "web design team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html   lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale-1"/>
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
      </head>
      
      <body className={lalezar.variable}>
      <ThemeProvider attribute="class"
       defaultTheme="dark"
       enableSystem
      disableTransitionOnChange>
      <main  className=" dark:bg-[#09021A] bg-[#eeeafa]   ">
    
        
        {children}
      </main>
     </ThemeProvider>
       

        <Footer/>
      </body>
      
    </html>
  );
}
