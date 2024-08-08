import type { Metadata } from "next";
import { inter, inknut } from "./fonts";
import { cn } from "@/lib/utils"
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-inter", inter.variable, "font-inknut", inknut.variable)}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
