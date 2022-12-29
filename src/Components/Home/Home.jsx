import React from 'react'
import "./home.css"
const Home = () => {
    const products = [
        { "id": "scrap-box", "name": "Scrap Box", "images": "scrap_box.jpg" },
        { "id": "memory-box", "name": "Memory Box", "images": "memory_box.jpg" },
        { "id": "cards-box", "name": "Cards Box", "images": "cards.jpg" },
        { "id": "gift-hampers", "name": "Gift Hampers", "images": "gift_hampers.png" },
        { "id": "photo-frames", "name": "Photo Frames", "images": "photo_frames.png" },
        { "id": "explosion-box", "name": "Explosion Box", "images": "explosion_box.png" }]
    return (
        <>
            <div className='home' id='HOME'>
                <div className='home-box m-5'>
                    <h1 className='name'>MINNALE</h1>
                    <h2 className='slogan'>Let's smile together</h2>
                    <div className='flex items-center'>
                        <h2 className='description' >Handmade<br />Paper<br /> Craft</h2>
                        <div><img src='assets/home/girl.png' alt='Girl' /></div>
                    </div>
                </div>
                <h2>PRODUCTS</h2>
                <div className="products">
                    {products.map(product => (
                        <a href={'#' + product.id} >
                            <div className="product-container">
                                <div className='product-name'>{product.name}</div>
                                <img src={'assets/home/products/' + product.images} alt={product.name} width="100%" height={"100%"} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Home