import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#001478",
};

export const metadata: Metadata = {
  title: "Garur Civil Society — Legal Aid, Education & Public Awareness in Uttarakhand",
  description:
    "Garur Civil Society is a non-profit working in Garur, Bageshwar (Uttarakhand) on legal aid, education, public awareness and health, under #Mission21.",
  openGraph: {
    title: "Garur Civil Society",
    description:
      "An NGO in Garur, Bageshwar, working on legal aid, education, public awareness and health.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
