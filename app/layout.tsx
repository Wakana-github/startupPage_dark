import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Components/Navbar/ResponsiveNav";
import Footer from "./Components/Footer/page";
import ScrollToTop from "./Components/Helper/ScrollToTop";

const font = Rethink_Sans({
  weight: ['400', '500', '600', '700','800'],
  subsets:['latin']
})


export const metadata: Metadata = {
  title: "Statup landing page",
  description: "Statup landing page using Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
