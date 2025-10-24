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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
