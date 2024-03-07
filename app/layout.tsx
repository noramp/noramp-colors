import "@/styles/globals.css";
import { Metadata } from "next";
import { useState } from "react";
// import { ThemeProvider } from "@/components/misc/ThemeProvider";

export const metadata: Metadata = {
  title: "NoRamp",
  description: "Seamless Web3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <meta property="twitter:image" content="https://new.noramp.io/logo.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="NoRamp | Home" />
      <meta
        property="twitter:description"
        content="Interact with Web3 without the hassle of buying crypto"
      />
      <title>NoRamp | Home</title>
      <meta
        property="description"
        content="Interact with Web3 without the hassle of buying crypto"
      />
      <meta property="og:image" content="https://noramp.io/logo.png" />
      <meta property="og:title" content="NoRamp" />
      <meta
        property="og:description"
        content="Interact with Web3 without the hassle of buying crypto"
      />
      <meta property="og:url" content="https://new.noramp.io" />
      <body className="w-full h-full">
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
        <header className="hidden lg:flex top-0 overflow-hidden z-50 flex-col items-center pt-5 px-20 w-full min-h-[800px] absolute max-md:pl-5 max-md:max-w-full">
          <div>
            <img src="/logo.png" className="w-24 h-24" alt="NoRamp Logo" />
            <div></div>
          </div>
        </header>
        {/* <HeaderMobile /> */}
        {children}
        {/* <Footer /> */}
        {/* </ThemeProvider> */}
      </body>

      <script
        async
        src="https://umami.pepi.codes/script.js"
        data-website-id="f06bd2cb-9adf-474b-9927-25017842e518"
      ></script>
    </html>
  );
}
