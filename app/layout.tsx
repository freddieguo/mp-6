import React from "react";

export const metadata = {
  title: 'MP-6',
  description: 'Simply OAuth Application',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}



