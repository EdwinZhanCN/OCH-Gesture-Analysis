import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gesture Research",
  description: "Template research site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Nav />
          <main className="container mx-auto max-w-3xl px-4 py-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
