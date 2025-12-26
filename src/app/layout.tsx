import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Unit Conversion | Instant & Accurate",
  description: "Fast and precise unit conversions for length, weight, temperature, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9991527274052749" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
