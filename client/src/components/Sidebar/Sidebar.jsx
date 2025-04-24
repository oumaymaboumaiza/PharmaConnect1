import React from "react";
import { Link } from "react-router-dom";
import { 
  FaTachometerAlt, 
  FaClinicMedical, 
  FaUserInjured, 
  FaFilePrescription,
  FaPills,
  FaTruck,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-6 fixed">
      {/* Logo & Title */}
      <div>
        <h1 className="text-2xl font-bold mb-8">PharmaConnect</h1>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <Link 
            to="/dashboard" 
            className="flex items-center p-2 hover:bg-gray-800 rounded-md transition-colors"
          >
            <FaTachometerAlt className="mr-3" />
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/pharmacies" 
            className="flex items-center p-2 hover:bg-gray-800 rounded-md transition-colors"
          >
            <FaClinicMedical className="mr-3" />
            <span>Pharmacies</span>
          </Link>
          
          <Link 
            to="/patients" 
            className="flex items-center justify-between p-2 hover:bg-gray-800 rounded-md transition-colors"
          >
            <div className="flex items-center">
              <FaUserInjured className="mr-3" />
              <span>Patients</span>
            </div>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">12</span>
          </Link>
          
          <Link 
            to="/ordonnances" 
            className="flex items-center p-2 hover:bg-gray-800 rounded-md transition-colors"
          >
            <FaFilePrescription className="mr-3" />
            <span>Ordonnances</span>
          </Link>
          
          <Link 
            to="/stocks" 
            className="flex items-center p-2 hover:bg-gray-800 rounded-md transition-colors"
          >
            <FaPills className="mr-3" />
            <span>Stocks</span>
          </Link>
          
          <Link 
            to="/fournisseurs" 
            className="flex items-center p-2 hover:bg-gray-800 rounded-md transition-colors"
          >
            <FaTruck className="mr-3" />
            <span>Fournisseurs</span>
          </Link>
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <h2 className="text-xs font-semibold mb-2 text-gray-400 uppercase tracking-wider">ACCOUNT</h2>
        <Link 
          to="/profile" 
          className="flex items-center p-2 hover:bg-gray-800 rounded-md transition-colors text-sm"
        >
          <FaUserCircle className="mr-3" />
          <span>Profile</span>
        </Link>
        <Link 
          to="/logout" 
          className="flex items-center p-2 hover:bg-gray-800 rounded-md transition-colors text-sm text-red-400"
        >
          <FaSignOutAlt className="mr-3" />
          <span>Logout</span>
        </Link>

        <div className="mt-6 text-xs text-gray-400">
          <p className="font-semibold">Emergency Hotline:</p>
          <p>+91 -999 999 9999</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;