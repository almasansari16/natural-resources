import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natural Resources™ | Pure Drinking Mineral Water & Doorstep Supply (Pakistan)",
  description: "Refresh Your Moment - Pure Hydration Pure Elegance. Pakistan's trusted mineral water brand. 500ml, 1.5L bottles aur 19-Liter dispenser delivery for homes & offices.",
  keywords: [
    "natural resources water",
    "mineral water pakistan",
    "19 liter water delivery lahore karachi",
    "pure drinking water",
    "water supply company",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
