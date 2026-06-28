import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import API from "../../services/api";

function UploadCard() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    try {
      const formData = new FormData();

      // Must match upload.single("file") in your backend
      formData.append("file", file);

      const response = await API.post(
        "/documents/upload",
        formData
      );

      alert(response.data.message);

      console.log(response.data);

      setFile(null);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Upload failed"
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Upload PDF
      </h2>

      <label className="border-2 border-dashed border-blue-400 rounded-xl h-72 flex flex-col justify-center items-center cursor-pointer hover:bg-blue-50 transition">
        <FaCloudUploadAlt className="text-6xl text-blue-600 mb-4" />

        <p className="text-lg font-semibold">
          Click to choose a PDF
        </p>

        <p className="text-gray-500 mt-2">
          Only PDF files are allowed
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {file && (
        <div className="mt-6 p-4 rounded-lg bg-gray-100">
          <p className="font-semibold">
            Selected File
          </p>

          <p className="mt-2">{file.name}</p>

          <button
            onClick={handleUpload}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Upload PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadCard;