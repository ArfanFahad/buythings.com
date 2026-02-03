import heroImage from "../../../assets/heroImage.jpg";
import Car from "./components/Car";
import Laptop from "./components/Laptop";
import Mobile from "./components/Mobile";
import Motorcycle from "./components/Motorcycle";
import { CarIcon, LaptopIcon, PhoneIcon, MotorbikeIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <div className="p-6">
        <div className="relative mb-8">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
          {/* text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
              Welcome to our store
            </h1>
          </div>
        </div>

        <section className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl font-semibold">Featured category</h1>
          <p>Get Your Desired Product from Featured Category!</p>
        </section>

        <section className="flex items-center justify-center mt-10 gap-5">
          <div className="bg-gray-200 py-2 px-10 rounded hover:-translate-y-6 duration-300">
            <PhoneIcon size={50} />
            <p className="text-center mt-4 font-semibold">Mobile</p>
          </div>

          <div className="bg-gray-200 py-2 px-10 rounded hover:-translate-y-6 duration-300">
            <LaptopIcon size={50} />
            <p className="text-center mt-4 font-semibold">Laptop</p>
          </div>

          <div className="bg-gray-200 py-2 px-10 rounded hover:-translate-y-6 duration-300">
            <CarIcon size={50} />
            <p className="text-center mt-4 font-semibold">Car</p>
          </div>

          <div className="bg-gray-200 py-2 px-10 rounded hover:-translate-y-6 duration-300">
            <MotorbikeIcon size={50} />
            <p className="text-center mt-4 font-semibold">Motorcycle</p>
          </div>
        </section>

        <div className="">
          <div>
            <h2>Mobile</h2>
            <Mobile />
          </div>

          <div>
            <h2>Laptop</h2>
            <Laptop />
          </div>

          <div>
            <h2>Car</h2>
            <Car />
          </div>

          <div>
            <h2>Motorcycle</h2>
            <Motorcycle />
          </div>
        </div>
      </div>
    </>
  );
}
