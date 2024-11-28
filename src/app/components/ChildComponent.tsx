import React from "react";
import Image from "next/image";

// Define the TypeScript interface for individual car properties
interface CarProps {
    carName: string;
    price: string;
    rating: string;
    reviews: string;
}

// Define the TypeScript interface for the props passed to ChildComponent
interface ChildComponentProps {
    cars: CarProps[]; // Array of Car objects
}

const ChildComponent: React.FC<ChildComponentProps> = ({ cars }) => {
    return (
        <div className="flex py-5 px-14 gap-4 flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-nowrap lg:w-full">
            {/* Iterate over the cars array to display details */}
            {cars.map((car, index) => (
                <div key={index} className="car-card text-center hover:scale-105 transform transition duration-300 ease-in-out ">
                    {/* Dynamic Image Section */}
                    <Image
                        src={`/images/car${index + 1}.jpg`} // Dynamic image path
                        alt={`${car.carName} image`}
                        width={300}
                        height={300}
                    />

                    {/* Car Details */}
                    <h2 className="text-blue-900 font-bold py-3">{car.carName}</h2>
                    <p className="text-green-600"> {car.price}</p>
                    <span className="text-orange-500"> {car.rating}</span>
                    <span className="text-gray-500 font-bold pl-3"> {car.reviews}</span>
                </div>
            ))}
        </div>
    );
};
1
export default ChildComponent;
