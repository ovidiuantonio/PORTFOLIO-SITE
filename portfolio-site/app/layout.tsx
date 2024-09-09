import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
import NavBarMobile from "@/components/ui/navbar-mobile";
import Footer from "@/components/ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

console.log(SpeedInsights)

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Soul Remesher",
  description: "3D Generalist Artist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:max-w-[100rem] m-auto max-w-[100vw]`}
      >
        <NavBar></NavBar>
        <NavBarMobile></NavBarMobile>
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
