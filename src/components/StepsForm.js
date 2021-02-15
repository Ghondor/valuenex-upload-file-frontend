import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    navbar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    stepper: {
        backgroundColor: 'transparent',
        width: 'auto'
    }
}));

function getSteps() {
    return ['Upload dataset', 'Adjust settings', 'Confirm details'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (<UploadDataset/>);
        case 1:
            return (<AdjustSettings/>);
        case 2:
            return (<ConfirmDetails/>);
        default:
            return 'Unknown stepIndex';
    }
}

const StepsForm = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
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
            <div className={classes.navbar}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" >
                            {getSteps()[activeStep]}
                        </Typography>
                        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Toolbar>
                </AppBar>
            </div>

            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
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
