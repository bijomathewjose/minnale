import React from 'react'
import "./home.css"
import products from '../Products/product-data.json'
const Home = () => {
    return (
        <>
            <div className='home' id='Home'>
                <div className='home-box '>
                    < img className='rounded-[50%]' src='assets/home/main.webp' alt='' />
                </div>
                <h1 className='name'>Handmade Paper Craft</h1>
                <h2 className='prod-head'>Products</h2>
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