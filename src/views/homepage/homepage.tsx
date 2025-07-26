import TopSection from './top-section/top-section'
import SEO from "../../../next-seo.config"
import { NextSeo } from 'next-seo'
import ProfitabilityMatters from './profitability-matters/profitability-matters'
import EverythingYouNeed from './everything-you-need/everything-you-need'
import Testimonials from './testimonials/testimonials'
import Pricing from './pricing/pricing'
import Footer from './footer/footer'

const Homepage = () => {

  return (
    <>
      <NextSeo {...SEO} />
      <div className=''>
        <TopSection />
        <ProfitabilityMatters />
        <EverythingYouNeed />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};


export default Homepage