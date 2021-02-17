import React, {useState, useEffect} from 'react';

const StepsContainer = () => {
    return (
        <div className="flex justify-center w-full h-screen">
            <div className="main-container">
                <div className="grid grid-cols-2 border-b border-grey-300 py-10">
                    <h1 className="text-3xl">Upload Dataset</h1>
                    <div className="">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center flex-col text-teal-600 relative">
                                <div
                                    className="rounded-full transition duration-500 ease-in-out h-5 w-5 border-2 border-teal-600 bg-main">
                                </div>
                                <div
                                    className="absolute top-0 text-center mt-8 w-32 text-xs font-medium text-teal-600">Upload
                                    Dataset
                                </div>
                            </div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                            <div className="flex items-center justify-center flex-col text-gray-500 relative">
                                <div
                                    className="rounded-full transition duration-500 ease-in-out h-5 w-5 border-2 border-gray-300">
                                </div>
                                <div
                                    className="absolute top-0 text-center mt-8 w-32 text-xs font-medium text-gray-500">Message
                                </div>
                            </div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                            <div className="flex items-center justify-center flex-col text-gray-500 relative">
                                <div
                                    className="rounded-full transition duration-500 ease-in-out h-5 w-5 border-2 border-gray-300">
                                </div>
                                <div
                                    className="absolute top-0 text-center mt-8 w-32 text-xs font-medium text-gray-500">Confirm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StepsContainer;
