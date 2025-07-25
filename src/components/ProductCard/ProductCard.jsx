import React from "react";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

function ProductCard({ coffee, products, setProducts }) {
    const { name, price, supplier, photo } = coffee;

    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });
        if (result.isConfirmed) {
            fetch(`http://localhost:8000/coffee/${coffee._id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        setProducts(products.filter((coffee) => coffee._id !== data._id));
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    }
                });
        }
    };
    return (
        <>
            <div className="bg-[#F5F4F1]  flex items-center justify-evenly py-2 rounded-lg">
                <img
                    className="w-1/3 h-full object-cover rounded-lg "
                    src={photo}
                    alt="product-image"
                />
                <div className="space-y-2">
                    <p className="text-[#5C5B5B] text-2xl">
                        <span className="text-black font-bold">Name:</span> {name}
                    </p>
                    <p className="text-[#5C5B5B] text-2xl">
                        <span className="text-black font-bold">Supplier:</span> {supplier}
                    </p>
                    <p className="text-[#5C5B5B] text-2xl">
                        <span className="text-black font-bold">Price:</span> {price} Taka
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-white text-2xl">
                    <button className="bg-[#D2B48C] p-2 rounded-sm">
                        <GrFormView />
                    </button>
                    <button className="bg-[#3C393B] p-2 rounded-sm">
                        <CiEdit />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-[#EA4744] p-2 rounded-sm"
                    >
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
