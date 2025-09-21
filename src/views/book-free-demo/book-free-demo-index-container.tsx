import BookFreeDemoForm from './book-free-demo-form/book-free-demo-form'
import HomepageIndexContainer from 'views/homepage/homepage-index-container'
import { generateUniqueEventId } from 'utils/generate-unique-event-id'
import { useEffect } from 'react'
import { fbq } from 'events/fb-pixel'
import { NextSeo } from 'next-seo'
import { BookAFreeDemoSEO } from '../../../next-seo.config'

const BookFreeDemoIndexContainer = () => {
  const eventId = generateUniqueEventId()
  useEffect(() => {
    fbq('track', 'ViewContent', {
      eventId,
      content_name: 'Shopbraze Book a Free Demo',
      content_category: 'Lead Generation',
      content_type: 'book_a_free_demo_page',
      value: 0,
      currency: 'INR'
    });
  }, []);
  return (
    <>
      <NextSeo {...BookAFreeDemoSEO} />
      <BookFreeDemoForm />
      <HomepageIndexContainer />
    </>
  )
}

export default BookFreeDemoIndexContainer