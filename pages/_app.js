import '../styles/globals.css'


// import 'bootstrap/dist/css/bootstrap.css'

import Head from 'next/head'  

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>


    
    <Component {...pageProps} />
  
  </>
  )
}

export default MyApp

