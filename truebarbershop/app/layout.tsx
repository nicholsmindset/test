import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The True Barbershop SG — Walk In With Trust, Walk Out With Confidence",
  description:
    "Bedok's premier community barbershop. 5.0★ on Fresha · 148 reviews · Senior barbers Afiq, Mush, Yan, Simple, Jufri & Aiman. Halal-friendly. Book now.",
  openGraph: {
    title: "The True Barbershop SG",
    description:
      "Walk in with trust and walk out with confidence. Bedok's top-rated barbershop.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-[#f0ece0] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
