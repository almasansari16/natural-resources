import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natural Resources™ | Pure Living Hydration & Premium Water Supply",
  description: "Artisanal mountain spring bottled water and automated smart water supply delivery for homes, corporate offices, and bulk industrial needs. Pure, remineralized, sustainable.",
  keywords: ["natural resources", "water supply", "bottled water brand", "mineral water", "5 gallon water delivery", "alkaline water", "pure water company"],
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
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#020b14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
