import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GT Abatement Inc.",
    template: "%s | GT Abatement Inc.",
  },
  description:
    "GT Abatement Inc. provides hazardous material abatement, designated substance testing and surveys, bin rentals, and on-site consultation across the GTA and Ontario.",
  metadataBase: new URL("https://www.gtabatement.com"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
