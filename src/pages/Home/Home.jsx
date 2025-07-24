import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Service from '../../components/Service/Service'
import Products from '../../components/Products/Products'
import Gallery from '../../components/Gallery/Gallery'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Service />
            <Products />
            <Gallery />
            <Contact />
            <Footer />
        </>
    )
}

export default Home