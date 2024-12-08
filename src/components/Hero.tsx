
import Image from "next/image";

function Hero() {
    return (
        <div className="flex-1 p-4">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-start">
                {/* Left Section */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mt-8 lg:mt-16">
                        Discover Your Perfect Pair
                    </h1>
                    <h2 className="mt-4 sm:mt-6 md:mt-8 font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
                       Explore Comfort, Quality, and Style for Every Step
                    </h2>
                    <p className="mt-4 sm:mt-6 md:mt-8 font-medium text-sm sm:text-base md:text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
                        We offer a curated collection of shoes designed to combine style, comfort, and durability. Whether you are looking for the perfect pair for a night out, a rigorous workout, or everyday wear, we have something for everyone. Our commitment to quality ensures that every shoe is crafted with care, using premium materials to keep you moving confidently. Step into a world of endless possibilities and find your perfect fit today!
                    </p>
                    <button className="py-2 px-4 bg-pink-700 text-white hover:bg-pink-600 hover:cursor-pointer mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg rounded">
                        Shop Now
                    </button>
                </div>
                
                {/* Right Section */}
                <div className="mt-6 sm:mt-8 lg:mt-16 flex justify-center lg:justify-start w-full lg:w-auto">
                    <Image
                        src="/images/image2.webp"
                        alt="cosmetic"
                        height={900}
                        width={500}
                        className="object-contain max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;