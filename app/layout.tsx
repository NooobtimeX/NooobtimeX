import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nooobtimex.me"),
  title: {
    default: "Portfolio | Wongsaphat Puangsorn",
    template: "%s | Wongsaphat Puangsorn",
  },
  authors: [{ name: "Wongsaphat Puangsorn", url: "https://nooobtimex.me" }],
  creator: "Wongsaphat Puangsorn",
  publisher: "Wongsaphat Puangsorn",
  description:
    "Portfolio | Wongsaphat Puangsorn - Specializing in modern web development, I turn ideas into seamless digital affiliations by building robust web applications using the latest abilities.",
  keywords: [
    "Wongsaphat Puangsorn",
    "NooobtimeX",
    "Thammasat University",
    "Software Developer",
    "Thailand",
    "Portfolio",
    "Resume",
    "Frontend",
    "Fullstack",
    "Web Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nooobtimex.me",
    title: "Wongsaphat Puangsorn - Portfolio",
    description:
      "Specializing in modern web development, I turn ideas into seamless digital affiliations by building robust web applications.",
    siteName: "Wongsaphat Puangsorn Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We should probably add an OG image later if it doesn't exist, but referencing it here is good practice
        width: 1200,
        height: 630,
        alt: "Wongsaphat Puangsorn Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wongsaphat Puangsorn - Portfolio",
    description:
      "Specializing in modern web development, I turn ideas into seamless digital affiliations by building robust web applications.",
    creator: "@NooobtimeX", // Assuming this handle based on github, can be updated
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    google: "KiAn5R5UAuZgmwSS_KpMOO2FIRmt-39QIKrHKXrAOL8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-5PVXPTWP" />
      <body
        className={`${inter.variable} ${bangers.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-white`}
      >
        {/* Global Comic Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none comic-texture opacity-30 mix-blend-overlay"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
