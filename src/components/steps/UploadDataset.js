import React, {useEffect, useState} from 'react';
import * as d3 from 'd3-fetch';
import uploadLogo from '../../img/cloud-computing.svg'

const UploadDataset = ({onDataLoad}) => {
    const [selectedFile, setSelectedFile] = useState();
    const [filename, setFilename] = useState('');

    useEffect(() => {
            if (selectedFile) {
                const fileBlobUrl = URL.createObjectURL(selectedFile);
                const fileExt = selectedFile.name.split('.').pop();
                setFilename(selectedFile.name);
                d3[fileExt.toLowerCase()](fileBlobUrl).then(onDataLoad);
            }
        },
        [selectedFile]
    );

    const onEmptyField = () => {
        setSelectedFile()
    };

    return (
        <div className="upload-dataset-container">
            <div className="title">Upload your dataset to this page and click next when you finish.</div>
            <div className="flex flex-col items-center justify-center w-full pt-20">
                <div className="bg-gray-200 h-64 w-80 rounded-sm flex flex-col items-center justify-center">
                    <img src={uploadLogo} className="w-20 h-20" alt="Upload file." />
                    {!selectedFile ? (<p className="text-main mb-2">Drag and drop files here</p>) : ''}
                    <p className="block text-sm" id="file-chosen">{selectedFile ? filename : 'or...'}</p>
                    <input
                        type="file"
                        id="actual-btn"
                        accept=".csv, .tsv"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                        hidden/>
                    {!selectedFile ?
                        (<label htmlFor="actual-btn" className="upload-button rounded-sm bg-main">Browse files</label>)
                        :
                        <button
                            className="rounded-sm bg-white border border-main text-temp-grey-600 py-2 px-5 mt-5"
                            onClick={onEmptyField}
                        >
                            Cancel
                        </button>
                    }

                </div>
                <p className="text-xs text-temp-grey-400 text-left w-80 mt-3">Supports: CSV, .TSV, .TXT, .XLS, .XLSX</p>
            </div>
        </div>
    )
};

export default UploadDataset;
