import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"; // Use react-hot-toast directly

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemini Clone - Chat Bot Frontend",
  description: "A frontend clone of the AI Chat Bots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
       <link rel="icon" type="image/svg+xml" href="/assets/botmsg.svg" />
        {/* Preload fonts properly */}
        <link
          rel="preload"
          href="/_next/static/media/e4af272ccee01ff0-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}