import React from 'react'
import product1 from "../../assets/images/1.png"
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function ProductCard() {
    return (
        <>
            <div className='bg-[#F5F4F1]  flex items-center justify-evenly py-2 rounded-lg'>
                <img src={product1} alt="product-image" />
                <div className='space-y-2'>
                    <p className='text-[#5C5B5B] text-2xl'><span className='text-black font-bold'>Name:</span> Americano Coffee</p>
                    <p className='text-[#5C5B5B] text-xl'><span className='text-black font-bold'>Chef:</span> Mr. Matin Paul</p>
                    <p className='text-[#5C5B5B] text-xl'><span className='text-black font-bold'>Price:</span> 890 Taka</p>
                </div>
                <div className='flex flex-col gap-2 text-white text-2xl'>
                    <button className='bg-[#D2B48C] p-2 rounded-sm'><GrFormView /></button>
                    <button className='bg-[#3C393B] p-2 rounded-sm'><CiEdit /></button>
                    <button className='bg-[#EA4744] p-2 rounded-sm'><MdDeleteOutline /></button>
                </div>
            </div>
        </>
    )
}

export default ProductCard