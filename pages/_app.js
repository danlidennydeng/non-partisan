import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

// import 'bootstrap/dist/css/bootstrap.css'

import Head from 'next/head'  

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Non-Partisan Alliance Inc. (NPA) - a political discussion online forum</title>
      
      <meta name="description" content="Non-Partisan Alliance Inc. (NPA) is establishing a clean and professional political discussion online forum for cultivating open-mindedness, bridging divides, combating political polarization, and building understanding, empowering American voters, and promoting Freedom of Speech." />

      <meta name="keywords" content="political discussion online forum, combating political polarization, cultivating open-mindedness, bridging divides, building understanding, empowering American voters, and promoting Freedom of Speech" />
      
      <meta name="author" content="Danli Denny Deng" />

      <meta property="og:title" content="Non-Partisan Alliance Inc. (NPA) - a political discussion online forum" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://s3-danlideng-ohio.s3.us-east-2.amazonaws.com/public/benjamine-video-og-c.png" />
      <meta property="og:url" content="https://www.non-partisan.online" />

      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>


    
    <Component {...pageProps} />
    <Analytics />
  </>
  )
}

export default MyApp

