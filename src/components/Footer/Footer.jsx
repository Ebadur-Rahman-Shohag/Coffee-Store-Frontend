import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-[url(/src/assets/images/more/24.jpg)] bg-center bg-no-repeat bg-cover w-full p-10'>
                <p className="text-center text-white text-2xl">
                    &copy; {new Date().getFullYear()} Coffee Store. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer