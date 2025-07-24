import React from "react";
import logo from "../../assets/images/icons/cup.png";

function Header() {
    return (

        <>
            <div className="bg-[url(/src/assets/images/more/15.jpg)] bg-center bg-no-repeat bg-cover flex items-center justify-center gap-4 py-6">
                <img src={logo} alt="coffee cup" />
                <h1 className="text-6xl text-white font-normal">
                    Espresso Emporium
                </h1>
            </div>
        </>
    );
}

export default Header;
