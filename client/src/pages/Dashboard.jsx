import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <div className="bg-white rounded-xl shadow p-8">

            <h1 className="text-3xl font-bold">
              Welcome 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Upload your PDF and start chatting with AI.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;