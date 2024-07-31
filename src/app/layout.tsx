import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/ThemeProvider";

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
        <html lang="en" className="scroll-smooth">
            <body
                className={cn(
                    sora.className,
                    "flex w-full flex-col items-center",
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableColorScheme
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
            <Analytics />
            <SpeedInsights />
        </html>
    );
}
