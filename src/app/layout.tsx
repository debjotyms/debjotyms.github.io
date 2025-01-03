import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {cn} from "@/lib/utils";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "debjotyms",
  description: "created by debjotyms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "h-full")}>
        <div className="h-full flex flex-col items-center">
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
