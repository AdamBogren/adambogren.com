import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const description =
  "Adam Bogren combines Talent Acquisition expertise with AI, automation, data, and process design to build practical operating systems.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: {
      default: "Adam Bogren — Talent Acquisition, AI & Systems",
      template: "%s | Adam Bogren",
    },
    description,
    keywords: [
      "Adam Bogren",
      "Talent Acquisition Leader",
      "Talent Acquisition Operations",
      "Recruiting Strategy",
      "Hiring Transformation",
      "AI Enablement",
      "Workflow Automation",
      "Systems Thinking",
      "Nashville",
    ],
    authors: [{ name: "Adam Bogren" }],
    creator: "Adam Bogren",
    openGraph: {
      title: "Adam Bogren — I build practical operating systems.",
      description:
        "Talent Acquisition expertise at the intersection of AI, automation, data, and process design.",
      url: "https://adambogren.com",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Adam Bogren — Talent Acquisition, AI, automation, and systems thinking.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Adam Bogren — Talent Acquisition, AI & Systems",
      description: "I build practical operating systems.",
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: { canonical: "https://adambogren.com" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe7" },
    { media: "(prefers-color-scheme: dark)", color: "#102b27" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
