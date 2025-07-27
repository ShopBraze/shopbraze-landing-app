import Layout from "global-components/layout/layout"
import Homepage from "views/homepage/homepage"
import Script from "next/script"
import Head from "next/head"
import "../styles/globals.css"

const App = () => {
  return (
    <>
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-75LEBKHJFG"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-75LEBKHJFG', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </>
  )
}

export default App
