import React, { useState } from 'react';
import { DocumentUploadModal } from '../modals/documentUpload';
import { ButtonWithProps } from '../components/button';

export const SomePage = () => {
    const [openModal, setOpenModal] = useState(true);

    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <div>
            <ButtonWithProps
                btnText="Upload Document"
                color="primary"
                variant="contained"
                style={{ marginTop: 100, marginLeft: 200 }}
                onclick={() => setOpenModal(!openModal)}
            />

            {openModal && <DocumentUploadModal open={openModal} handleClose={handleCloseModal} />}
        </div>
    );
};
