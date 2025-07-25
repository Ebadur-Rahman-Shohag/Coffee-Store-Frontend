import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useState } from 'react'
import { Link } from 'react-router'


function Products({ coffeeData }) {
    const [products, setProducts] = useState(coffeeData)
    return (
        <section className='mt-[120px] bg-[url(/src/assets/images/more/1.png)] bg-cover bg-no-repeat py-10 px-4'>
            {/* title and subtitle */}
            <div className='text-center text-black'>
                <p className='text-xl '>--- Sip & Savor ---</p>
                <h1 className='text-[55px] text-[#331A15]'>Our Popular Products</h1>
            </div>
            {/* button */}
            <div className='text-center mt-4 text-2xl text-white'>
                <Link to='/addcoffee' className='bg-[#E3B577] px-4 py-3 rounded-sm'>Add Coffee</Link>
            </div>
            {/* products container */}
            <div className='grid grid-cols-2 grid-rows-3 gap-4 mt-12 max-w-7xl mx-auto'>
                {/* products card */}
                {products.map((coffee) => <ProductCard key={coffee.id} coffee={coffee} products={products} setProducts={setProducts} />)}
            </div>
        </section>
    )
}

export default Products