import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import { Montserrat } from "next/font/google";
import "@/app/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Home Technologies - Smart Home Integration Since 1980",
  description:
    "Expert smart home integration, audio/video systems, lighting, shades, networking, and outdoor living solutions. Serving Chicagoland since 1980 with DHTcare support.",
  keywords:
    "smart home, home automation, audio video, lighting, shades, networking, outdoor living, residential, commercial, Chicago, Palatine",
  authors: [{ name: "Digital Home Technologies" }],
  creator: "Digital Home Technologies",
  publisher: "Digital Home Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adigitalhome.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Home Technologies - Smart Home Integration Since 1980",
    description:
      "Expert smart home integration, audio/video systems, lighting, shades, networking, and outdoor living solutions. Serving Chicagoland since 1980.",
    url: "https://adigitalhome.com",
    siteName: "Digital Home Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Home Technologies - Smart Home Integration Since 1980",
    description:
      "Expert smart home integration, audio/video systems, lighting, shades, networking, and outdoor living solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
