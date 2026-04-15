import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fana Bilpleie – Bergens beste bilpleie",
    template: "%s | Fana Bilpleie",
  },
  description:
    "Bergen sin mest betrodde bilpleie. Bilvask, keramisk coating, lakkrenovering og båtpleie i Rådal. Gratis lånebil. Book online.",
  keywords: [
    "bilpleie Bergen",
    "bilvask Bergen",
    "keramisk coating Bergen",
    "lakkrenovering Bergen",
    "båtpleie Bergen",
    "bilpleie Rådal",
    "bilpleie Fana",
  ],
  openGraph: {
    title: "Fana Bilpleie – Bergens beste bilpleie",
    description:
      "Bergen sin mest betrodde bilpleie. Bilvask, keramisk coating, lakkrenovering og båtpleie.",
    url: "https://www.fanabilpleie.no",
    siteName: "Fana Bilpleie",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
