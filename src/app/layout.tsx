import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sol.IA Publisher",
  description: "Transforme manuscritos em produtos editoriais premium."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
