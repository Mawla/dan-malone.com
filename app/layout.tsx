import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import { satoshi, lora } from "@/config/fonts";

// Import global styles last
import "./globals.css";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans min-h-screen text-foreground antialiased">
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
