import React from "react";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ProductForm from "../../components/ProductForm/ProductForm";

function AddProduct() {
    return (
        <>
            <Header />
            <ProductForm title="Add Coffee" />
            <Contact />
            <Footer />
        </>
    );
}

export default AddProduct;
