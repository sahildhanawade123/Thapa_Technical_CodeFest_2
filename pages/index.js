import React from 'react'
import Poster from '../components/Poster'
import Image from 'next/image'
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';



const Home = () => {
  return <>

    <Poster />

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


    <div className="heading marginrl">All-In-One Web Hosting</div>
    <div className="para marginrl">We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</div>


    <div className="plan marginrl">
      <div className="planheading">Best Web Hosting</div>

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



    <p className="heading">Our Services Include:</p>

    <div className="services marginrl">
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/free-ssl-c672bc7cfb.svg" width="42" height="42" /> FreeSSl</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/access-management-01f91d3436.svg" width="42" height="42" /> Access Management</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/ecommerce-c7adac5be7.svg" width="42" height="42" /> eCommerce Optimization</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/free-migration-913e6bfab2.svg" width="42" height="42" /> Free Migration</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/backups-2d6e895cf1.svg" width="42" height="42" /> Automated backups</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/cloudflare-d1bcbdabc9.svg" width="42" height="42" /> DDoS Protection</p>
      <p className="service"><Image src="	https://assets.hostinger.com/images/homepage2021/services/php-speed-boost-f7850027dc.svg" width="42" height="42" /> PHP Speed Boost</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/litespeed-wp-module-e0e9453f3c.svg" width="42" height="42" /> LiteSpeed Cache Plugin</p>
      <p className="service"><Image src="	https://assets.hostinger.com/images/homepage2021/services/wp-installation-2161a49ee3.svg" width="42" height="42" /> One-Click WorkPress Installation</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/tech-support-ebf15a3d83.svg" width="42" height="42" /> 24/7/365 Tech Support</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/script-installer-6fe9e03c5c.svg" width="42" height="42" /> Auto Script Installer</p>
      <p className="service"><Image src="https://assets.hostinger.com/images/homepage2021/services/uptime-guarantee-1e9eae1cb0.svg" width="42" height="42" /> 99.9% Uptime Guarantee</p>
    </div>


    <div className="searchdiv marginrl">
      <p className="heading">Find the perfect domain name</p>
      <p className="para">Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more</p>
      <div className="searchboxdiv">
        <input type="text" placeholder='Type in that perfect domain name'/>
        <Button className='search'>Search</Button>
      </div>
    </div>


    <p className="heading">Top Companies using our Services</p>

    <div className="companies marginrl">
      <Image src="/images/1markers.svg" width="471" height="122" />
      <Image src="/images/1markers.svg" width="471" height="122" />
      <Image src="https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png" width="60" height="40" />
      <Image src="/images/1markers.svg" width="471" height="122" />
      <Image src="https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png" width="60" height="40" />
      <Image src="/images/1markers.svg" width="471" height="122" />
    </div>










  </>
}

export default Home