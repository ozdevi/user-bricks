import type { Metadata } from "next";
import { BrickProvider } from "@/providers/BrickProvider"
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./layout.css";

export const metadata: Metadata = {
  title: "User Bricks",
  description: "A website built by user requests from scratch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BrickProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </BrickProvider>
      </body>
    </html>
  );
}
