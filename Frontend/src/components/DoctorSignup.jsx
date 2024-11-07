// DoctorSignup.js

import { useState } from "react";
import axios from "axios";

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "Male",
    dateOfBirth: "",
    address: "",
    specialization: "",
    qualifications: "",
    yearsOfExperience: "",
    consultationFee: "",
    schedule: "",
    hospital: "",
    licenseNumber: "",
    availability: true,
    languages: "",
    emergencyContact: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/signup", {
        ...formData,
        qualifications: formData.qualifications
          .split(",")
          .map((item) => item.trim()),
        languages: formData.languages.split(",").map((item) => item.trim()),
        location: {
          latitude: parseFloat(formData.latitude),
          longitude: parseFloat(formData.longitude),
        },
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response ? error.response.data.error : "Error signing up");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-emerald-600">
      <form
        onSubmit={handleSubmit}
        className="  bg-green-400 p-8 shadow-lg rounded-lg max-h-full w-9/12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Doctor Signup
        </h2>

        <div className="flex gap-8">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />
        </div>
        <div className="flex gap-8">
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />
        </div>

        <div className="flex gap-8">
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="specialization"
            type="text"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="qualifications"
            type="text"
            placeholder="Qualifications (comma-separated)"
            value={formData.qualifications}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />
        </div>

        <div className="flex gap-8">
          <input
            name="yearsOfExperience"
            type="number"
            placeholder="Years of Experience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="consultationFee"
            type="number"
            placeholder="Consultation Fee"
            value={formData.consultationFee}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="schedule"
            type="text"
            placeholder="Schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />
        </div>

        <div className="flex gap-8">
          <input
            name="hospital"
            type="text"
            placeholder="Hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="licenseNumber"
            type="text"
            placeholder="License Number"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="languages"
            type="text"
            placeholder="Languages (comma-separated)"
            value={formData.languages}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />
        </div>
        <div className="flex gap-8">
          <input
            name="emergencyContact"
            type="text"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="latitude"
            type="number"
            placeholder="Latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />

          <input
            name="longitude"
            type="number"
            placeholder="Longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default DoctorSignup;
