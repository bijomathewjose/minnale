import React from 'react'
import './about.css'
const About = () => {
    const content = " Minnale is business of Handmade Paper Craft products.Handmade paper craft can be a successful business, especially if you are able to offer unique and high-quality products that meet the needs and preferences of your target market. Some potential business ideas in the handmade paper craft industry include: Selling handmade paper products: You can create and sell a wide range of handmade paper products, such as greeting cards, invitations, gift boxes, and scrapbooking supplies.Offering paper craft workshops: You can offer classes or workshops teaching people how to make various handmade paper craft projects.This could be a good option if you have expertise in a particular technique, such as origami or quilling.Providing custom paper craft services: You can offer custom paper craft services, such as creating personalized invitations or party decorations for events.To start a handmade paper craft business, you will need to develop a business plan and identify your target market.You should also consider the costs associated with starting and running a business, including materials and equipment, marketing and advertising expenses, and any necessary licenses or permits.It can also be helpful to establish an online presence, such as a website or social media accounts, to showcase your products and services and reach a wider audience.Networking with other businesses and participating in craft fairs and events can also be effective ways to promote your business and attract customers. "
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