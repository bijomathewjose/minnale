import React from 'react'
import "./home.css"
import products from '../Products/product-data.json'
const Home = () => {
    return (
        <>
            <div className='home' id='Home'>
                <div className='home-box m-5'>
                    <h1 className='name'>MINNALE</h1>
                    <h2 className='slogan'>Let's smile together</h2>
                    <div className='flex items-center'>
                        <h2 className='description' >Handmade<br />Paper<br /> Craft</h2>
                        <div><img src='assets/home/girl.png' alt='Girl' /></div>
                    </div>
                </div>
                <h2>Products</h2>
                <div className="products">
                    {products.map(product => (
                        <a href={'#' + product.id} >
                            <div className="product-container">
                                <div className='product-name'>{product.name}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Home