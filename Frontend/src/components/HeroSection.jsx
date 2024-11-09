import { Link } from "react-router-dom";
// import SelectRole from "./SelectRole";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-36 grid grid-cols-2 font-serif justify-center">
      <div className="flex flex-col gap-8 items-start justify-center">
        <h3 className="text-6xl font-semibold font-serif">
          Get Appointment Easy and Fast
        </h3>
        <p className="">
        Experience the convenience of booking appointments in just a few clicks. Our platform allows you to select your role and get started right away.
        </p>
        <Link to="/select-role">
          <button className="p-3 bg-green-400 text-pretty">
            Get Started <span>&#x2192;</span>
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-green-300 rounded-s-full flex items-center justify-center">
          <p className="p-10">
          Our expert medical professionals are here to provide top-notch care for you and your family. From consultations to treatments, we’ve got you covered.
          </p>
          <img
            className=""
            src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
