import React, {useEffect} from 'react';

const ConfirmDetails = ({pairs}) => {
    const headers = pairs.map(obj => (obj.column));

    return (
        <div className="confirm-details-container">
            <div className="mb-6">
                <p className="mb-6 text-temp-grey-500">Included columns:</p>
                <ul className="pl-8">
                    {headers?.map((header, index) => (
                        <li
                            className="mb-4"
                            key={index}
                        >{header}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <p className="mb-8 text-temp-grey-500">ID, Name, Timestamp assignment:</p>
                <ul className="pl-8 w-64">
                    {pairs.map((header, index) => (
                        <li
                            className="flex justify-between mb-4"
                            key={index}
                        >
                            <p className="font-bold text-temp-grey-600 text-left">{header.key}:</p>
                            <p className="text-sm text-left">{header.column}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default ConfirmDetails;
