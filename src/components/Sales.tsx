import Image from "next/image";
function Sale() {
    return (
        <main>
            <div className="w-full sm:h-full md:h-[500px] flex justify-center items-center mt-10">
                <div className="w-[92%] h-full">
                    <div>
                        <span className="border-l-8 border-blue-700 text-blue-700 mb-5 font-bold">Todays</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-5">Flash Sale</h2>
                    </div>
                    {/* Products */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-between mt-7">
                        <div className="w-[45%] sm:w-[250px] h-auto bg-blue-500">
                            <Image src={"/images/download1.jpg"} alt={"shoe"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">code 6790</span>
                                <span className="font-bold text-sm sm:text-base">PKR 2800</span>
                            </div>
                        </div>
                        <div className="w-[45%] sm:w-[250px] h-auto bg-blue-500">
                            <Image src={"/images/download02.jpg"} alt={"shoes"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">code 6784</span>
                                <span className="font-bold text-sm sm:text-base">PKR 3000</span>
                            </div>
                        </div>
                        <div className="w-[45%] sm:w-[250px] h-auto bg-blue-500">
                            <Image src={"/images/download3.jpg"} alt={"sohess"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">code 4590</span>
                                <span className="font-bold text-sm sm:text-base">PKR 4600</span>
                            </div>
                        </div>
                        <div className="w-[45%] sm:w-[250px] h-auto bg-blue-500">
                            <Image src={"/images/download4.jpg"} alt={"shoesss"} width={250} height={150} />
                            <div className="flex flex-col p-2">
                                <span className="font-bold text-sm sm:text-base">code 5908</span>
                                <span className="font-bold text-sm sm:text-base">PKR 5200</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button className="py-2 px-5 bg-blue-700 rounded-md text-white">View All Products</button>
            </div>
        </main>
    );
}
export default Sale;