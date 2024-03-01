import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';

export const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
            // Call your backend API endpoint to upload files
        },
    });

    return (
        <>
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <UploadFileSharpIcon sx={{ color: 'orange', marginBottom: '15px', marginTop: '35px' }} />
                        <div>
                            <span style={{ color: '#858383' }}>Drag & Drop here or</span> <b>Browse</b>
                        </div>
                    </div>
                    <ul>
                        {uploadedFiles.map((file) => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <label
                        htmlFor="file-upload"
                        // className="custom-file-upload"
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
                    <input id="file-upload" type="file" name="file" hidden />
                </div>
            </div>
            <div>Loading progress bar</div>
        </>
    );
};
