import React from 'react'
import './about.css'
const About = () => {
    const content = " ✨Minnale is owned and operated by Aiswarya Sunil🤗, a 🤏small business owner👩🏻‍💼 based in Thrissur, Kerala. At Minnale, we offer unique and high quality products that are customized to meet the needs and preferences of every customer.\nAs a business, we have been providing this service for the past 3 years and have completed over ⭐200 orders⭐.To place an order, we require a minimum of 5 days' 🔔notice. However, we also accept urgent orders. All orders are shipped🚢 through India-Post📭 and DTDC , and customers will receive a tracking code🌏, as well as pictures and videos of the products, once they are dispatched.\nIf you are looking for a special and personalized gift for your loved ones, look no further than Minnale.";
    return (
        <div className='flex flex-col about-container pb-4' id='About'>
            <div className='about font-[Itim] flex justify-center items-center'><span>About Minnale </span><span className='text-lg'>✨</span></div>
            <div className='flex'>
                <div className='content-container'>
                    <div className="content lg:p-[80px] sm:p-[50px] p-[35px]">
                        <p className=' text-justify'>{content}</p>
                        <br></br>
                        <p className=' text-center'>{"🤗Contact us to start your order today🥰."}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='lg:p-[20px] sm:p-[50px] p-[35px] text-4xl '>{"🌎 Location 🌍"}</p>
                        <iframe
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31364.14271201539!2d76.32701247634111!3d10.694483732575659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dd92ca891e9b%3A0xb823f66ee2f0b232!2sChelakkara%2C%20Kerala%20680586!5e0!3m2!1sen!2sin!4v1672323331394!5m2!1sen!2sin"
                            width={"100%"} height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className='hidden md:flex pr-[25px] '><img className=' rounded-lg object-center object-cover' src='assets/about/garden.webp' alt='garden girl' width={"100%"} height="100%" /></div>
            </div>
        </div>
    )
}

export default About