import { useEffect, useState } from "react";
import API from "../../services/api";
import { FaFilePdf } from "react-icons/fa";

function RecentDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await API.get("/documents");
      setDocuments(response.data.documents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Recent Documents
      </h2>

      {documents.length === 0 ? (
        <p className="text-gray-500">
          No documents uploaded yet.
        </p>
      ) : (
        documents.map((doc) => (
          <div
            key={doc._id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-3">
              <FaFilePdf className="text-red-600 text-xl" />

              <div>
                <p className="font-semibold">
                  {doc.fileName}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(doc.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecentDocuments;