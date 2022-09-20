import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
  return <>
    <footer className='margintop' >

      <div className="footerdivs paddingrl">

      <div className="footerdiv1">
        <div className="footerdiv1img">
          <Image src="https://www.drupal.org/files/Hostinger-logo.png" width="728" height="240" />
        </div>

        <p className="para">We are a web hosting company with a mission to help everyone who goes online succeed.</p>
        <p className="para">We accomplish this by continuously developing server technology, giving expert assistance, and ensuring a flawless online website hosting experience.</p>

        <div className="paymentcards">
          <Image src="https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png" width="60" height="40" />
          <Image src="https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png" width="60" height="40" />
          <Image src="https://assets.hostinger.com/images/payments/homepage-2020-payments/discover-1e5edf3f39.png" width="60" height="40" />
          <Image src="https://assets.hostinger.com/images/payments/homepage-2020-payments/dinersclub-3f02e2deec.png" width="60" height="40" />
          <Image src="https://assets.hostinger.com/images/payments/homepage-2020-payments/rupay-2bad18f6df.png" width="60" height="40" />
        </div>
          <Link href="/" >And More</Link>
      </div>


      <div className="footerdiv2 hosting">
        <p className="footersubheading">HOSTING</p>
        <Link href="/" >Web Hosting</Link>
        <Link href="/" >VPS Hosting</Link>
        <Link href="/" >Minecraft Server Hosting</Link>
        <Link href="/" >CyberPanel Hosting</Link>
        <Link href="/" >Cloud Hosting</Link>
        <Link href="/" >WordPress Hosting</Link>
        <Link href="/" >Email Hosting</Link>
        <Link href="/" >CMS Hosting</Link>
        <Link href="/" >Ecommerce Hosting</Link>
        <Link href="/" >Free Web Hosting</Link>
        <Link href="/" >Online Store</Link>
        <Link href="/" >Website Builder</Link>
        <Link href="/" >Buy Hosting</Link>
      </div>


      <div className="footerdiv2 domain">
        <p className="footersubheading">DOMAIN</p>
        <Link href="/" >Domain Name Search</Link>
        <Link href="/" >Domain Transfer</Link>
        <Link href="/" >Free Domain Name</Link>
        <Link href="/" >XYZ Domain</Link>
        <Link href="/" >Cheap Domains</Link>
        <Link href="/" >Domain Extensions</Link>
        <Link href="/" >WHOIS Lookup</Link>
        <Link href="/" >Free SSL Certificate</Link>
      </div>


      <div className="footerdiv2 information">
        <p className="footersubheading">INFORMATION</p>
        <Link href="/" >Migrate to Hostinger</Link>
        <Link href="/" >System Status</Link>
        <Link href="/" >Affiliate Program</Link>
        <Link href="/" >Payment Methods</Link>
        <Link href="/" >Rewards</Link>
        <Link href="/" >Reviews</Link>
        <Link href="/" >Pricing</Link>
        <Link href="/" >Sitemap</Link>
      </div>


      <div className="footerdiv2 legal">
        <p className="footersubheading">LEGAL</p>
        <Link href="/" >Privacy Policy</Link>
        <Link href="/" >Terms of Service</Link>
      </div>



      <div className="footerdiv2 company">
        <p className="footersubheading">COMPANY</p>
        <Link href="/" >About Hostinger</Link>
        <Link href="/" >Our Technology</Link>
        <Link href="/" >Roadmap</Link>
        <Link href="/" >Customer Care</Link>
        <Link href="/" >Blog</Link>
      </div>



      <div className="footerdiv2 help">
        <p className="footersubheading">HELP</p>
        <Link href="/" >Tutorials</Link>
        <Link href="/" >Knowledge Base</Link>
        <Link href="/" >Report Online Abuse</Link>
      </div>


      <div className="socialmedia">
      <Link target="_blank" href="https://www.linkedin.com/in/sahil-dhanavade-110a49168/" ><Image src="https://assets.hostinger.com/images/footer/socials/2020/linked-in-6483ac5eaf.svg" width="30" height="30" /></Link>
      <Link target="_blank" href="https://www.facebook.com/people/1markers/100083320936291/" ><Image src="https://assets.hostinger.com/images/footer/socials/2020/facebook-aae08bebe5.svg" width="30" height="30" /></Link>
      <Link target="_blank" href="https://www.instagram.com/1markers/" ><Image src="https://assets.hostinger.com/images/footer/socials/2020/instagram-19e7bf8e7d.svg" width="30" height="30" /></Link>
      <Link target="_blank" href="https://www.youtube.com/c/sahildhanawade" ><Image src="https://assets.hostinger.com/images/footer/socials/2020/youtube-10b297f40e.svg" width="30" height="30" /></Link>
      </div>

      </div>


      <div className="footerendline paddingrl">
        Made with <FavoriteIcon className='hearticon' /> by Sahil Dhanavade for CodeFest conducted by Thapa Technical
        <br />
        Email : <a href="mailto:sahildhanavade769@gmail.com" >sahildhanavade769@gmail.com</a>
        
        <div className="socialmediapersonal">
      <Link target="_blank" href="https://www.linkedin.com/in/sahil-dhanavade-110a49168/" ><Image src="https://assets.hostinger.com/images/footer/socials/2020/linked-in-6483ac5eaf.svg" width="30" height="30" /></Link>
      <Link target="_blank" href="https://www.instagram.com/sahil_mtbfreestyle/" ><Image src="https://assets.hostinger.com/images/footer/socials/2020/instagram-19e7bf8e7d.svg" width="30" height="30" /></Link>
      <Link target="_blank" href="https://www.youtube.com/c/sahildhanawade" ><Image src="https://assets.hostinger.com/images/footer/socials/2020/youtube-10b297f40e.svg" width="30" height="30" /></Link>
      </div>
        </div>
    </footer>
  </>
}

export default Footer