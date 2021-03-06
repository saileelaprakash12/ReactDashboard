
import React from "react";
import {AgGridReact} from 'ag-grid-react'
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
// reactstrap components
import { Card, CardHeader, CardBody,  CardTitle,Row, Col } from "reactstrap";

class UserModule extends React.Component {
  constructor(){
    super();
    this.state={
      columDefs:[
        {headerName:"capsule_serial",field:"capsule_serial"},
        {headerName:"details",field:"details"},
        {headerName:"reuse_count",field:"reuse_count"},
        
      
      ],
        rowData:null
      
    }
  }
  componentDidMount(){
    fetch("https://api.spacexdata.com/v3/capsules/past")
    .then((res)=>res.json())
    .then((rowData)=>this.setState({rowData}))
    .catch((err)=>console.log(err))
 
    
  }
  render() {
    return (
      <>
       <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h6">Flight Details</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="ag-theme-balham" style={{width:"500px",height:"500px"}}>
                    <AgGridReact
                    columnDefs={this.state.columDefs}
                    rowData={this.state.rowData}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
      </div> 
      </>
    );
  }
}

export default UserModule;
