import Layout from "../components/dashboard/Layout";
import UploadCard from "../components/dashboard/UploadCard";

function Upload() {
  return (
    <Layout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Upload PDF
        </h1>

        <p className="text-gray-400 mt-2">
          Upload documents to analyze with AI.
        </p>

      </div>

      <UploadCard />

    </Layout>
  );
}

export default Upload;