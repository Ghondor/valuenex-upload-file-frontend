import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import UploadDataset from "./UploadDataset";
import AdjustSettings from "./AdjustSettings";
import ConfirmDetails from "./ConfirmDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

function getSteps() {
    return ['Upload dataset', 'Adjust settings', 'Confirm details'];
}

function getStepContent({stepIndex, ...props}) {
    switch (stepIndex) {
        case 0:
            return (<UploadDataset {...props}/>);
        case 1:
            return (<AdjustSettings {...props}/>);
        case 2:
            return (<ConfirmDetails {...props}/>);
        default:
            return 'Unknown stepIndex';
    }
}

const StepsForm = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [data, setData] = useState();
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div className={classes.root}>
            <div className="header">
                <div className="header">
                    <Typography variant="h6" className="header-title">
                        {getSteps()[activeStep]}
                    </Typography>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>

            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <div className={classes.instructions}>{getStepContent({
                            stepIndex: activeStep,
                            onDataLoad: setData,
                            columns: data?.columns
                        })}</div>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StepsForm;
