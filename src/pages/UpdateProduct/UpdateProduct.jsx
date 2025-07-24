import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import ProductForm from '../../components/ProductForm/ProductForm'

function UpdateProduct() {
    return (
        <>
            <Header />
            <ProductForm title="Update Coffee" />
            <Contact />
            <Footer />
        </>
    )
}

export default UpdateProduct