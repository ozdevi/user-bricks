import type { Metadata } from "next";
import { BrickProvider } from "@/providers/BrickProvider"

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
          {children}
        </BrickProvider>
      </body>
    </html>
  );
}
