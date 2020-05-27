/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// plugin that creates slider
import Slider from "nouislider";
import wNumb from "wnumb";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  Container,
  Col
} from "reactstrap";

class UserInputs extends React.Component {
    componentDidMount() {
      var slider1 = this.refs.slider1;
      Slider.create(slider1, {
        start: [0],
        connect: [true, false],
        step: 100,
        tooltips: [true],
        format: wNumb ({
            prefix: "$",
            decimals:0,
            thousand: ",",
            edit: function(value){
                return (value);
            },
        }),
        range: { min: 0, max: 100000 },
      });
        var slider2 = this.refs.slider2;
        Slider.create(slider2, {
          start: [550],
          connect: [true, false],
          step: 50,
          tooltips: [true],
          format: {
            // 'to' the formatted value. Receives a number.
            to: function (value) {
                return value;
            },
            // 'from' the formatted value.
            // Receives a string, should return a number.
            from: function (value) {
                return Number(value);
            }
        },
          range: { min: 300, max: 850 },
        });
        var slider3 = this.refs.slider3;
        Slider.create(slider3, {
          start: [550],
          connect: [true, false],
          step: 50,
          tooltips: [true],
          format: {
            // 'to' the formatted value. Receives a number.
            to: function (value) {
                return value;
            },
            // 'from' the formatted value.
            // Receives a string, should return a number.
            from: function (value) {
                return Number(value);
            }
        },
          range: { min: 300, max: 850 },
        });
      }
      
    render() {
    return (
        <>
        <IndexNavbar />

        <Container>

        <div className="wrapper">
        <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />

          <div className="content-center brand">

            <h1>Let's enter your information!</h1>

            <h1 className="d-none d-sm-block">

            <h3>How much would you like to loan?</h3>
            <Col lg="12" sm="12">
              <br />
              <br />
              <div className="slider" ref="slider1" />
              <br />
            </Col>

            <h3>How many borrowers will there be?</h3>
            <Col lg="12" sm="12">
            <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  <span className="form-check-sign" />
                  1
                </Label>
              </FormGroup>

              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  <span className="form-check-sign" />
                  2
                </Label>
              </FormGroup>
              <br />
            </Col>

            <h3>What is your FICO score?</h3>
            <Col lg="12" sm="12">
              <br />
              <br />
              <div className="slider" ref="slider2" />
              <br />
            </Col>

            <h3>If applicable, what is the FICO score of the co-borrower?</h3>
            <Col lg="12" sm="12">
              <br />
              <br />
              <div className="slider" ref="slider3" />
              <br />
            </Col>

            <h3>In which state do you reside in?</h3>
            <Col lg="12" sm="12">
            <select>
	            <option value="AL">Alabama (AL)</option>
              <option value="AK">Alaska (AK)</option>
              <option value="AZ">Arizona (AZ)</option>
              <option value="AR">Arkansas (AR)</option>
              <option value="CA">California (CA)</option>
              <option value="CO">Colorado (CO)</option>
              <option value="CT">Connecticut (CT)</option>
              <option value="DE">Delaware (DE)</option>
              <option value="DC">District Of Columbia (DC)</option>
              <option value="FL">Florida (FL)</option>
              <option value="GA">Georgia (GA)</option>
              <option value="HI">Hawaii (HI)</option>
              <option value="ID">Idaho (ID)</option>
              <option value="IL">Illinois (IL)</option>
              <option value="IN">Indiana (IN)</option>
              <option value="IA">Iowa (IA)</option>
              <option value="KS">Kansas (KS)</option>
              <option value="KY">Kentucky (KY)</option>
              <option value="LA">Louisiana (LA)</option>
              <option value="ME">Maine (ME)</option>
              <option value="MD">Maryland (MD)</option>
              <option value="MA">Massachusetts (MA)</option>
              <option value="MI">Michigan (MI)</option>
              <option value="MN">Minnesota (MN)</option>
              <option value="MS">Mississippi (MS)</option>
              <option value="MO">Missouri (MO)</option>
              <option value="MT">Montana (MT)</option>
              <option value="NE">Nebraska (NE)</option>
              <option value="NV">Nevada (NV)</option>
              <option value="NH">New Hampshire (NH)</option>
              <option value="NJ">New Jersey (NJ)</option>
              <option value="NM">New Mexico (NM)</option>
              <option value="NY">New York (NY)</option>
              <option value="NC">North Carolina (NC)</option>
              <option value="ND">North Dakota (ND)</option>
              <option value="OH">Ohio (OH)</option>
              <option value="OK">Oklahoma (OK)</option>
              <option value="OR">Oregon (OR)</option>
              <option value="PA">Pennsylvania (PA)</option>
              <option value="RI">Rhode Island (RI)</option>
              <option value="SC">South Carolina (SC)</option>
              <option value="SD">South Dakota (SD)</option>
              <option value="TN">Tennessee (TN)</option>
              <option value="TX">Texas (TX)</option>
              <option value="UT">Utah (UT)</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            </Col>

            </h1>

            <Button color="warning" to="/home" tag={Link}>Submit</Button>

          </div>
          </div>
          </div>
        </Container>

<Footer />

</>

    );
  }
}

export default UserInputs;
