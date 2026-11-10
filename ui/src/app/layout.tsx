import type { Metadata } from "next";
import { AcuminSansLight, AcuminSansRegular } from "./_fonts";
import "./globals.scss";
import Footer from "./components/Footer";
import { fetchHomepage } from "@/sanity/lib/utils";
import { SITE_URL } from "./util";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await fetchHomepage();

  return {
    metadataBase: new URL(SITE_URL),
    title: data.title,
    description: data.description,
    icons: "/ess-icon.svg",
    openGraph: {
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: `Electric Shipwrights Society logo and drawing of Solander 38`,
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
        <link rel="alternate" type="application/rss+xml" title="Electric Shipwrights Society" href="/rss.xml" />
      </head>
      <body className={`${AcuminSansLight.variable} ${AcuminSansRegular.variable}`}>
        {children}
        <Footer/ >
      </body>
    </html>
  );
}
