import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZeroGPT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ZeroGPT - AI Detection Tool" />
      </Head>
      <LanguageProvider>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </LanguageProvider>
    </>
  );
}