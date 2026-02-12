import type { Metadata } from "next";
import "./globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Developer Portfolio",
    default: "Mervin A - Student",
  },
  description: "Building intelligent software with a focus on structure and scalability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${readexPro.className} antialiased`} suppressHydrationWarning>
        <NuqsAdapter>
          <ThemeProvider attribute="class">
            <Toaster />
            {children}
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
