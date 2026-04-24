import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { goatcounterEndpoint } from "@/data/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siqi Li - Postdoctoral Researcher, Tsinghua University",
  description:
    "Personal academic homepage of Siqi Li, Postdoctoral Researcher at the School of Software, Tsinghua University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {goatcounterEndpoint && (
          <Script
            data-goatcounter={goatcounterEndpoint}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
        <LanguageProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
