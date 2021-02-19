import React from 'react';

const CheckBox = props => {
    return (
        <div className="mb-3">
            <label className="inline-flex items-center mt-3 text-sm text-temp-grey-600">
                <input type="checkbox"
                       id={props.index}
                       className="form-checkbox h-4 w-4 text-red-600"
                       checked={props.selected}
                       onChange={props.onSelectHandler}
                /><span
                className="ml-4 text-gray-700">{props.column}</span>
            </label>
        </div>
    )
};

export default CheckBox;
