import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Smart Home - Herstellerunabhängiger Smart-Home-Dienstleister",
    description: "Individuelle Lösungen für Privat & Unternehmen – von der Planung bis zur Installation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
            <body>{children}</body>
        </html>
    );
}
