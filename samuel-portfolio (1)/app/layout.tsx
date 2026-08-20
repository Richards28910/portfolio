import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Samuel Richard — Affiliate & Performance Marketing, Tracking Infrastructure",
  description:
    "Performance marketer who runs the campaigns and builds the pipes: Meta & Taboola buying, S2S tracking, postbacks, RedTrack/Voluum, and a self-built affiliate platform.",
  metadataBase: new URL("https://samuelrichard.vercel.app"),
  openGraph: {
    title: "Samuel Richard — I run the campaigns and build the pipes.",
    description:
      "Affiliate & performance marketing specialist with hands-on tracking infrastructure: S2S postbacks, RedTrack, Voluum, Everflow — and a full affiliate platform built from scratch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&family=Spline+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
