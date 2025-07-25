import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
function ProductForm({ title }) {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        await fetch("http://localhost:8000/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };
    return (
        <>
            <section className="bg-[url(/src/assets/images/more/11.png)] bg-center bg-no-repeat bg-cover w-full pb-[120px]">
                <div className="my-[50px] max-w-7xl mx-auto">
                    <button className="flex items-center gap-2 text-3xl text-[#374151]">
                        <FaArrowLeftLong />
                        <Link to="/"> Back to Home</Link>
                    </button>
                </div>
                {/* content */}
                <div className="max-w-7xl mx-auto p-16 bg-[#F4F3F0] rounded-lg ">
                    <h1 className="text-center text-[#374151] text-[45px]">{title}</h1>
                    <p className="mt-8 mx-auto text-center text-lg text-[#1B1A1AB3] max-w-2xl">
                        It is a long established fact that a reader will be distraceted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using Content here.
                    </p>
                    <form onSubmit={handleFormSubmit} className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xl text-[#1B1A1ACC]" htmlFor="">
                                    Name
                                </label>
                                <input
                                    className="w-full bg-white px-7 py-4 border border-[#331A15] rounded-md mt-2"
                                    type="text"
                                    name="name"
                                    placeholder="Coffee Name"
                                />
                            </div>
                            <div>
                                <label className="mt-4 text-xl text-[#1B1A1ACC]" htmlFor="">
                                    Price
                                </label>
                                <input
                                    className="w-full bg-white px-7 py-4 border border-[#331A15] rounded-md mt-2"
                                    type="text"
                                    name="price"
                                    placeholder="price"
                                />
                            </div>

                            <div>
                                <label className="mt-4 text-xl text-[#1B1A1ACC]" htmlFor="">
                                    Supplier
                                </label>
                                <input
                                    className="w-full bg-white px-7 py-4 border border-[#331A15] rounded-md mt-2"
                                    type="text"
                                    name="supplier"
                                    placeholder="Supplier Name"
                                />
                            </div>
                            <div>
                                <label className="mt-4 text-xl text-[#1B1A1ACC]" htmlFor="">
                                    Taste
                                </label>
                                <input
                                    className="w-full bg-white px-7 py-4 border border-[#331A15] rounded-md mt-2"
                                    type="text"
                                    name="taste"
                                    placeholder="Taste"
                                />
                            </div>

                            <div>
                                <label className="mt-4 text-xl text-[#1B1A1ACC]" htmlFor="">
                                    Category
                                </label>
                                <input
                                    className="w-full bg-white px-7 py-4 border border-[#331A15] rounded-md mt-2"
                                    type="text"
                                    name="category"
                                    placeholder="Category"
                                />
                            </div>

                            <div>
                                <label className="mt-4 text-xl text-[#1B1A1ACC]" htmlFor="">
                                    Details
                                </label>
                                <input
                                    className="w-full bg-white px-7 py-4 border border-[#331A15] rounded-md mt-2"
                                    type="text"
                                    name="details"
                                    placeholder="Details"
                                />
                            </div>
                        </div>
                        <label className="mt-4 text-xl text-[#1B1A1ACC]" htmlFor="">
                            Photo URL
                        </label>
                        <input
                            className="w-full bg-white px-7 py-4 border border-[#331A15] rounded-md mt-2"
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                        />
                        <button className="mt-4 w-full bg-[#D2B48C] text-black text-2xl  py-4 rounded-md">
                            Add Coffee
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ProductForm;
