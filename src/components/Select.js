import React from 'react';

const Select = (props) => {
    return (
        <div className="mb-4">
            <label id="listbox-label" className="block text-base font-medium text-temp-grey-600">
                {props.label}
            </label>
            <button onClick={props.onSelectHandler}>hfhfhf</button>
            <div className="mt-1 relative">
                <button type="button" onClick={props.onToggling}
                        className="relative w-full bg-white border border-main rounded-sm shadow-sm pl-3 pr-10 py-2
                      text-left cursor-default focus:outline-none sm:text-sm h-10">
                    <span></span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                           fill="#008eff" aria-hidden="true">
                      <path fillRule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"/>
                    </svg>
                  </span>
                </button>

                <div className="absolute z-20 mt-1 w-full rounded-md bg-white shadow-lg">
                    {(props.isOpen && props) && (
                        <ul className="max-h-56 rounded-sm border border-main py-1 text-base ring-1 ring-main ring-opacity-5 overflow-auto focus:outline-none sm:text-sm transition ease-in duration-100">
                            {props.options.map((option, index) => (
                                <li id={option.column}
                                    key={index}
                                    onClick={props.onSelectHandler}
                                    className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                                    <div className="flex items-center">
                                        <span className="ml-3 block font-normal truncate">{option.column}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Select;
