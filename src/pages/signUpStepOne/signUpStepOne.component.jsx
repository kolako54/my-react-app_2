import React from 'react'
import Steps from '../../components/steps/steps.component'
import './signUpStepOne.style.scss'
import InputsStepOne from '../../components/Stepone-signup-inputs/Stepone-signup-inputs.component'
import Logo from "../../components/Logo/logo.component";


const signUpStepOne = () => {
    return <div className="container-signup">
    <Logo className="logo"/>
        <Steps step="step-1"/>
        <InputsStepOne/>
     

    </div>;
};
export default signUpStepOne