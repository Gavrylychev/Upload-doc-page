import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axios from 'axios';

export const FileUpload = () => {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showProgressDropZone, setShowProgressDropZone] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];

            if (!file) return;

            const fileName =
                file.name.length > 29 ? `${file.name.substring(0, 30)}... .${file.name.split('.')[1]}` : file.name;

            const formData = new FormData();
            formData.append('file', file);
            setUploadedFiles((prevState) => [...prevState, { name: fileName, loading: 0 }]);
            setShowProgressDropZone(true);

            // axios
            //     .post('YOUR CALL TO API', formData, {
            //         onUploadProgress: ({ loaded, total }) => {
            //             setFiles((prevState) => {
            //                 const newFiles = [...prevState];
            //                 newFiles[newFiles.length - 1].loading = Math.floor((loaded / total) * 100);
            //                 return newFiles;
            //             });

            //             if (loaded === total) {
            //                 const fileSize = total < 1024 ? `${total} KB` : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
            //                 setUploadedFiles([...uploadedFiles, { name: fileName, size: fileSize }]);
            //                 setFiles([]);
            //                 setShowProgress(false);
            //             }
            //         },
            //     })
            //     .catch(console.error);
        },
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const fileName =
            file.name.length > 29 ? `${file.name.substr(0, 30)}... .${file.name.split('.')[1]}` : file.name;

        const formData = new FormData();
        formData.append('file', file);
        setFiles((prevState) => [...prevState, { name: fileName, loading: 0 }]);
        setShowProgress(true);

        axios
            .post('YOUR CALL TO API', formData, {
                onUploadProgress: ({ loaded, total }) => {
                    setFiles((prevState) => {
                        const newFiles = [...prevState];
                        newFiles[newFiles.length - 1].loading = Math.floor((loaded / total) * 100);
                        return newFiles;
                    });

                    if (loaded === total) {
                        const fileSize = total < 1024 ? `${total} KB` : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
                        setUploadedFiles([...uploadedFiles, { name: fileName, size: fileSize }]);
                        setFiles([]);
                        setShowProgress(false);
                    }
                },
            })
            .catch(console.error);
    };

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
                        <UploadFileSharpIcon sx={{ color: '#d88934', marginBottom: '15px', marginTop: '35px' }} />
                        <div>
                            <span style={{ color: '#858383' }}>Drag & Drop here or</span> <b>Browse</b>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <label
                        htmlFor="file-upload"
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
                    <input id="file-upload" type="file" name="file" hidden onChange={uploadFile} />
                </div>
            </div>
            {/* you can put ! before showProgress and you will see uploaded files (because of error call to axios) */}
            {!showProgress && (
                <div>
                    <section
                        style={{
                            borderBottom: '1px solid #d7d7d7',
                            borderTop: '1px solid #d7d7d7',
                            marginTop: '15px',
                            padding: '15px',
                        }}
                    >
                        {files.map((file, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <UploadFileIcon sx={{ color: '#d88934' }} />
                                <div style={{ marginLeft: '15px', width: '100%' }}>
                                    <div>
                                        <span style={{ marginRight: '5px' }}>{`${file.name} - uploading`}</span>
                                        <span>{`${file.loading}%`}</span>
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '6px',
                                            marginBottom: '4px',
                                            backgroundColor: '#d88934',
                                            borderRadius: '30px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: '100%',
                                                backgroundColor: '#d88934',
                                                borderRadius: 'inherit',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section
                        style={{
                            overflow: 'scroll',
                            borderBottom: '1px solid #d7d7d7',
                            borderTop: '1px solid #d7d7d7',
                            marginTop: '15px',
                            padding: '15px',
                        }}
                    >
                        {uploadedFiles.map((file, index) => (
                            <div key={index} style={{ paddingBottom: '5px', borderBottom: '1px solid #d7d7d7' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <UploadFileIcon sx={{ color: '#d88934' }} />
                                    <div style={{ display: 'flex' }}>
                                        <span style={{ fontSize: '12px', marginRight: '20px' }}>{file.name}</span>
                                        <span style={{ fontSize: '12px' }}>{file.size}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            )}
            {showProgressDropZone && (
                <div>
                    <section
                        style={{
                            borderBottom: '1px solid #d7d7d7',
                            borderTop: '1px solid #d7d7d7',
                            marginTop: '15px',
                            padding: '15px',
                        }}
                    >
                        {uploadedFiles.map((file, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <UploadFileIcon sx={{ color: '#d88934' }} />
                                <div style={{ marginLeft: '15px', width: '100%' }}>
                                    <div>
                                        <span style={{ marginRight: '5px' }}>{`${file.name} - uploading`}</span>
                                        <span>{`${file.loading}%`}</span>
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '6px',
                                            marginBottom: '4px',
                                            backgroundColor: '#d88934',
                                            borderRadius: '30px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: '100%',
                                                backgroundColor: '#d88934',
                                                borderRadius: 'inherit',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section
                        style={{
                            overflow: 'scroll',
                            borderBottom: '1px solid #d7d7d7',
                            borderTop: '1px solid #d7d7d7',
                            marginTop: '15px',
                            padding: '15px',
                        }}
                    >
                        {uploadedFiles.map((file, index) => (
                            <div key={index} style={{ paddingBottom: '5px', borderBottom: '1px solid #d7d7d7' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <UploadFileIcon sx={{ color: '#d88934' }} />
                                    <div style={{ display: 'flex' }}>
                                        <span style={{ fontSize: '12px', marginRight: '20px' }}>{file.name}</span>
                                        <span style={{ fontSize: '12px' }}>{file.size}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            )}
        </>
    );
};
