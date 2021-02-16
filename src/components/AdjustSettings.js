import React, {useState} from 'react';

const AdjustSettings = ({columns}) => {
    const [formattedColumuns, setSelected] = useState(columns.map(column => ({column, selected: true})));


    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "start"
        }}>{formattedColumuns.map(({column, selected}, index) => {
            const onChangeHandler = () => {
                const newArray =[...formattedColumuns];
                newArray[index].selected = !newArray[index].selected;
                setSelected([...newArray]);
            };
            return (
                <div key={`column${index}`}>
                    <input type="checkbox" id={`column${index}`} name={`column${index}`}
                           checked={selected} onChange={onChangeHandler}/>
                    <label htmlFor="scales">{column}</label>
                </div>
            )
        })}
        <select>
            {formattedColumuns.filter(e=>e.selected).map(({column, selected}, index) =>{
                return (<option  key={`column${index}`} value={column}>{column}</option>)
            })}
        </select>

        </div>
    )
};
export default AdjustSettings;
