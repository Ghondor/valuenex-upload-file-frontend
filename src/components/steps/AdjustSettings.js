import React, {useState, useEffect} from 'react';
import CheckBox from "../CheckBox";
// import Select from "../Select";

const AdjustSettings = ({fileColumns, setSelectedPairs}) => {
    const [columns, setColumns] = useState(fileColumns.map((column, i) => {
        return {column, selected: true, key: i === 0 ? 'id' : i === 1 ? 'name' : i === 2 ? 'timestamp' : undefined}
    }));
    // const [selectedKeys, setSelectedKeys] = useState([]);
    // const [isIdOpen, setIsIdOpen] = useState(false);
    // const [isNameOpen, setIsNameOpen] = useState(false);
    // const [isTimestampOpen, setIsTimestampOpen] = useState(false);

    const onSelectHandler = (event) => {
        const selectedColumns = [...columns];
        selectedColumns[event.target.id].selected = !selectedColumns[event.target.id].selected;
        setColumns([...selectedColumns]);
    };

    const onPickHeaderHandler = (key) => ({target: {value}}) => {
        let selectedColumns = [...columns];
        selectedColumns = selectedColumns.map(e => {
            if (e.key === key) {
                e.key = undefined
            }
            return e
        });
        selectedColumns.find(({column}) => column === value).key = key;
        setColumns([...selectedColumns]);
    };

    useEffect(() => setSelectedPairs(columns.filter(e => e.key)), [columns]);

    // const onToggling = (isMenuOpen, setIsMenuOpen) => () => setIsMenuOpen(!isMenuOpen);
    //
    // const onSelectOptionHandler = (event) => {
    //     console.log(event);
    // };

    const pairOptions = (k) => columns.filter(({column, selected, key}) => (selected && !key) || (selected && k === key));

    const getSelected = (key) => columns.filter(e => e.selected).find((e) => e.key === key)?.column

    return (
        <div className="adjust-settings-container">
            <p className="mb-4 text-temp-grey-500">Exclude columns by untoggling the checkbox.</p>
            {columns.map(({column, selected}, index) => {
                return (
                    <CheckBox
                        key={index}
                        index={index}
                        onSelectHandler={onSelectHandler}
                        column={column}
                        selected={selected}
                    />
                )
            })}

            <p className="mt-12 mb-4 text-temp-grey-500">Choose included columns to uniquely assign
                to <b>ID</b>, <b>Name</b>,
                and <b>Timestamp</b>.</p>

            <div className="w-1/2 mb-4">
                <p id="listbox-label" className="block text-sm font-medium text-gray-700">ID</p>
                <select
                    className="bg-white border border-main rounded-sm text-sm shadow-sm pl-3 pr-10 py-2 text-left"
                    defaultValue={getSelected('id')}
                    onChange={onPickHeaderHandler("id")}>
                    {pairOptions('id').map(({column, selected}, index) => {
                        return (<option id={column} key={`column${index}`} value={column}>{column}</option>)
                    })}
                </select>
            </div>

            <div className="w-1/2 mb-4">
                <p id="listbox-label" className="block text-sm font-medium text-gray-700">NAME</p>
                <select
                    className="bg-white border border-main rounded-sm text-sm shadow-sm pl-3 pr-10 py-2 text-left"
                    defaultValue={getSelected('name')}
                    onChange={onPickHeaderHandler("name")}>
                    {pairOptions('name').map(({column, selected}, index) => {
                        return (<option id={column} key={`column${index}`} value={column}>{column}</option>)
                    })}
                </select>
            </div>

            <div className="w-1/2 mb-4">
                <p id="listbox-label" className="block text-sm font-medium text-gray-700">TIMESTAMP</p>
                <select
                    className="bg-white border border-main rounded-sm text-sm shadow-sm pl-3 pr-10 py-2 text-left"
                    defaultValue={getSelected('timestamp')}
                    onChange={onPickHeaderHandler("timestamp")}>
                    {pairOptions('timestamp').map(({column, selected}, index) => {
                        return (<option id={column} key={`column${index}`} value={column}>{column}</option>)
                    })}
                </select>
            </div>

            {/*<div className="w-40">*/}
            {/*    <Select*/}
            {/*        isOpen={isIdOpen}*/}
            {/*        onToggling={onToggling(isIdOpen, setIsIdOpen)}*/}
            {/*        label="ID"*/}
            {/*        options={columns}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="w-40">*/}
            {/*    <Select*/}
            {/*        isOpen={isNameOpen}*/}
            {/*        onToggling={onToggling(isNameOpen, setIsNameOpen)}*/}
            {/*        label="Name"*/}
            {/*        options={columns}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="w-40">*/}
            {/*    <Select*/}
            {/*        isOpen={isTimestampOpen}*/}
            {/*        onSelectHandler={onSelectOptionHandler}*/}
            {/*        onToggling={onToggling(isTimestampOpen, setIsTimestampOpen)}*/}
            {/*        label="Timestamp"*/}
            {/*        options={columns}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
};

export default AdjustSettings;
