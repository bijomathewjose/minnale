import React from 'react'
import './product.css'
import products from './product-data.json'
const Products = () => {
    return (
        <div className='next-product-container' id='Products'>
            <h2 className='heading2'>Products</h2>
            <div className='flex flex-wrap gap-2 justify-center'>{products.map(product => (
                <>
                    <div className='product w-[95%] md:w-[60%]' id={product.id}>
                        <h3 className='heading3'>{product.name}</h3>
                        <div className='hidden sm:flex'>
                            <p className='prod-content'>{product.content}</p>
                            {product.link && (<iframe width="300" src={"https://www.youtube.com/embed/" + product.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
                            }</div>
                        <div className='flex flex-col items-center sm:hidden'>
                            {product.link && (<iframe width="300" src={"https://www.youtube.com/embed/" + product.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
                            }<p className='prod-content'>{product.content}</p>
                        </div>
                        <p className='prod-price flex justify-around border-y-2 my-2'>{product.price.map(type => (
                            <div className='flex flex-col items-start my-5'>
                                <span>{type.name}</span>
                                <span> Starting Price : {type.value}</span>
                            </div>
                        ))}</p>
                        <div className='image-container'>
                            <div className='flex  flex-wrap gap-3 justify-center'>
                                {product.pics.map((pic) => (
                                    <div className='flex overflow-hidden rounded-lg w-36  border-2 border-yellow-500'>
                                        <img className=' object-cover' src={pic} alt='' height={"100%"} width="100%" />
                                    </div>
                                ))}
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