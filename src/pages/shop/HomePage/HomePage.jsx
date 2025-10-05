import heroImage from "../../../assets/heroImage.jpg";
import Mobile from "./components/Mobile";
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
        <div className="">
          <div>
            <h2>Mobile</h2>
            <Mobile />
          </div>

          <div>
            <h2>Laptop</h2>
          </div>

          <div>
            <h2>Car</h2>
          </div>

          <div>
            <h2>Motorcycle</h2>
          </div>
        </div>
      </div>
    </>
  );
}
