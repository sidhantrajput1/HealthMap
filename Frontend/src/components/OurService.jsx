import { FaBlog, FaChalkboard, FaChartPie,  FaLocationArrow, FaSignature, FaUncharted } from "react-icons/fa";
const OurService = () => {
  return (
    <div className="mt-28 mx-auto max-w-screen-xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-5xl font-semibold font-serif">Our Service</h3>
          <p>
            Real-time tracking solutions designed to optimize hospital logistics by monitoring critical assets and staff.
          </p>
        </div>
        <div>
          <button className="p-3 bg-green-400 text-pretty">
            Book an Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12 mt-10 ">
        <div className="mb-4 flex flex-col gap-4 justify-center items-center p-6 bg-green-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm">
          <div className="bg-green-100 p-4 rounded-full">
            <FaLocationArrow className="w-16 h-16 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Real-Time Asset Tracking
            </h3>
            <p className="text-gray-600 mt-2">
              Track the live location of hospital assets for efficient logistics.
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-4 justify-center items-center p-6 bg-green-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm">
          <div className="bg-green-100 p-4 rounded-full">
            <FaSignature className="w-16 h-16 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Asset Management
            </h3>
            <p className="text-gray-600 mt-2">
              Manage, add, and update hospital assets with ease.
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-4 justify-center items-center p-6 bg-green-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm">
          <div className="bg-green-100 p-4 rounded-full">
            <FaUncharted className="w-16 h-16 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Alerts & Notifications
            </h3>
            <p className="text-gray-600 mt-2">
              Receive critical alerts for asset misplacements or unauthorized movements.
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-4 justify-center items-center p-6 bg-green-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm">
          <div className="bg-green-100 p-4 rounded-full">
            <FaChartPie className="w-16 h-16 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Analytics & Reporting
            </h3>
            <p className="text-gray-600 mt-2">
              Generate detailed reports on asset usage and logistics.
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-4 justify-center items-center p-6 bg-green-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm">
          <div className="bg-green-100 p-4 rounded-full">
            <FaChalkboard className="w-16 h-16 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Role-Based Access Control
            </h3>
            <p className="text-gray-600 mt-2">
              Ensure secure access to data based on user roles, providing admin, manager, and staff levels.
            </p>
          </div>
        </div>
        
        <div className="mb-4 flex flex-col gap-4 justify-center items-center p-6 bg-green-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm">
          <div className="bg-green-100 p-4 rounded-full">
            <FaBlog className="w-16 h-16 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Integration with Hospital Systems
            </h3>
            <p className="text-gray-600 mt-2">
              Integrate seamlessly with other hospital systems for smooth and coordinated operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
