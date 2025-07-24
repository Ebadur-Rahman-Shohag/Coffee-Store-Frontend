import React from "react";
import icon1 from "../../assets/images/icons/1.png";
import icon2 from "../../assets/images/icons/2.png";
import icon3 from "../../assets/images/icons/3.png";
import icon4 from "../../assets/images/icons/4.png";

function Service() {
    return (
        <>
            <section className="py-14 bg-[#ECEAE3]">
                <div className="max-w-7xl mx-auto flex items-center gap-10">
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <img src={icon1} alt="icon" />
                        <h2 className="text-4xl text-[#331A15]">Awesome Aroma</h2>
                        <p className="text-base text-[#1B1A1A]">
                            You will definitely be a fan of the design & aroma of your coffee
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <img src={icon2} alt="icon" />
                        <h2 className="text-4xl text-[#331A15]">Bold Body</h2>
                        <p className="text-base text-[#1B1A1A">
                            Experience the rich and bold flavors that our coffee offers
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <img src={icon3} alt="icon" />
                        <h2 className="text-4xl text-[#331A15]">Smooth Finish</h2>
                        <p className="text-base text-[#1B1A1A">
                            Enjoy a smooth and satisfying finish with every sip
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <img src={icon4} alt="icon" />
                        <h2 className="text-4xl text-[#331A15]">Freshly Brewed</h2>
                        <p className="text-base text-[#1B1A1A">
                            Our coffee is brewed fresh to ensure the best taste
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;
