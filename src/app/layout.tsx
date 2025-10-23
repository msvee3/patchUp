import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PatchUp - DC Issue Tracking",
  description: "Data Center Issue Logging and Maintenance System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
