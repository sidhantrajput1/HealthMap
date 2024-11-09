// client/src/components/HospitalMap.js
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "../api";

function HospitalMap() {
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("/departments");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "600px" }}
        center={{ lat: 40.7128, lng: -74.0060 }} // Set this to hospital's center
        zoom={17}
      >
        {departments.map((dept) => (
          <Marker
            key={dept._id}
            position={dept.coordinates}
            onClick={() => setSelectedDept(dept)}
          />
        ))}
        {selectedDept && (
          <InfoWindow
            position={selectedDept.coordinates}
            onCloseClick={() => setSelectedDept(null)}
          >
            <div>
              <h4>{selectedDept.name}</h4>
              <p>{selectedDept.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default HospitalMap;
