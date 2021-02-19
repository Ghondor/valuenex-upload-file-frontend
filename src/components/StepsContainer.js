import React, {useState, useEffect} from 'react';

import Stepper from "./Stepper";
import Footer from "./Footer";
import UploadDataset from "./steps/UploadDataset";
import AdjustSettings from './steps/AdjustSettings';
import ConfirmDetails from './steps/ConfirmDetails';
import axios from "axios";

const StepsContainer = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [data, setData] = useState([]);
    const [pairs, setPairs] = useState();
    const [filteredDataset, setFilteredDataset] = useState(undefined);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


    const getSteps = () => {
        return ['Upload dataset', 'Adjust settings', 'Confirm details'];
    };
    const steps = getSteps();

    const AddDataset = () => {
        console.log({filteredDataset})
        axios({
                method: 'post',
                url: '/api/v1/datasets',
                data: {dataset: filteredDataset},
                headers: {
                    "Content-Type": 'application/json',
                }
            })
            .then(res => {
                setActiveStep(0);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        setFilteredDataset(data.map(e => {
            const parsedData = {};

            for (const pair of pairs) {
                parsedData[pair.key] = e[pair.column]
            }
            return parsedData
        }))


    }, [pairs]);

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (<UploadDataset onDataLoad={setData}/>);
            case 1:
                return (<AdjustSettings fileColumns={data?.columns} setSelectedPairs={setPairs}/>);
            case 2:
                return (<ConfirmDetails pairs={pairs}/>);
            default:
                setActiveStep(0);
        }
    }

    return (
        <div className="flex justify-center w-full">
            <div className="main-container">
                <div className="grid grid-cols-2 py-8 px-8 border-b border-grey-600">
                    <h1 className="text-2xl">{getSteps()[activeStep]}</h1>
                    <Stepper activeStep={activeStep} steps={steps}/>
                </div>
                <div className="flex">
                    <div className="w-full content-container bg-temp-grey-100">
                        <div className="py-7 px-6">{getStepContent(activeStep)}</div>
                        <Footer activeStep={activeStep}
                                handleNext={handleNext}
                                fileLength={data.length}
                                steps={steps}
                                filteredData={filteredDataset}
                                onSubmitData={AddDataset}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StepsContainer;
