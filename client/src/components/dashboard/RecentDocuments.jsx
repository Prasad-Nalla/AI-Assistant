import { useEffect, useState } from "react";
import API from "../../services/api";

import {
  FaFilePdf,
  FaEye,
  FaTrash,
  FaClock,
} from "react-icons/fa";

function RecentDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await API.get("/documents");

      setDocuments(res.data.documents);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Delete this document?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/documents/${id}`);

    setDocuments((prev) =>
      prev.filter((doc) => doc._id !== id)
    );

    alert("Document deleted successfully");
  } catch (error) {
    console.error(error);

    alert("Delete failed");
  }
};
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Documents
      </h2>

      {documents.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-14">

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-5">
            <FaFilePdf className="text-4xl text-white" />
          </div>

          <h3 className="text-xl font-semibold text-white">
            No Documents Yet
          </h3>

          <p className="text-gray-400 text-center mt-3">
            Upload your first PDF to start chatting with AI.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {documents.map((doc) => (
            <div
              key={doc._id}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                    <FaFilePdf className="text-white text-xl" />
                  </div>

                  <div>

                    <h3 className="text-white font-semibold">
                      {doc.title || doc.fileName}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">

                      <FaClock />

                      {new Date(doc.createdAt).toLocaleDateString()}

                    </div>

                  </div>

                </div>

                <div className="flex gap-3">

                  <button
  onClick={() =>
    window.open(
      `http://localhost:5000/uploads/${doc.fileName}`,
      "_blank"
    )
  }
  className="w-10 h-10 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center"
>
  <FaEye />
</button>

                  <button
  onClick={() => handleDelete(doc._id)}
  className="w-10 h-10 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
>
  <FaTrash />
</button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default RecentDocuments;