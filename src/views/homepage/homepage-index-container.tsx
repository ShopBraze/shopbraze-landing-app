import TopSection from './top-section/top-section'
import SEO from "../../../next-seo.config"
import { NextSeo } from 'next-seo'
import ProfitabilityMatters from './profitability-matters/profitability-matters'
import EverythingYouNeed from './everything-you-need/everything-you-need'
import Testimonials from './testimonials/testimonials'
import Pricing from './pricing/pricing'
import Footer from './footer/footer'
import { generateUniqueEventId } from 'utils/generate-unique-event-id'
import { useEffect } from 'react'
import { fbq } from 'events/fb-pixel'

const HomepageIndexContainer = () => {
  const eventId = generateUniqueEventId()
  useEffect(() => {
    fbq('track', 'ViewContent', {
      eventId,
      content_name: 'Shopbraze Landing Page',
      content_category: 'Lead Generation',
      content_type: 'landing_page',
      value: 0,
      currency: 'INR'
    });
  }, []);
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


export default HomepageIndexContainer