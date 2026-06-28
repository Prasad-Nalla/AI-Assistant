import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaUpload,
  FaRobot,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          AI Assistant
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Chat with your PDFs
        </p>
      </div>

      <nav className="flex-1 p-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/documents"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaFileAlt />
          Documents
        </Link>

        <Link
          to="/upload"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaUpload />
          Upload PDF
        </Link>

        <Link
          to="/chat"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaRobot />
          AI Chat
        </Link>

      </nav>

      <div className="p-4 border-t border-slate-700">

        <button
          className="flex items-center gap-3 w-full p-3 rounded-lg bg-red-600 hover:bg-red-700"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;