import React from "react";
import logo from "../../assets/images/icons/cup.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
    return (
        <>
            <section className="bg-[url(/src/assets/images/more/13.jpg)] bg-center bg-no-repeat bg-cover w-full">
                {/* container */}
                <div className="flex items-center justify-between gap-10  max-w-7xl mx-auto px-10 pt-20 pb-14">
                    {/* left side */}
                    <div className="space-y-8">
                        <div className="space-y-8">
                            <img src={logo} alt="logo" />
                            <h1 className="text-[#331A15] text-[45px]">Espresso Emporium</h1>
                            <p className="text-[#1B1A1A] text-xl max-w-xl">
                                Always ready to be your friend. Come & Contact with us to share
                                your memorable moments, to share with your best companion.
                            </p>
                        </div>
                        {/* social media links */}
                        <div className="flex items-center gap-4 text-5xl">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookSquare />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagramSquare />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        {/* get in touch */}
                        <div>
                            <h1 className="text-[#331A15] text-[45px]">Get In Touch</h1>
                            <div className="mt-8 space-y-4 text-xl">
                                <p className="flex items-center gap-2">
                                    <span>
                                        <FaPhoneAlt />
                                    </span>
                                    <span>+88 01533 333 333</span>{" "}
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>
                                        <IoIosMail />
                                    </span>
                                    <span>info@gmail.com</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>
                                        <FaLocationDot />
                                    </span>
                                    <span>72, Wall street, King Road, Dhaka</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="space-y-8">
                        <h1 className="text-[#331A15] text-[45px]">Connect with Us</h1>
                        <form className="flex flex-col gap-4" >
                            <input className="bg-white px-7 py-4 border border-[#331A15] rounded-md" type="text" placeholder="Name" />
                            <input className="bg-white px-7 py-4 border border-[#331A15] rounded-md" type="email" placeholder="Email" />
                            <textarea className="bg-white px-7 py-12 border border-[#331A15] rounded-md" placeholder="Message"></textarea>
                            <button className="border border-black rounded-full px-4 py-2 shadow-lg w-1/2">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
