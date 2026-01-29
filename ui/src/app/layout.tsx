import type { Metadata } from "next";
import { AcuminSansRegular } from './_fonts';
import "./globals.scss";

export const metadata: Metadata = {
  title: "Rising Tide Research Foundation",
  description:
    "Rising Tide Research Foundation is a not-for-profit society established to conduct open-source research on electric boat design and to raise public awareness and understanding of clean-marine technologies.",
  icons: "https://rising-tide-research.netlify.app/rising-tide.svg",
  openGraph: {
    images: [
      {
        url: `https://rising-tide-research.netlify.app/preview.png`,
        width: 1200,
        height: 630,
        alt: `Rising Ride Research Foundation logo and drawing of Solander 38`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AcuminSansRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
