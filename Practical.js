import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './css/week.css';
function Practical() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    setSelectedFile(files[0]);
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      const fileItem = createFileItem(selectedFile);
      setFileList(prevList => [...prevList, fileItem]);
      setSelectedFile(null);
    } else {
      console.log('No file selected.');
    }
  };

  const handleFileRename = (file, newName) => {
    const updatedList = fileList.map(item => {
      if (item.id === file.id) {
        return { ...item, name: newName };
      }
      return item;
    });
    setFileList(updatedList);
  };

  const handleFileDelete = (file) => {
    const updatedList = fileList.filter(item => item.id !== file.id);
    setFileList(updatedList);
  };

  function createFileItem(file) {
    const id = Date.now().toString(); // Generate a unique ID for the file item
    const fileItem = {
      id: id,
      name: file.name
    };
    return fileItem;
  }


  return (
    <div className='select'>
      <nav className='week-nav'>
      <button onClick={goBack}>Go Back</button>
      </nav>

      <nav className='week-nav'>
        <button onClick={() => navigate('/Seta')}>SETA</button>
        <button className="active" onClick={() => navigate('/Practical')}>Practical</button>
      </nav>

      <div>
  {/* File input */}
  <label htmlFor="file-input" className="file-input-label">
    Click to Upload File
    <input type="file" id="file-input" onChange={handleFileSelect} />
  </label>

  {/* Submit file button */}
  <button onClick={handleFileSubmit}>Submit File</button>

  {/* Display selected file */}
  {selectedFile && (
    <div className="selected-file">
      <p>Selected File: {selectedFile.name}</p>
    </div>
  )}

  {/* Display file list */}
  {fileList.length > 0 && (
    <div className="file-list">
      <h3>File List:</h3>
      {fileList.map(file => (
        <div className="file-item" key={file.id}>
          <div className="file-icon"></div>
          <span className="file-name">{file.name}</span>
          <div className="file-actions">
            <button
              className="file-action-button red"
              onClick={() => handleFileRename(file, prompt('Enter a new name for the file', file.name))}
            >
              Rename
            </button>
            <button
              className="file-action-button red-background"
              onClick={() => handleFileDelete(file)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

    </div>
  );
};
export default Practical;
