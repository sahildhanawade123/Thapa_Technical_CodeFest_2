import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import Poster from '../components/Poster'
import Image from 'next/image'
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';
import Link from 'next/link'



const Home = ({ currentDate }) => {



  let offerEndDate = 1663676540349 + 1550000000  // Put offerEndDate in milliSeconods It is the the time from current date at which your timer in Poster component will end


  const [dateData, setDateData] = useState({
    days: 0,
    hours: 0,
    time: 0,
    seconds: 0
  })





  useLayoutEffect(() => {

    const t = setInterval(() => {

      const a = (offerEndDate - currentDate) / 86400000
      const b = ((a - Math.floor(a)) * 86400000) / 3600000
      const c = ((b - Math.floor(b)) * 3600000) / 60000
      const d = ((c - Math.floor(c)) * 60000) / 1000


      setDateData({
        days: Math.floor(a),
        hours: Math.floor(b),
        time: Math.floor(c),
        seconds: Math.floor(d)
      })

      offerEndDate = offerEndDate - 1000

    }, 1000);

    return () => clearInterval(t)

  }, [offerEndDate])




  return <>

    {dateData.days > 0 ?
      <Poster
        days={dateData.days}
        hours={dateData.hours}
        time={dateData.time}
        seconds={dateData.seconds}
      />
      :
      <Poster
        days="00"
        hours="00"
        time="00"
        seconds="00"
      />}

    <div className="trustsignals">
      <div className="image">
        <Image src="/images/wordpress.svg" height="36" width="163" />
      </div>
      <div className="image">
        <Image src="/images/litespeed.svg" height="35" width="137" />
      </div>
      <div className="image">
        <Image src="/images/cloudflare.svg" height="24" width="219" />
      </div>
    </div>


    <article>
      <h2 className="heading marginrl margintop" data-aos="fade-left" >All-In-One Web Hosting</h2>
      <div className="para marginrl smallmargintop" data-aos="fade-left" >We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</div>

      <div className="plan marginrl" data-aos="fade-right" >
        <h3 className="planheading">Best Web Hosting</h3>

        <div className="plandetails">
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>Unmetered</b> traffic (Unlimited GB) <HelpOutlineIcon className='planicon' /></p>
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>100</b> Websites</p>
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>100 GB</b> SSD Storage <HelpOutlineIcon className='planicon' /></p>
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>100</b> Parked domains <HelpOutlineIcon className='planicon' /></p>
        </div>

        <div className="planprice">
          <h1 className="price"> 149.00</h1>
          <p className="para">₹249.00/mo when you renew</p>
          <Button className="select">Selcet</Button>
        </div>

        <div className="plandetails">
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>Unlimited</b> Free SSL <HelpOutlineIcon className='planicon' /></p>
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>Free</b> Domain <HelpOutlineIcon className='planicon' /></p>
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>Free</b> Email <HelpOutlineIcon className='planicon' /></p>
          <p><FileDownloadDoneIcon className='planicon planicontick' /> <b>Optimized</b> for WordPress <HelpOutlineIcon className='planicon' /></p>
        </div>
      </div>
    </article>



    <article>
      <h2 className="heading margintop" data-aos="fade-right" >Our Services Include:</h2>

      <div className="services marginrl">
        <div className="service" data-aos="fade-right"><Image src="https://assets.hostinger.com/images/homepage2021/services/free-ssl-c672bc7cfb.svg" width="42" height="42" /> FreeSSl</div>
        <div className="service" data-aos="fade-left"><Image src="https://assets.hostinger.com/images/homepage2021/services/access-management-01f91d3436.svg" width="42" height="42" /> Access Management</div>
        <div className="service" data-aos="fade-right"><Image src="https://assets.hostinger.com/images/homepage2021/services/ecommerce-c7adac5be7.svg" width="42" height="42" /> eCommerce Optimization</div>
        <div className="service" data-aos="fade-left"><Image src="https://assets.hostinger.com/images/homepage2021/services/free-migration-913e6bfab2.svg" width="42" height="42" /> Free Migration</div>
        <div className="service" data-aos="fade-right"><Image src="https://assets.hostinger.com/images/homepage2021/services/backups-2d6e895cf1.svg" width="42" height="42" /> Automated backups</div>
        <div className="service" data-aos="fade-left"><Image src="https://assets.hostinger.com/images/homepage2021/services/cloudflare-d1bcbdabc9.svg" width="42" height="42" /> DDoS Protection</div>
        <div className="service" data-aos="fade-right"><Image src="https://assets.hostinger.com/images/homepage2021/services/php-speed-boost-f7850027dc.svg" width="42" height="42" /> PHP Speed Boost</div>
        <div className="service" data-aos="fade-left"><Image src="https://assets.hostinger.com/images/homepage2021/services/litespeed-wp-module-e0e9453f3c.svg" width="42" height="42" /> LiteSpeed Cache Plugin</div>
        <div className="service" data-aos="fade-right"><Image src="https://assets.hostinger.com/images/homepage2021/services/wp-installation-2161a49ee3.svg" width="42" height="42" /> One-Click WorkPress Installation</div>
        <div className="service" data-aos="fade-left"><Image src="https://assets.hostinger.com/images/homepage2021/services/tech-support-ebf15a3d83.svg" width="42" height="42" /> 24/7/365 Tech Support</div>
        <div className="service" data-aos="fade-right"><Image src="https://assets.hostinger.com/images/homepage2021/services/script-installer-6fe9e03c5c.svg" width="42" height="42" /> Auto Script Installer</div>
        <div className="service" data-aos="fade-left"><Image src="https://assets.hostinger.com/images/homepage2021/services/uptime-guarantee-1e9eae1cb0.svg" width="42" height="42" /> 99.9% Uptime Guarantee</div>
      </div>
    </article>


    <article className="searchdiv margintop paddingrl">
      <h2 className="heading" data-aos="fade-left">Find the perfect domain name</h2>
      <p className="para" data-aos="fade-right" >Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more</p>
      <div className="searchboxdiv" data-aos="fade-left" >
        <input type="text" placeholder='Type in that perfect domain name' />
        <Button className='search'>Search</Button>
      </div>
    </article>


    <article>
      <h2 className="heading marginrl margintop">Top Companies using our Services</h2>

      <div className="companies marginrl">
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="/images/1markers.svg" width="471" height="122" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://image.ibb.co/h8HYtz/tt_1.png" width="500" height="500" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-1024x640.png" width="500" height="312" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="/images/1markers.svg" width="471" height="122" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://1000logos.net/wp-content/uploads/2017/02/YouTube-Logosu-500x281.png" width="500" height="281" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="/images/1markers.svg" width="471" height="122" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://image.ibb.co/h8HYtz/tt_1.png" width="500" height="500" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-1024x640.png" width="500" height="312" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="/images/1markers.svg" width="471" height="122" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://image.ibb.co/h8HYtz/tt_1.png" width="500" height="500" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-1024x640.png" width="500" height="312" />
        <Image data-aos-duration={700} data-aos="zoom-in-up" src="https://1000logos.net/wp-content/uploads/2017/02/YouTube-Logosu-500x281.png" width="500" height="281" />
      </div>

    </article>





    <div className="setup marginrl margintop">
      <article className="setupdiv1" data-aos="fade-right">
        <p className="setuppara">EASY TO USE AND SIMPLE</p>
        <h2 className="heading">Easy to set up</h2>
        <p className="para">Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.</p>
        <Link href="/">Learn more</Link>
      </article>

      <div className="setupdiv2" data-aos="fade-left">
        <Image src="https://assets.hostinger.com/images/homepage2020/easy-to-setup-mobile-5c868e689f.jpg"
          width="550" height="350"
        />
      </div>
    </div>





    <div className="setup marginrl mediummargintop">

      <div className="setupdiv2" data-aos="fade-right">
        <Image src="https://assets.hostinger.com/images/homepage2020/simply-fast-websites-mobile-913c582753.jpg"
          width="560" height="429"
        />
      </div>

      <article className="setupdiv1" data-aos="fade-left">
        <p className="setuppara">PERFORMANCE AND SPEED</p>
        <h2 className="heading">Lightning-fast websites</h2>
        <p className="para">Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.</p>
        <Link href="/">Learn more</Link>
      </article>
    </div>



    <div className="setup marginrl mediummargintop">

      <article className="setupdiv1" data-aos="fade-right">
        <p className="setuppara">GREAT WORDPRESS EXPERIENCE</p>
        <h2 className="heading">WordPress made easy</h2>
        <p className="para">Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure.</p>
        <Link href="/">Learn more</Link>
      </article>

      <div className="setupdiv2" data-aos="fade-left">
        <Image src="https://assets.hostinger.com/images/homepage2020/wordpress-made-easy-mobile-5f9e3f7598.jpg"
          width="510" height="321"
        />
      </div>

    </div>



    <div className="setup marginrl mediummargintop">

      <div className="setupdiv2" data-aos="fade-right">
        <Image src="https://assets.hostinger.com/images/homepage2020/chat-support@2x-bb1e2e3911.png"
          width="1080" height="700"
        />
      </div>

      <article className="setupdiv1" data-aos="fade-left">
        <p className="setuppara">PROFESSIONAL AND HANDS-ON</p>
        <h2 className="heading">24/7 Support</h2>
        <p className="para">Our team of experts will solve technical issues to get your websites up and running. Anytime.</p>
        <Link href="/">Contact us</Link>
      </article>
    </div>




    <div className="setup marginrl mediummargintop">

      <article className="setupdiv1" data-aos="fade-right">
        <p className="setuppara">FLEXIBLE AND SCALABLE</p>
        <h2 className="heading">From micro to large-scale</h2>
        <p className="para">Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.</p>
        <Link href="/">See all products</Link>
      </article>

      <div className="setupdiv2" data-aos="fade-left">
        <Image src="https://assets.hostinger.com/images/homepage2020/micro-large-scale-mobile-4db284d67e.jpg"
          width="540" height="350"
        />
      </div>

    </div>



    <article>

      <h2 className="heading margintop">User-Friendly Control Panel</h2>

      <div className="setup setup2 marginrl mediummargintop">

        <div className="setupdiv2 setupdiv22" data-aos="fade-right">
          {/* <video class="play-video-on-scroll d-none d-xl-block lazy-load-poster lazy-loaded-video" muted="muted" preload="metadata" width="150%" height="100%" data-poster="https://assets.hostinger.com/images/homepage2020/control-panel-section/hpanel-img-b7635fbb82.png" poster="https://assets.hostinger.com/images/homepage2020/control-panel-section/hpanel-img-b7635fbb82.png"><source src="https://assets.hostinger.com/videos/homepage2020/user-friendly-cp-2020-7ab2c70b24.mp4" type="video/mp4"></source></video> */}
          <Image src="https://assets.hostinger.com/images/homepage2020/control-panel-section/panel-img@2x-5614dc0a34.png" width="559" height="856" />
        </div>

        <div className="setupdiv1" data-aos="fade-left" >
          <div className="setupdiv2"><Image src="https://assets.hostinger.com/images/homepage2020/control-panel-section/user-icon-923934a391.svg" width="20" height="24" /></div>
          <h3 className="heading">Ease of Use</h3>
          <p className="para">Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development.</p>


          <div className="setupdiv2"><Image src="https://assets.hostinger.com/images/homepage2020/control-panel-section/chart-icon-3472a5b9a8.svg" width="27" height="27" /></div>
          <h3 className="heading">Powerful</h3>
          <p className="para">A wide variety of tools to satisfy advanced user and website developer needs.</p>


          <div className="setupdiv2"><Image src="https://assets.hostinger.com/images/homepage2020/control-panel-section/wp-icon-9be267d135.svg" width="24" height="24" /></div>
          <h3 className="heading">WordPress Optimized</h3>
          <p className="para">Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache.</p>

        </div>

      </div>
    </article>


    <article className="guarantee margintop marginrl" >
      <h2 className="heading" data-aos="fade-right" >30-Day Money-Back Guarantee</h2>
      <p className="para" data-aos="fade-right" >We&apos;ll refund your payment if you&apos;re not 100% satisfied with Hostinger. No hassle, no risk.</p>
      <Button className="started" data-aos="fade-left" >Get Started</Button>
    </article>



  </>
}




export const getServerSideProps = () => {

  const currentDate = Date.now()  // can we get date in this way it comes from the server and it is not depend on the date of the user's device it may be expensive in case of performance but when we need to fetch some data from the backend and also need date then in that case I think it is worth it.

  return {
    props: {
      currentDate,
    }
  }
}




export default Home