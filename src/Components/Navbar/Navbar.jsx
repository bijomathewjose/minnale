import React from 'react'
import './navbar.css'
const Navbar = () => {
    const navbar = ["Home", "About", "Products"]
    const contacts = [{ "name": "Instagram", "link": "https://www.instagram.com/_minnale_/", "asset": "instagram.svg" },
    { "name": "Facebook", "link": "https://www.facebook.com/MINNALEHANDMADES/", "asset": "facebook.svg" },
    { "name": "Youtube", "link": "https://www.youtube.com/channel/UCF9Ts2woU2Kpiw7kTeldbmQ", "asset": "youtube.svg" },
    { "name": "Whatsapp", "link": "https://wa.me/917902355748", "asset": "call.svg" },
    { "name": "Location", "link": "https://goo.gl/maps/ZAnoGA2ryRYRQk3w5", "asset": "location.svg" }
    ]
    return (
        <div className='nav'>
            <div className='navbar justify-between md:pl-8'>
                <a href='/' className='nav-logo '>
                    <img className='' src="assets/navbar/logo.png" alt='' width="100%" height="100%" />
                </a>
                <div className='navbar-sub hidden md:flex '>
                    {navbar.map(value =>
                        <a href={"#" + value} className='heading-tag sm'>
                            <div className='menu-name'>{value}</div>
                            <div className='dash'></div>
                        </a>
                    )}
                </div>
                <div className='heading-tag pr-8'>
                    <div className='menu-logo flex'>
                        {contacts.map(set => (
                            <a href={set.link} target="_blank" rel="noopener noreferrer" className='nav-assit-logo'>
                                <img src={'assets/navbar/' + set.asset} alt='' width="100%" height="100%" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar