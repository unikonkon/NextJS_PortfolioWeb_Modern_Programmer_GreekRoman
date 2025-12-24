import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display font - Roman inscriptions style
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Heading font - Elegant classical serif
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Body font - Readable classical serif
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Code font - Modern monospace
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Suthep Jantawee | Full Stack Developer | Digital Renaissance",
  description: "Ave, Developer! Full Stack Developer with III+ years of experience. Building digital temples with React, Next.js, TypeScript, and modern web technologies. Veni, Vidi, Codi.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Bangkok", "Portfolio", "Digital Renaissance"],
  authors: [{ name: "Suthep Jantawee" }],
  openGraph: {
    title: "Suthep Jantawee | Full Stack Developer",
    description: "Full Stack Developer crafting digital empires with ancient wisdom and modern code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${lora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
