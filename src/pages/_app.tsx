import Layout from "global-components/layout/layout"
import Homepage from "views/homepage/homepage"
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import TopBarProgress from "react-topbar-progress-indicator";
import "../styles/globals.css"
const App = () => {

  // const [changingRoute, setChangingRoute] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   router.events.on('routeChangeStart', () => setChangingRoute(true));
  //   router.events.on('routeChangeComplete', () => setChangingRoute(false));
  //   router.events.on('routeChangeError', () => setChangingRoute(false));

  //   return () => {
  //     router.events.off('routeChangeStart', () => setChangingRoute(true));
  //     router.events.off('routeChangeComplete', () => setChangingRoute(false));
  //     router.events.off('routeChangeError', () => setChangingRoute(false));
  //   };
  // }, [router]);
  return (
    <>
      {/* {changingRoute && <TopBarProgress />} */}
      <Layout>
        <Homepage />
      </Layout>
    </>
  )
}

export default App
