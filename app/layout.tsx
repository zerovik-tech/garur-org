import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#001478",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://garur.org"),
  title: {
    default: "Garur Civil Society — Legal Aid, Education & Public Awareness in Uttarakhand",
    template: "%s · Garur Civil Society",
  },
  description:
    "Garur Civil Society is a grassroots non-profit in Garur, Bageshwar (Uttarakhand) working on legal aid, education, public awareness, health and migrant connection for the people of the Himalayan hills. Founded 14 April 2016.",
  keywords: [
    "Garur Civil Society",
    "Garur",
    "Bageshwar",
    "Uttarakhand",
    "NGO",
    "hill district",
    "legal aid",
    "education",
    "public awareness",
    "health",
    "migrant connection",
    "free medical camp",
    "Garur Civil Library",
    "Dilli Darbar Palace",
    "Darshani Garur",
    "D.K. Joshi",
    "Mission21",
    "Vyasan Mukt",
    "addiction-free",
  ],
  authors: [{ name: "Garur Civil Society" }],
  creator: "Garur Civil Society",
  publisher: "Garur Civil Society",
  applicationName: "Garur Civil Society",
  category: "Non-profit",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Garur Civil Society",
    title: "Garur Civil Society",
    description:
      "A grassroots non-profit in Garur, Bageshwar (Uttarakhand) working on legal aid, education, public awareness, health and migrant connection. Founded 14 April 2016.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Garur Civil Society — Legal Aid, Education, Public Awareness, Health & Migrant Connection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garur Civil Society",
    description:
      "A grassroots non-profit in Garur, Bageshwar (Uttarakhand) working on legal aid, education, public awareness, health and migrant connection. Founded 14 April 2016.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="font-sans">{children}</body>
      </html>
    );
}
