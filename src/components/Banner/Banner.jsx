import React from "react";

function Banner() {
    return (
        <div className="bg-[url(/src/assets/images/more/3.png)] bg-cover bg-no-repeat bg-center h-screen flex items-center justify-end ">
            <div className="flex flex-col items-start justify-center h-full w-[55%]">
                <div className="space-y-4 mb-8">
                    <h1 className="text-white text-[55px]">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="text-white text-base max-w-2xl">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the
                        nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
                        moments and make them memorable.
                    </p>
                </div>
                <button className="bg-[#E3B577] text-black text-2xl text-center px-4 py-3">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Banner;
