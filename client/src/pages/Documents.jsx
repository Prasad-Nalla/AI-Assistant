import Layout from "../components/dashboard/Layout";
import RecentDocuments from "../components/dashboard/RecentDocuments";

function Documents() {
  return (
    <Layout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Documents
        </h1>

        <p className="text-gray-400 mt-2">
          Manage all your uploaded documents.
        </p>

      </div>

      <div className="mb-8">

        <input
          type="text"
          placeholder="Search documents..."
          className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-500"
        />

      </div>

      <RecentDocuments />

    </Layout>
  );
}

export default Documents;