import type { Metadata } from "next";
import { AcuminSansRegular } from './_fonts';
import "./globals.scss";

export const metadata: Metadata = {
  title: "Rising Tide Research Foundation",
  description:
    "Rising Tide Research Foundation is a not-for-profit society established to conduct open-source research advancing electric boat design and to raise public awareness and understanding of clean-marine technologies.",
  icons: "https://solander38.netlify.app/rising-tide.svg",
  // openGraph: {
  //   images: [
  //     {
  //       url: `https://solander38.netlify.app/preview.solander-38.png`,
  //       width: 1600,
  //       height: 840,
  //       alt: `Model of Solander 38`,
  //     },
  //   ],
  // },
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
