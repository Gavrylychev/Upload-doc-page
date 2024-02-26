import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
            // Call your backend API endpoint to upload files
        },
    });
    //TODO: add styles
    return (
        <div style={{ border: '1px solid #d7d7d7', marginTop: '15px', borderRadius: '10px' }}>
            <div
                {...getRootProps()}
                style={{
                    minWidth: '470px',
                    minHeight: '120px',
                    border: '1px dashed #d7d7d7',
                    margin: '15px',
                }}
            >
                <input {...getInputProps()} />
                <p>Drag and drop files here or click to browse.</p>
                <ul>
                    {uploadedFiles.map((file) => (
                        <li key={file.name}>{file.name}</li>
                    ))}
                </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <label
                    for="file-upload"
                    class="custom-file-upload"
                    style={{
                        display: 'block',
                        backgroundColor: '#0b0b5c',
                        marginBottom: '15px',
                        fontWeight: 800,
                        textTransform: 'capitalize',
                        minWidth: '200px',
                        minHeight: '30px',
                        cursor: 'pointer',
                        color: '#FFFF',
                        borderRadius: '10px',
                        textAlign: 'center',
                        paddingTop: '10px',
                    }}
                >
                    Upload Manifest
                </label>
                <input id="file-upload" type="file" style={{ display: 'none' }} />
            </div>
        </div>
    );
};
