import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabarinathan & Mythili - Wedding Invitation",
  description: "Together with our families, we invite you to celebrate our wedding",
  icons: {
    icon: "/images/sm-logo.png",
    apple: "/images/sm-logo.png",
  },
  openGraph: {
    title: "Sabarinathan & Mythili - Wedding Invitation",
    description: "Together with our families, we invite you to celebrate our wedding",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sabarinathan & Mythili Wedding",
      },
    ],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#8ECDF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancingScript.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
