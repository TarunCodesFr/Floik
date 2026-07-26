import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { HeaderWrapper } from "@/components/header-wrapper";
import { FooterWrapper } from "@/components/footer-wrapper";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Floik",
  description: "Floik is a premium gaming studio transforming Minecraft Bedrock servers into production-ready experiences.",
  icons: {
    icon: "/assets/floik.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Providers>
          <HeaderWrapper />
          <main className="grow">
            {children}
          </main>
          <FooterWrapper />
        </Providers>
      </body>
    </html>
  );
}
