import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import product1 from "../../assets/images/1.png";
import { FaArrowLeftLong } from "react-icons/fa6";

function SingleCoffee() {
    return (
        <>
            <Header />
            {/* card */}
            <section className="bg-[url(/src/assets/images/more/11.png)] bg-center bg-no-repeat bg-cover w-full pb-[120px]">
                <div className="my-[50px] max-w-7xl mx-auto">
                    <button className="flex items-center gap-2 text-3xl text-[#374151]"><FaArrowLeftLong /><span> Back to Home</span></button>
                </div>
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-28 p-10 bg-[#F4F3F0] rounded-lg">
                    <img className="w-1/3 h-fit object-cover" src={product1} alt="" />
                    <div>
                        <h1 className="text-[#331A15] text-4xl">Niceties</h1>
                        <div className="mt-8 space-y-3 text-xl text-[#5C5B5B]">
                            <p>
                                <span className="font-bold text-black">Name:</span> Americano
                                Coffee
                            </p>
                            <p>
                                <span className="font-bold text-black">Chef:</span> Mr. Matin
                                Paul
                            </p>
                            <p>
                                <span className="font-bold text-black">Supplier:</span> Cappu
                                Authorizer
                            </p>
                            <p>
                                <span className="font-bold text-black">Taste:</span> Sweet and
                                hot
                            </p>
                            <p>
                                <span className="font-bold text-black">Category:</span>{" "}
                                Americano
                            </p>
                            <p>
                                <span className="font-bold text-black">Details:</span> Espresso
                                with hot water
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    );
}

export default SingleCoffee;
