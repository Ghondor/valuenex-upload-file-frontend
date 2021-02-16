import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import * as d3 from 'd3-fetch';


const UploadDataset = ({onDataLoad}) => {
        const [selectedFile, setSelectedFile] = useState();

        useEffect(() => {
                console.log({selectedFile});
                if (selectedFile) {

                    const fileBlobUrl = URL.createObjectURL(selectedFile);
                    const fileExt = selectedFile.name.split('.').pop();
                    d3[fileExt.toLowerCase()](fileBlobUrl).then(onDataLoad);
                }
            },
            [selectedFile]
        );

        return (
            <div className="upload-dataset">
                <Typography>
                    Upload your dataset to this page and click next when you finish.
                </Typography>
                <input
                    type="file"
                    accept=".csv, .tsv"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                />
            </div>
        )
    }
;

export default UploadDataset;
