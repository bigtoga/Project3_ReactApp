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
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Col,
  Container,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  Table,
  TabContent,
  TabPane
} from "reactstrap";

// core components
import ComponentsNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
  
class Predictions extends React.Component {
  state = {    
    tabs: 1,
    isLoading: false,
    dataLoaded: false,
    formData: {
      howManyFiles: 5,
      howManyRows: 10,
      fileName: 'testForm',
      randomFile: 'testForm02.csv'
    },

    tempData:{
      howManyFiles: 5,
      howManyRows: 10,
      fileName: 'testDefault',
      randomFile: 'testDefault02.csv'
    },

    result: []
  };

  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }  

  handlePredictClick = (event) => {
    console.log("handlePredictClick clicked!");
    const formData = this.state.formData;
    const tempData = this.state.tempData;
    this.setState({isLoading: true });
    this.setState({dataLoaded: false});
    
    // https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
    var proxyUrl = 'https://peaceful-sierra-66116.herokuapp.com/',
      targetUrl = 'http://localhost:5000/predict';

    var jsonRequest = JSON.stringify(formData);
    console.log(jsonRequest);

    // https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
    fetch(targetUrl, 
      {
        headers: {
          'Accept': 'application/json'
          , 'Content-Type': 'application/json'
        }
        , method: 'OPTIONS'
        , body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then((results) => {
        this.setState({
          result: results.data
          ,isLoading: false
          , dataLoaded: true
        })
        console.log(results)
      })
      .catch((error) => {
        console.log(error)
      });
      
      //.catch(error => this.setState({error, isLoading: false, dataLoaded: false}));
  }

  handleCancelClick = (event) => {
    this.setState({ result: [] });
    this.setState({isLoading: false});
    this.setState({dataLoaded: false});
  }

  render() {
    const isLoading = this.state.isLoading;
    const dataLoaded = this.state.dataLoaded;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <>
        <ComponentsNavbar />

        <div className="wrapper">

          {/*==========
          Splash screen
          =============*/}
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">

                <Col className="mt-lg-6" md="6">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats bg-default">
                        <CardBody>
                          <Row>
                            <Col md="3" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-chart-bar-32 text-warning" />
                              </div>
                            </Col>
                            <Col md="9" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">2010</CardTitle>
                                <p />
                                <p className="card-category text-warning">24,040 loans purchased</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="3" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-chart-pie-36 text-white" />
                              </div>
                            </Col>
                            <Col md="9" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Success</CardTitle>
                                <p />
                                <p className="card-category text-muted">20,698 loans paid</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-scissors text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Fail</CardTitle>
                                <p />
                                <p className="card-category text-info">3,342 Low Performers</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trash-simple text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">$562M</CardTitle>
                                <p />
                                <p className="card-category text-success">Potential loss</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <br />
                  <div className="row-grid justify-content-between align-items-center text-left row">
                    <div className="pl-md-5">
                      <h1>
                        Predicting Fannie Mae's Success
                          </h1>
                      <p>
                        Before we see the
                            <span className="text-danger"> predictive POWER </span>
                            of AI, let's first review Fannie Mae's prior loan history and understand how FannieSaves.WIN can help
                          </p>
                      <Button className="btn-round" color="danger" type="button" href="#participate">
                        <i className="tim-icons icon-user-run" />
                            &nbsp;&nbsp;&nbsp; I want to try out FannieSaves.WIN on 2011 data
                          </Button>
                    </div>

                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/*==========
          Section 1
          =============*/}
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
            
            <a name="participate"></a>
            
            <div className="section section-signup">
              <Container>
                <Row className="row-grid justify-content-between align-items-center">
                  <Col lg="6">
                    <h4 className="display-3 text-white">
                      What if FannieMae used 
                      <span className="text-white"> FannieSaves.WIN </span>
                      for 2011 loan purchases?
                    </h4>
                    <p className="text-white mb-3">
                    Let's use some real data - Fannie Mae's 2011 loan data - and see what could have been.
                    </p>
                    <br />
                    <br />
                    <h2>To ensure transparency and fairness, let's introduce randomness!</h2>
                    <p>We have the data for 2011 but, to prove that we aren't "cherry picking" only 
                      the best data, let's have a volunteer provide a few random values!	
                    </p>
                  </Col>
                  <Col className="mb-lg-auto" lg="6">
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">random</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.howManyFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-copy-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="How many files should we generate?"
                              type="text"
                              name="howManyFiles"
                              value={formData.howManyFiles}
                              onChange={this.handleChange} 
                              onFocus={e => this.setState({ howManyFocus: true })}
                              onBlur={e => this.setState({ howManyFocus: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.howManyRows
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-molecule-40" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="How many rows should each file contain?"
                              type="text"
                              name="howManyRows"
                              value={formData.howManyRows}
                              onChange={this.handleChange} 
                              onFocus={e => this.setState({ howManyRows: true })}
                              onBlur={e => this.setState({ howManyRows: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fileNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-tag" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="What should the file names start with?"
                              type="text"
                              name="fileName"
                              value={formData.fileName}
                              onChange={this.handleChange} 
                              onFocus={e => this.setState({ fileNameFocus: true })}
                              onBlur={e => this.setState({ fileNameFocus: false })}
                            />
                          </InputGroup>
                          
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.randomFileFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-tag" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Which random file do you want to use?"
                              type="text"
                              name="randomFile"
                              value={formData.randomFile}
                              onChange={this.handleChange} 
                              onFocus={e => this.setState({ randomFileFocus: true })}
                              onBlur={e => this.setState({ randomFileFocus: false })}
                            />
                          </InputGroup>
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox" checked />
                              <span className="form-check-sign" />I agree to the{" "}
                              <a href="#pablo" onClick={e => e.preventDefault()}>
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button 
                          className="btn-round" 
                          color="primary" 
                          size="lg"
                          disabled={isLoading}
                          onClick={!isLoading ? this.handlePredictClick : null}>
                          { isLoading ? 'Making prediction' : '>>>  Get the Predictions' }
                        
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                          className="btn-round" 
                          color="danger" 
                          size="lg"
                          // disabled={isLoading}
                          onClick={this.handleCancelClick}>
                          Reset prediction
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          {/*==========
          Section 2
          =============*/}
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
            
            <a name="results"></a>

            <Container className="align-items-center">
                <Row>
                  
                <Col className="ml-auto mr-auto" lg="12" md="12">
                <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/datascientist4.png")}
                      />
                      <h4 className="title">Your Predictions</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                          >
                            2011 Loan Performance Data
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" >
                            <thead className="text-primary">
                              <tr>
                                <th>Credit Score</th>
                                <th>Original Interest Rate</th>
                                <th>Original LTV</th>
                                <th>Original Balance</th>
                                <th>Actual Outcome</th>
                                <th>Predicted Outcome</th>
                                <th>Result</th>
                              </tr>
                            </thead>
                            <tbody>
                                {result.map(item => (
                                    <tr>
                                      <td>{item.worstCreditScore}</td>
                                      <td>{item.origIntRate}</td>
                                      <td>{item.origLTV}</td>
                                      <td>${item.origUPB}</td>
                                      <td>{item.zeroBalCode === 0 ? "Success" : "Negative"}</td>
                                      <td>{item.Label === 0 ? "Success" : "Negative"}</td>
                                      <td>
                                      <div className="icon-big text-center icon-warning">
                                            <i className={item.Label === item.zeroBalCode ? "tim-icons icon-check-2 text-success" : "tim-icons icon-trash-simple text-danger"} />
                                          </div>
                                        
                                        </td>
                                    </tr>
                                  ))
                                }
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                  </Col>
                </Row>
          </Container>
          
          </section>

          <Footer />
        </div>
      </>
    );
  }
}

export default Predictions;
