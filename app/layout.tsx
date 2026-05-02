import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SBS Construction & Consultancy — Building Spaces. Engineering Trust.",
  description:
    "SBS Construction and Consultancy delivers end-to-end construction and expert consultancy services for residential, commercial, and infrastructure projects.",
  openGraph: {
    title: "SBS Construction & Consultancy",
    description:
      "End-to-end construction and expert consultancy for residential, commercial, and infrastructure projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="bg-brand-light text-brand-dark min-h-full flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
