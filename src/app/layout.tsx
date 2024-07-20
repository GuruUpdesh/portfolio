import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    sora.className,
                    "flex flex-col items-center contain-content",
                )}
            >
                {children}
            </body>
            <Analytics />
        </html>
    );
}
