import React from 'react'
import TopNavbar from '../top-navbar/top-navbar'
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='max-w-[1440px] mx-auto xl:px-20 lg:px-16 md:px-12 px-4'>
      <Head>
        <title>ShopBraze</title>
      </Head>
      <TopNavbar />
      {children}
    </div>
  )
}

export default Layout