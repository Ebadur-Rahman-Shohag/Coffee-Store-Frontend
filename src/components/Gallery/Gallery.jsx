import React from "react";
import coffee1 from "../../assets/images/cups/Rectangle 9.png";
import coffee2 from "../../assets/images/cups/Rectangle 10.png";
import coffee3 from "../../assets/images/cups/Rectangle 11.png";
import coffee4 from "../../assets/images/cups/Rectangle 12.png";
import coffee5 from "../../assets/images/cups/Rectangle 13.png";
import coffee6 from "../../assets/images/cups/Rectangle 14.png";
import coffee7 from "../../assets/images/cups/Rectangle 15.png";
import coffee8 from "../../assets/images/cups/Rectangle 16.png";
function Gallery() {
    return (
        <>
            <section className="py-[120px]">
                <div className="text-center text-black space-y-2">
                    <p className="text-xl text-[#1B1A1A] ">Follow us</p>
                    <h1 className="text-[55px] text-[#331A15]">Follow Us on Instagram</h1>
                </div>
                {/* gallery container */}
                <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-7xl mx-auto mt-12">
                    <img className="w-full h-fit object-cover" src={coffee1} alt="" />
                    <img className="w-full h-fit object-cover" src={coffee2} alt="" />
                    <img className="w-full h-fit object-cover" src={coffee3} alt="" />
                    <img className="w-full h-fit object-cover" src={coffee4} alt="" />
                    <img className="w-full h-fit object-cover" src={coffee5} alt="" />
                    <img className="w-full h-fit object-cover" src={coffee6} alt="" />
                    <img className="w-full h-fit object-cover" src={coffee7} alt="" />
                    <img src={coffee8} alt="" />
                </div>
            </section>
        </>
    );
}

export default Gallery;
