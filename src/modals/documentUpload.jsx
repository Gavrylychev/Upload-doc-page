import React, { useState } from 'react';
import {
    Dialog,
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Switch,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ButtonCloseWithProps } from '../components/closeButton';
import { ButtonWithProps } from '../components/button';
import { FileUpload } from '../components/fileUpload';
import { TestingCenter } from '../components/testingCenter';
import './documentUpload.scss';

export const DocumentUploadModal = ({ open, handleClose }) => {
    const [documentName, setDocumentName] = useState('');
    const [toleranceChecked, setToleranceChecked] = useState(true);
    const [distancingValue, setDistancingValue] = useState('no');
    const [clientValue, setClientValue] = useState('single');
    const [testCenterName, setTestCenterName] = useState('');

    const handleChangeSelectValue = (event) => {
        setDocumentName(event.target.value);
    };

    const handleChangeTolerance = (event) => {
        setToleranceChecked(event.target.checked);
    };

    const handleSocialDistancingChange = (event) => {
        setDistancingValue(event.target.value);
    };

    const handleClientChange = (event) => {
        setClientValue(event.target.value);
    };

    const handleChangeTestCenter = (event) => {
        setTestCenterName(event.target.value);
    };

    return (
        <Dialog open={open} onClose={handleClose} scroll="body" maxWidth="lg">
            <Box>
                <Box>
                    <ButtonCloseWithProps
                        style={{
                            color: '#fff',
                            backgroundColor: '#0b0b5c',
                            width: '40px',
                            height: '40px',
                            padding: '10px',
                            borderRadius: '10px',
                            marginTop: '35px',
                            marginLeft: '35px',
                        }}
                        onclick={handleClose}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                color: '#0b0b5c',
                                fontWeight: 800,
                                paddingBottom: '17px',
                                borderBottom: '1px solid #d7d7d7',
                            }}
                            variant="h4"
                        >
                            Document Upload
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '50px',
                            marginLeft: '100px',
                            display: 'flex',
                        }}
                    >
                        <Box sx={{ minWidth: 520 }}>
                            <Box>
                                <FormControl fullWidth size="small">
                                    <InputLabel
                                        id="import-name"
                                        sx={{
                                            color: '#0b0b5c',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Select Import Name
                                    </InputLabel>
                                    <Select
                                        sx={{ padding: '14px, 14px, 12px, 14px', borderRadius: '10px' }}
                                        labelId="import-name"
                                        value={documentName}
                                        label="Select Import Name"
                                        onChange={handleChangeSelectValue}
                                    >
                                        <MenuItem value={1}>Document1</MenuItem>
                                        <MenuItem value={2}>Document2</MenuItem>
                                        <MenuItem value={3}>Document3</MenuItem>
                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{
                                        color: '#0b0b5c',
                                        fontWeight: 600,
                                        borderTop: '1px solid #d7d7d7',
                                        paddingTop: '20px',
                                        marginTop: '20px',
                                        width: '285px',
                                        fontSize: '14px',
                                    }}
                                >
                                    Select a manifest that you'd like to import
                                </Typography>
                                <FileUpload />
                            </Box>
                            <Box
                                sx={{
                                    borderTop: '1px solid #d7d7d7',
                                    borderBottom: '1px solid #d7d7d7',
                                    marginTop: '20px',
                                    marginBottom: '20px',
                                    width: '285px',
                                }}
                            >
                                <Typography
                                    sx={{ fontWeight: 600, color: '#0b0b5c', marginTop: '20px', marginBottom: '10px' }}
                                >
                                    Elapse Data Checking:
                                </Typography>
                                <Typography sx={{ marginBottom: '20px', color: '#3db957', fontWeight: 600 }}>
                                    No Elapsed Dates!
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 600, color: '#0b0b5c' }}>Tolerance Window:</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Switch
                                        checked={toleranceChecked}
                                        onChange={handleChangeTolerance}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <Typography
                                        sx={{
                                            borderRight: '1px solid #d7d7d7',
                                            marginRight: '20px',
                                            paddingRight: '20px',
                                            color: '#0b0b5c',
                                        }}
                                    >
                                        Toggle ON
                                    </Typography>
                                    <AccessTimeIcon
                                        sx={{ transform: 'rotate(90deg)', marginRight: '10px', color: '#0b0b5c' }}
                                    />
                                    <Typography sx={{ color: '#0b0b5c' }}>Select Tolerance Level</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '115px', minWidth: '520px' }}>
                            <Box>
                                <FormControl>
                                    <FormLabel
                                        id="row-radio-buttons-group-label"
                                        sx={{ fontWeight: 600, color: '#0b0b5c' }}
                                        focused={false}
                                    >
                                        Split schedule using social distancing?
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={distancingValue}
                                        onChange={handleSocialDistancingChange}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box
                                sx={{
                                    marginBottom: '20px',
                                    marginTop: '20px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        color: '#0b0b5c',
                                        marginBottom: '10px',
                                        borderTop: '1px solid #d7d7d7',
                                        width: '285px',
                                        paddingTop: '20px',
                                    }}
                                >
                                    Location Checking:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#3db957',
                                        fontWeight: 600,
                                        borderBottom: '1px solid #d7d7d7',
                                        width: '285px',
                                        paddingBottom: '20px',
                                    }}
                                >
                                    All Available!
                                </Typography>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel
                                        id="client-radio-buttons-group-label"
                                        sx={{ fontWeight: 600, color: '#0b0b5c' }}
                                        focused={false}
                                    >
                                        Client:
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="client-radio-buttons-group-label"
                                        name="client-radio-buttons-group"
                                        value={clientValue}
                                        onChange={handleClientChange}
                                    >
                                        <FormControlLabel value="single" control={<Radio />} label="Single" />
                                        <FormControlLabel value="multiple" control={<Radio />} label="Multiple" />
                                    </RadioGroup>
                                </FormControl>
                                {/* when we will have some data from BE we could do a map method for an array or object and pass all props that we need and only 1 handleChange function  */}
                                <TestingCenter
                                    text={'Testing Center 1'}
                                    handleChangeTestCenterValue={handleChangeTestCenter}
                                    testCenterValue={testCenterName}
                                />
                                <TestingCenter
                                    text={'Testing Center 2'}
                                    // handleChangeTestCenterValue={handleChangeTestCenter2}
                                    // testCenterValue={testCenterName2}
                                />
                                <TestingCenter
                                    text={'Testing Center 3'}
                                    // handleChangeTestCenterValue={handleChangeTestCenter3}
                                    // testCenterValue={testCenterName3}
                                />
                                <TestingCenter
                                    text={'Testing Center 4'}
                                    // handleChangeTestCenterValue={handleChangeTestCenter4}
                                    // testCenterValue={testCenterName4}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '70px',
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#0b0b5c', marginBottom: '28px' }}>
                            Data in the import file is correct. Please press Continue to import.
                        </Typography>
                        <Box>
                            <ButtonWithProps
                                btnText="Continue Import"
                                variant="contained"
                                style={{
                                    backgroundColor: '#0b0b5c',
                                    textTransform: 'capitalize',
                                    minWidth: '240px',
                                    padding: '16px 64px 16px 64px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    marginRight: '14px',
                                }}
                            />
                            <ButtonWithProps
                                btnText="Cancel"
                                variant={'outlined'}
                                style={{
                                    border: '1px solid #d88934',
                                    textTransform: 'capitalize',
                                    color: '#d88934',
                                    minWidth: '240px',
                                    padding: '16px 64px 16px 64px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};
