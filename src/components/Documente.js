import React, { useState, useEffect } from "react";

function Documente() {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("/documente")
      .then((response) => response.json())
      .then((data) => setDocuments(data));
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("document[file]", file);
    formData.append("document[title]", title);
    formData.append("document[description]", description);

    fetch("http://localhost:3000/documente", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((newDocument) => {
        setDocuments([...documents, newDocument]);
        setFile(null);
        setTitle("");
        setDescription("");
      });
  };

  const handleDelete = (id) => {
    fetch(`/documente/${id}`, {
      method: "DELETE",
    }).then(() => {
      setDocuments(documents.filter((doc) => doc.id !== id));
    });
  };

  return (
    <div className="container">
      <h2>Documente</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "750px", marginBottom: "10px" }}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: "1000px", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div className="form-group">
          <label>File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="submit-button">
          Upload Document
        </button>
      </form>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Filename</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.title}</td>
              <td>{doc.description}</td>
              <td>{doc.filename}</td>
              <td>
                <button
                  onClick={() => handleDelete(doc.id)}
                  style={{ marginRight: "10px" }}
                >
                  Delete
                </button>
                <a
                  href={`http://localhost:3000/rails/active_storage/blobs/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Documente;
