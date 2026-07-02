import { useEffect, useState } from "react";
import API from "../../services/api";

function DocumentSelector({
  selectedDocument,
  setSelectedDocument,
}) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await API.get("/documents");
      setDocuments(res.data.documents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-6">

      <label className="block text-white mb-2 font-semibold">
        Select Document
      </label>

      <select
        value={selectedDocument || ""}
        onChange={(e) =>
          setSelectedDocument(e.target.value)
        }
        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white"
      >
        <option value="">
          Select Document
        </option>

        {documents.map((doc) => (
          <option key={doc._id} value={doc._id}>
            {doc.title}
          </option>
        ))}

      </select>

    </div>
  );
}

export default DocumentSelector;