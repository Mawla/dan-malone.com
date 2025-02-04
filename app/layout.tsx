import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import "./globals.css";
import { satoshi, lora } from "@/app/config/fonts";

// Get base metadata from home page
export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata();
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${satoshi.variable} ${lora.variable}`}
    >
      <body className="font-sans min-h-screen bg-background text-foreground antialiased">
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
