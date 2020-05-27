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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Visualizations extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
        <>
        <IndexNavbar />
        <div className="wrapper">
          <section className="section section-lg">
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      {/*
                        Removed header
                      <hr className="line-info" />
                      <h5 className="card-category"></h5>
                      */}
                      <CardTitle tag="h2">Visualizations</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>

{/* Tableau iframe code goes here */}

                </CardBody>
              </Card>
            </Col>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default Visualizations;