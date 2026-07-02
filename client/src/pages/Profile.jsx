import Layout from "../components/dashboard/Layout";
import {
  FaUserCircle,
  FaFilePdf,
  FaRobot,
  FaBrain,
  FaEdit,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";

function Profile() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-white">
          My Profile
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your account information
        </p>

        {/* Profile Card */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}

            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 flex items-center justify-center shadow-2xl">

              <FaUserCircle className="text-7xl text-white" />

            </div>

            {/* Info */}

            <div>

              <h2 className="text-3xl font-bold text-white">
                {user.name || "User"}
              </h2>

              <p className="text-cyan-400 mt-2">
                {user.email}
              </p>

              <div className="inline-block mt-4 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                AI Document Assistant User
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

            <FaFilePdf className="text-cyan-400 text-3xl" />

            <h2 className="text-white text-3xl font-bold mt-4">
              12
            </h2>

            <p className="text-gray-400">
              Documents
            </p>

          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

            <FaRobot className="text-violet-400 text-3xl" />

            <h2 className="text-white text-3xl font-bold mt-4">
              4
            </h2>

            <p className="text-gray-400">
              AI Chats
            </p>

          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

            <FaBrain className="text-orange-400 text-3xl" />

            <h2 className="text-white text-3xl font-bold mt-4">
              10
            </h2>

            <p className="text-gray-400">
              AI Summaries
            </p>

          </div>

        </div>

        {/* Actions */}

        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl text-white font-semibold mb-6">
            Account Settings
          </h2>

          <div className="space-y-4">

            <button className="w-full flex items-center gap-4 px-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white">

              <FaEdit />

              Edit Profile

            </button>

            <button className="w-full flex items-center gap-4 px-6 py-4 rounded-xl bg-violet-500 hover:bg-violet-600 transition text-white">

              <FaLock />

              Change Password

            </button>

            <button className="w-full flex items-center gap-4 px-6 py-4 rounded-xl bg-red-500 hover:bg-red-600 transition text-white">

              <FaSignOutAlt />

              Logout

            </button>

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Profile;