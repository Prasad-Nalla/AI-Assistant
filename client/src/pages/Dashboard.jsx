import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import UploadCard from "../components/dashboard/UploadCard";
import RecentDocuments from "../components/dashboard/RecentDocuments";
import StatsCard from "../components/dashboard/StatsCard";

import {
  FaFilePdf,
  FaRobot,
  FaCloudUploadAlt,
  FaBrain,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-[#111827] to-[#1F2937] flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatsCard
              title="Documents"
              value="12"
              icon={<FaFilePdf />}
              color="from-cyan-500 to-blue-500"
            />

            <StatsCard
              title="AI Chats"
              value="36"
              icon={<FaRobot />}
              color="from-violet-500 to-fuchsia-500"
            />

            <StatsCard
              title="Uploads"
              value="12"
              icon={<FaCloudUploadAlt />}
              color="from-emerald-500 to-teal-500"
            />

            <StatsCard
              title="AI Summaries"
              value="18"
              icon={<FaBrain />}
              color="from-orange-500 to-pink-500"
            />

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

            {/* Upload */}
            <div className="xl:col-span-2">
              <UploadCard />
            </div>

            {/* Recent Documents */}
            <div>
              <RecentDocuments />
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;