import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Providers} from "@/app/providers";
import React from "react";
import Appbar from "@/app/ui/admin/Appbar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'E-Commerce',
    description: 'E-commerce by Next.js and TailwindUI',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
