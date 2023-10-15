import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Script from 'next/script'

import { League_Spartan } from '@next/font/google'
const leagueSpartan = League_Spartan({ 
  subsets: ['latin'],
  weight: ["400", "600", "700", "800"],
  fallback: ["Roboto","Poppins", "sans-serif"],
  variable: "--league-spartan",
  display: "swap",
})

// For google analytics
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

export default function App({ Component, pageProps }: AppProps) {

  // For google analytics
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
// 


  return (
    <>
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

      <style jsx global>{`
        html {
          font-family: ${leagueSpartan.style.fontFamily};
        }
      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
