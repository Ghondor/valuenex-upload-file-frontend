import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer flex justify-end fixed w-full border-t border-grey-600 py-4 px-4 z-2 bg-white">
            <button
                className="bg-blue-500 rounded-sm py-2 px-10 text-white"
                onClick={props.activeStep === props.steps.length - 1 ? props.onSubmitData : props.handleNext}
                disabled={props.fileLength === 0}
            >
                {props.activeStep === props.steps.length - 1 ? 'Upload another' : 'Next'}
            </button>
        </div>
    )
};

export default Footer;
