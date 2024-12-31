import TopSection from './top-section/top-section'
import ProfitabilityMatters from './profitability-matters/profitability-matters'
import EverythingYouNeedToStart from "./everything-you-need-to-start/everything-you-need-to-start"
import TestimonialData from "./testimonials/testimonial"
import Pricing from './pricing/pricing'
import SubscribeUs from './subscribe-us/subscribe-us'
import Footer from './footer/footer'
import SEO from "../../../next-seo.config"
import { NextSeo } from 'next-seo'

const Homepage = () => {

  return (
    <>
      <NextSeo {...SEO} />
      <div className='py-10 space-y-8'>
        <TopSection />
        <ProfitabilityMatters />
        <EverythingYouNeedToStart />
        <TestimonialData />
        <Pricing />
        <SubscribeUs />
        <Footer />
        <p className="text-gray-500 text-xs md:text-sm text-center">© 2024 Shopbraze, Inc. All rights reserved.</p>
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