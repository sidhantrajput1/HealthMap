import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-600">
      <div className="mt-16 mx-auto max-w-screen-xl font-serif">
        <div className="flex flex-col">
          <div className="flex justify-between text-xl bg-emerald-300/35 p-6 font-serif">
            <h3>Stay Connected with Us on Social Media</h3>
            <div className="flex gap-4">
              <FaInstagram />
              <FaFacebook />
              <FaYoutube />
            </div>
          </div>
          <div className="bg-emerald-300/60 p-6 flex gap-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-black text-xl font-bold">HealthMap</h3>
              <p className="max-w-md">
                HealthMap is a real-time tracking system optimizing hospital logistics by providing visibility into critical hospital assets and staff locations.
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-sm mb-4 max-w-xs">
                  To streamline hospital operations by ensuring real-time tracking and management of critical resources, enhancing overall healthcare efficiency.
                </p>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white transition"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-200">
                    Real-Time Asset Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-200">
                    Alerts & Notifications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-200">
                    Analytics & Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-200">
                    Role-Based Access Control
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-200">
                    Predictive Asset Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-sm">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p className="text-sm">
                  <strong>Email:</strong> support@healthmap.com
                </p>
                <p className="text-sm">
                  <strong>Address:</strong> 123 Health St., City, Country
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-emerald-700 pt-6 text-center text-sm">
            <p>&copy; 2024 HealthMap. All rights reserved.</p>
            <p className="mt-2">
              <a
                href="#"
                className="text-emerald-200 hover:text-white transition"
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="#"
                className="text-emerald-200 hover:text-white transition"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
