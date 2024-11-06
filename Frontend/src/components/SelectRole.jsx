import { Link } from 'react-router-dom';

const SelectRole = () => {
  return (
    <div className=' bg-emerald-600 flex justify-center items-center'>
      <div className="flex flex-col items-center p-6 space-y-4 mx-auto max-w-screen-xl h-screen">
      <h2 className="text-2xl font-semibold">Select Your Role</h2>

      <div className="flex gap-4">
        <Link to="/signup/doctor">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
            Doctors
          </button>
        </Link>

        <Link to="/signup/patient">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
            Patients
          </button>
        </Link>

        <Link to="/signup/staff">
          <button className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition">
            Staff
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default SelectRole;
