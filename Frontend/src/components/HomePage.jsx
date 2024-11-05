// import { useNavigate } from "react-router-dom";


// const Home = () => {
//   const naigate = useNavigate();

//   const handleRoleSelect = (role) => {
//     if (role === "Doctor") {
//       naigate("/signup");
//     } else if (role === "Patient") {
//       naigate("/signup");
//     } else if (role === "Staff") {
//       naigate("/signup");
//     }
//   };
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h2 className="text-3xl font-bold mb-6">Select Your Role</h2>
//       <div className="flex space-x-4">
//         <button
//           onClick={() => handleRoleSelect("Doctor")}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Doctor
//         </button>
//         <button
//           onClick={() => handleRoleSelect("Doctor")}
//           className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
//         >
//           Patient
//         </button>
//         <button
//           onClick={() => handleRoleSelect("Doctor")}
//           className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
//         >
//           Staff
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
import Navbar from "./Navbar"
// import TestimonialPage from "./Testimonial"

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <TestimonialPage /> */}
        </div>
    )
}

export default Home
