import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Richard - Performance Marketing & Ad-Tech",
  description: "Samuel Richard turns paid traffic into profit and builds the systems that prove it.",
  metadataBase: new URL("https://samuelrichard.vercel.app"),
  openGraph: { title: "Samuel Richard - Performance Marketing & Ad-Tech", description: "Performance marketing, affiliate operations and tracking infrastructure.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
