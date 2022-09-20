import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';




const Navbar = () => {
    const router = useRouter()

    const [dropDown, setDropDown] = useState({})
    const [mobMode, setMobMode] = useState(false)
    const [mobDropDownState, setMobDropDownState] = useState(false)



    useEffect(()=>{

        const Menu = document.querySelector('.navdiv2mob2')

        if (mobDropDownState) {
            Menu.style.right = "calc(0%)"
            Menu.style.opacity = "100%"
        }
        else if (!mobDropDownState) {
            try {       
                Menu.style.right = "-100%"
                Menu.style.opacity = "0%"
                setDropDown({})

            } catch (error) {}    
    }
        
    },[mobDropDownState])


    useLayoutEffect(() => {

        if (document.documentElement.clientWidth <= 980) {
            setMobMode(true)
        }

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth <= 980) {
                setMobMode(true)
            }
            else {
                setMobMode(false)
            }
        })


    })


    return <>
        <header className='' >

            <div className="navdiv1">
                <Image src="https://www.drupal.org/files/Hostinger-logo.png" width="728" height="240" />
            </div>

            {!mobMode ? <ul className="navdiv2">
                <li className="navdiv2links" onClick={() => setDropDown({ hosting: !dropDown.hosting })} >Hosting {dropDown.hosting ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}
                {dropDown.hosting && 
                        <ul><Link href="/"><li className="navdiv2linksmenu" >Web Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmenu" >Cloud Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmenu" >WordPress Hosting</li></Link></ul>}
                </li>


                <li className="navdiv2links" onClick={() => setDropDown({ vps: !dropDown.vps })} >VPS {dropDown.vps ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}
                {dropDown.vps && 
                        <ul><Link href="/"><li className="navdiv2linksmenu" >VPS Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmenu" >CyberPanel Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmenu" >Minecraft Server Hosting</li></Link></ul>}
                </li>


                <li className="navdiv2links" onClick={() => setDropDown({ email: !dropDown.email })} >Email {dropDown.email ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}
                {dropDown.email && 
                        <ul><Link href="/"><li className="navdiv2linksmenu" >Google Workspace Email Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmenu" >Hostinger Email Hosting</li></Link></ul>}
                </li>


                <li className="navdiv2links" onClick={() => setDropDown({ domain: !dropDown.domain })}>Domain {dropDown.domain ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}
                {dropDown.domain && 
                        <ul><Link href="/"><li className="navdiv2linksmenu" >Domain Name Search</li></Link>
                        <Link href="/"><li className="navdiv2linksmenu" >WHOIS Lookup</li></Link>
                        <Link href="/"><li className="navdiv2linksmenu" >Domain Transfer</li></Link></ul>}
                        </li>

                <Button className="login" onClick={() => router.push('/')} ><VpnKeyIcon className="navarrow" />Login</Button>

                {/* later we will Change the url in the href when when we will make Login and Cart Page */}
                <Link href="/"><li className="navdiv2links cart"><ShoppingCartIcon className="navarrow" /><p className="cartcount">2</p>Cart</li></Link>
            </ul>

                :

                <ul className="navdiv2mob">
                    {/* will Replace the Cart link later*/}
                    <Link href="/"><li className="navdiv2linksmob cart"><ShoppingCartIcon className="navarrow" /><p className="cartcount">2</p>Cart</li></Link>
                    <li className='navdiv2linksmob menu' onClick={()=>setMobDropDownState(!mobDropDownState)} ><MenuIcon className='navarrow' /></li>
                    <ul className="navdiv2mob2">
                        <li className="navdiv2linksmob2" onClick={() => setDropDown({ hosting: !dropDown.hosting })} >Hosting {dropDown.hosting ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}</li>

                        {dropDown.hosting && 
                        <ul><Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >Web Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >Cloud Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >WordPress Hosting</li></Link></ul>}
        

                        <li className="navdiv2linksmob2" onClick={() => setDropDown({ vps: !dropDown.vps })} >VPS {dropDown.vps ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}</li>

                        {dropDown.vps && 
                        <ul><Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >VPS Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >CyberPanel Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >Minecraft Server Hosting</li></Link></ul>}


                        <li className="navdiv2linksmob2" onClick={() => setDropDown({ email: !dropDown.email })} >Email {dropDown.email ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}</li>

                        {dropDown.email && 
                        <ul><Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >Google Workspace Email Hosting</li></Link>
                        <Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >Hostinger Email Hosting</li></Link></ul>}


                        <li className="navdiv2linksmob2" onClick={() => setDropDown({ domain: !dropDown.domain })}>Domain {dropDown.domain ? <KeyboardArrowUpIcon className="navarrow" /> : <KeyboardArrowDownIcon className="navarrow" />}</li>

                        {dropDown.domain && 
                        <ul><Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >Domain Name Search</li></Link>
                        <Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >WHOIS Lookup</li></Link>
                        <Link href="/"><li className="navdiv2linksmob2 navdiv2linksmob2submenu" >Domain Transfer</li></Link></ul>}



                        <Button className="navdiv2links login" onClick={() => router.push('/')} ><VpnKeyIcon className="navarrow" />Login</Button>
                    </ul>
            

                </ul>}

        </header>
    </>
}

export default Navbar