import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zamora Marketing Platform | CRM + Automation + AI",
  description:
    "One platform to capture leads, automate follow-up, and help your business close more deals.",
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
