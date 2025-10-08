import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Theme } from "@radix-ui/themes";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ConditionalFooter from "./ConditionalFooter";
import DarkModeProvider from "@/context/DarkModeContext";
import {Toaster} from 'sonner'
import Provider from "@/context/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuj",
  description: "Anuj Patel is a Full Stack Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
  authors: [{ name: "Anuj Patel" }],
  openGraph: {
    title: "Anuj",
    description: "",
    siteName: "Anuj",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
      <DarkModeProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none bg-white dark:bg-black`}
        >
          <Toaster position="bottom-right"/>
          <Theme className="dark:!bg-black">
            <SmoothCursor/>
        <NavBar/>
        {children}
        <ConditionalFooter/>
          </Theme>
      </body>
      </DarkModeProvider>
      </Provider>
    </html>
  );
}
