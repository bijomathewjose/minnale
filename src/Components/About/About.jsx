import React from 'react'
import './about.css'
const About = () => {
    const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora."
    return (
        <div className='flex flex-col about-container pb-4' id='About'>
            <div className='about'>About Minnale</div>
            <div className='flex'>
                <div className='content-container'>
                    <div className="content">{content}</div>
                    <div className='flex flex-col items-center justify-center'>
                        Location
                        <iframe
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31364.14271201539!2d76.32701247634111!3d10.694483732575659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dd92ca891e9b%3A0xb823f66ee2f0b232!2sChelakkara%2C%20Kerala%20680586!5e0!3m2!1sen!2sin!4v1672323331394!5m2!1sen!2sin"
                            width={"100%"} height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className='hidden md:flex pr-[25px] '><img className=' rounded-lg object-center object-cover' src='assets/about/garden.jpg' alt='garden girl' width={"100%"} height="100%" /></div>
            </div>
        </div>
    )
}

export default About