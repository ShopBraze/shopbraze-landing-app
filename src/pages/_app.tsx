import { AppProps } from "next/app"
import Script from "next/script"
import "../styles/globals.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { initMixpanel } from "lib/mixpanelClient"
import { generateUniqueEventId } from "utils/generate-unique-event-id"
import { Toaster } from "react-hot-toast"

const App = ({ Component, pageProps }: AppProps) => {
  const FB_PIXEL_ID = '665965192426562'
  const [changingRoute, setChangingRoute] = useState(false);
  const router = useRouter();

  const firePageView = () => {
    const eventId = generateUniqueEventId()
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'PageView', { eventId });
    }
  };

  useEffect(() => {
    initMixpanel();
    firePageView();

    const handleRouteStart = () => setChangingRoute(true);
    const handleRouteComplete = () => {
      setChangingRoute(false);
    };
    const handleRouteError = () => setChangingRoute(false);

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, [router]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-75LEBKHJFG"
        strategy="beforeInteractive"
      />
      <Script id="ga-init" strategy="beforeInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-75LEBKHJFG', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
      <>
        <Script
          id="fb-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </>
      <Toaster toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
