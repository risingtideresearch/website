import type { Metadata } from "next";
import { AcuminSansLight, AcuminSansRegular } from "./_fonts";
import "./globals.scss";
import Footer from "./components/Footer";
import { fetchHomepage } from "@/sanity/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await fetchHomepage();

  return {
    title: data.title,
    description: data.description,
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/solander-drawing.png" />
        <link rel="alternate" type="application/rss+xml" title="Rising Tide Research Foundation" href="/rss.xml" />
      </head>
      <body className={`${AcuminSansLight.variable} ${AcuminSansRegular.variable}`}>
        {children}
        <Footer/ >
      </body>
    </html>
  );
}
