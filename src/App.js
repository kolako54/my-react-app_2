import React, { Component } from "react";
import CartLogin from "./components/Cart/cart.component";
import "./App.css";
import {Route, Switch} from "react-router-dom"
import SignUpStepOne from './pages/signUpStepOne/signUpStepOne.component'
import SignUpStepTwo from './pages/signUpStepTwo/signUpStepTwo.componentt'
import ThreeStep from './pages/signUpStepThree/signUpStepThree.component'
import FourStep from './pages/signUpStepFour/signUpStepFour.component'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/sign-up/step-1" component={SignUpStepOne} />
          <Route path="/sign-up/step-2" component={SignUpStepTwo} />
          <Route path="/sign-up/step-3" component={ThreeStep} />
          <Route path="/sign-up/step-4" component={FourStep} />

          <Route exact path="/" component={CartLogin} />
        </Switch>
      </div>
    );
  }
}

export default App;
