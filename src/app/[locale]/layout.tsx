import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/ui/Nav/Nav";
import "@fontsource/montserrat";

export const metadata: Metadata = {
  title: "Laszlo Caballero",
  description: "Portfolio of Laszlo Caballero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-primary-black flex-col items-center text-white flex w-full min-h-screen justify-center`}
      >
        <Nav />

        {children}
      </body>
    </html>
  );
}
