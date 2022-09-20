import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children })=> {

  useEffect(()=>{

    Aos.init({
      offset: 80,
      duration: 600,
      easing: 'ease-in-out',
      // delay: 1000,
      // once: true
  })

  },[])

  return <>

<Head>
<link rel="shortcut icon" href="https://assets.hostinger.com/images/favicons/favicon-97d9192479.ico"/>
</Head>

    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
      </div>
    </>
}

export default Layout