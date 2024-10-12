import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { League_Spartan } from 'next/font/google';

// For google analytics
import Script from 'next/script'
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const leageSpartan = League_Spartan({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url:any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return <>
      {/* Google tag (gtag.js) */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></Script>
      <Script strategy="afterInteractive" id='0'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_TRACKING_ID}');
        `}
      </Script>

    <main className={`${leageSpartan.className}`}>
      <Component {...pageProps} />
    </main>
  </>
}
