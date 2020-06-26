
import React from "react";


// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components


class Dashboard extends React.Component {
  render() {
    return (
      <>
         <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-plane text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Flight</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-users text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">User</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
               
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-check text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Test</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
               
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-user text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Admin</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
         
        </div>
      </>
    );
  }
}

export default Dashboard;
