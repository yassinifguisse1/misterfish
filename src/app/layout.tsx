import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mister Fish - Restaurant de Fruits de Mer",
  description: "Restaurant de fruits de mer authentique à Agadir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
