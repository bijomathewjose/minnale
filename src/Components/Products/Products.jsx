import React from 'react'
import './product.css'
const Products = () => {
    const products = [
        { "id": "scrap-box", "name": "Scrap Box", "images": "scrap_box.jpg", "price": "₹500", "content": "Scrapbooking is a method of preserving, presenting and arranging personal and family history in the form of a book, box or card. Typical memorabilia include photographs, printed media, and artwork." },
        { "id": "memory-box", "name": "Memory Box", "images": "memory_box.jpg", "price": "₹500", "content": "Scrapbooking is a method of preserving, presenting and arranging personal and family history in the form of a book, box or card. Typical memorabilia include photographs, printed media, and artwork." },
        { "id": "cards-box", "name": "Cards Box", "images": "cards.jpg", "price": "₹500", "content": "Scrapbooking is a method of preserving, presenting and arranging personal and family history in the form of a book, box or card. Typical memorabilia include photographs, printed media, and artwork." },
        { "id": "gift-hampers", "name": "Gift Hampers", "images": "gift_hampers.png", "price": "₹500", "content": "Scrapbooking is a method of preserving, presenting and arranging personal and family history in the form of a book, box or card. Typical memorabilia include photographs, printed media, and artwork." },
        { "id": "photo-frames", "name": "Photo Frames", "images": "photo_frames.png", "price": "₹500", "content": "Scrapbooking is a method of preserving, presenting and arranging personal and family history in the form of a book, box or card. Typical memorabilia include photographs, printed media, and artwork." },
        { "id": "explosion-box", "name": "Explosion Box", "images": "explosion_box.png", "price": "₹500", "content": "Scrapbooking is a method of preserving, presenting and arranging personal and family history in the form of a book, box or card. Typical memorabilia include photographs, printed media, and artwork." }]
    return (
        <div className='next-product-container' id='PRODUCTS'>
            <h2 className='heading2'>Products</h2>
            <div className='flex flex-wrap gap-2 justify-center'>{products.map(product => (
                <>
                    <div className='product w-[95%] md:w-[60%]' id='scrap-box'>
                        <h3 className='heading3'>{product.name}</h3>
                        <div className='hidden sm:flex'>
                            <p className='prod-content'>{product.content}</p>
                            <iframe width="300" src="https://www.youtube.com/embed/qJZKynM7BQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='flex flex-col items-center sm:hidden'>
                            <iframe width="300" src="https://www.youtube.com/embed/qJZKynM7BQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p className='prod-content'>{product.content}</p>
                        </div>
                        <p className='prod-price'>Base Price : {product.price}</p>
                        <div className='image-container'>
                            <div className='w-full flex gap-3'>
                                <div ><img className='rounded-lg' src='assets/products/backAbout.jpg' alt='' height={"100%"} width="100%" /></div>
                                <div ><img className='rounded-lg' src='assets/products/backAbout.jpg' alt='' height={"100%"} width="100%" /></div>
                                <div ><img className='rounded-lg' src='assets/products/backAbout.jpg' alt='' height={"100%"} width="100%" /></div>
                                <div ><img className='rounded-lg' src='assets/products/backAbout.jpg' alt='' height={"100%"} width="100%" /></div>
                                <div ><img className='rounded-lg' src='assets/products/backAbout.jpg' alt='' height={"100%"} width="100%" /></div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            </div>
        </div >
    )
}

export default Products