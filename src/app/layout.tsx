import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/providers/AuthProvider";

const poppins = Poppins({ 
  subsets: ["latin"] ,
  weight: ['100','200','300','400','500','600','700','800','900']
});

export const metadata: Metadata = {
  title: "Daily.dev | where developers suffer together",
  description: "Daily.dev | where developers suffer together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={poppins.className}>
        <Toaster/>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
