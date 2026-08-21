import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Richard - Affiliate & Performance Marketing, Tracking Infrastructure",
  description: "Performance marketing, affiliate operations and tracking infrastructure across paid acquisition, S2S postbacks and affiliate platforms.",
  metadataBase: new URL("https://samuelrichard.vercel.app"),
  openGraph: { title: "Samuel Richard - I run the campaigns and build the pipes.", description: "Affiliate and performance marketing specialist with hands-on tracking infrastructure.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&family=Spline+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
