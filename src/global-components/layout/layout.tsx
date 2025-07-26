import React from 'react'
import TopNavbar from '../top-navbar/top-navbar'
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>ShopBraze</title>
      </Head>
      <TopNavbar />
      {children}
    </>
  )
}

export default Layout