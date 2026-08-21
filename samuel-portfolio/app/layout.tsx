import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Richard — Performance Marketing, Affiliate Operations & Tracking Infrastructure",
  description:
    "Lagos-based performance marketing and business development professional. Scaled CPA/CPL offers on Taboola and Meta to $100k+ profit in six months, runs full S2S tracking stacks, and ships his own software.",
  metadataBase: new URL("https://samuelrichard.vercel.app"),
  openGraph: {
    title: "Samuel Richard — I turn paid traffic into profit, and build the systems that prove it.",
    description:
      "Performance marketing · Affiliate operations · Tracking infrastructure · Business development",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
