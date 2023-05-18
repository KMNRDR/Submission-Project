import React, { useState } from 'react';

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
        formData.append('files', file);
    });

    try {
        const response = await fetch('/api/upload',{
            method: 'POST',
            body: formData,
        });

        if(response.ok) {
            alert('Upload Successful');
        }
        else{
            alert('Upload failed, please view console for error')
        }
    }
    catch (error) {
        console.error('Upload error:', error)
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;