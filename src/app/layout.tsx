import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@src/components/Footer";
import { Navbar } from "@src/components/Navbar";

export const metadata: Metadata = {
  title: "Sanjay Portfolio",
  description: "Portfolio of Sanjay Kumar S R",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Sanjay Kumar S R",
    "Frontend Developer",
    "Application Development Engineer",
    "React JS Developer",
    "UI Developer",
    "React JS",
    "Next.JS",
  ],
  authors: [
    {
      name: "Sanjay Kumar S R",
      url: "https://sanjay-portfolio-delta.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
