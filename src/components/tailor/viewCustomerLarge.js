import React, {useState, useEffect} from 'react';
import Header from "../header";
import Card from 'react-bootstrap/Card'
import {
    // Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Button,
    Input,
    Form,
  } from "reactstrap";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Dropdown } from "semantic-ui-react";
import { linkClasses } from '@mui/material';
//firebase
import { customerRef } from '../../firebase/Firebase';

const options = [
    { key: 'angular', text: 'Pending', value: 'angular' },
    { key: 'css', text: 'Completed', value: 'css' },
    { key: 'design', text: 'Delivered', value: 'design' },
  ]

const ViewCustomerLarge = (customer) => {
    // console.log(customer,"view large");
  // const [customerDetails, setCustomerDetails] = useState([]);
  const { name, phoneNumber, age, emailId, address, pHeight, pHip, pHipDown, pThighTight, pThighLoose, pKneeHeight, pKneeLoose, pBottom, pPlay, sHeight, sBodySqu, sStomachSqu, sSeat, sShoulder, sHandLength, sKappu, sElbowLoose, sCollar, sSideLoose } = customer.customer;


  // const fetchBlogs = () => {
    
  //   const ref = customerRef.doc({key});
  //   ref.get().then((doc)=>{
  //     if(doc.exists){
  //       setCustomerDetails(doc.data());                                                      
  //     }else{
  //       console.log("No such document");
  //     }
  //   });
  // }

  // console.log(customerDetails,'view customer')

  // useEffect(() => {fetchBlogs()},[])

    return (
        <div className="container" style={{marginTop:"12px"}}>
            <Card>
            <Card.Header>
                <Row>
                <Col>
                <Link to="/customerlist" style={{textDecoration:"none"}}><i class="large arrow alternate circle left teal icon"></i></Link>
                </Col>
                <h5 style={{textAlign:"center", marginTop:"-25px"}}>View Customer</h5>
                </Row>
            </Card.Header>
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardBody>
                <Form>
                  <Row className="pb-3 pt-3 pl-3 pr-3">
                  <Col md="4">
                      <tr>
                        <td><h6><b>Phone Number:</b></h6></td>&nbsp;
                        <td><p class="fs-5">{phoneNumber}</p></td>
                      </tr>
                    </Col>
                    <Col md="4">
                    <tr>
                        <td><h6><b>Name:</b></h6></td>&nbsp;
                        <td><p>{name}</p></td>
                      </tr>
                    </Col>
                    <Col md="4">
                    <tr>
                        <td><h6><b>Email:</b></h6></td>&nbsp;
                        <td><p>{emailId}</p></td>
                      </tr>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                  <Col md="2">
                    <tr>
                        <td><h6><b>Age:</b></h6></td>&nbsp;
                        <td><p class="fs-5">{age}</p></td>
                      </tr>
                    </Col>
                    <Col md="10">
                    <tr>
                        <td><h6><b>Address:</b></h6></td>&nbsp;
                        <td><p>{address}</p></td>
                      </tr>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3"></Row>

                  <hr/>

                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <h3 style={{color:"teal"}}>Pant</h3>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                    <tr>
                        <td><h6>Height:</h6></td>&nbsp;
                        <td><p class="fs-5">{pHeight}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Hip:</h6></td>&nbsp;
                        <td><p class="fs-5">{pHip}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Hip Down:</h6></td>&nbsp;
                        <td><p class="fs-5">{pHipDown}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Thigh Tight:</h6></td>&nbsp;
                        <td><p class="fs-5">{pThighTight}</p></td>
                      </tr>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                    <tr>
                        <td><h6>Thigh Loose:</h6></td>&nbsp;
                        <td><p class="fs-5">{pThighLoose}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Knee Height:</h6></td>&nbsp;
                        <td><p class="fs-5">{pKneeHeight}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Knee Loose:</h6></td>&nbsp;
                        <td><p class="fs-5">{pKneeLoose}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Bottom:</h6></td>&nbsp;
                        <td><p class="fs-5">{pBottom}</p></td>
                      </tr>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                    <tr>
                        <td><h6>Play:</h6></td>&nbsp;
                        <td><p class="fs-5">{pPlay}</p></td>
                      </tr>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                    <h3 style={{color:"teal"}}>Shirt</h3>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                    <tr>
                        <td><h6>Height:</h6></td>&nbsp;
                        <td><p class="fs-5">{sHeight}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Body Square:</h6></td>&nbsp;
                        <td><p class="fs-5">{sBodySqu}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Stomach Square:</h6></td>&nbsp;
                        <td><p class="fs-5">{sStomachSqu}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Seat:</h6></td>&nbsp;
                        <td><p class="fs-5">{sSeat}</p></td>
                      </tr>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                    <tr>
                        <td><h6>Shoulder:</h6></td>&nbsp;
                        <td><p class="fs-5">{sShoulder}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Hand Length:</h6></td>&nbsp;
                        <td><p class="fs-5">{sHandLength}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Kappu:</h6></td>&nbsp;
                        <td><p class="fs-5">{sKappu}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Eldow Loose:</h6></td>&nbsp;
                        <td><p class="fs-5">{sElbowLoose}</p></td>
                      </tr>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                    <tr>
                        <td><h6>Collar:</h6></td>&nbsp;
                        <td><p class="fs-5">{sCollar}</p></td>
                      </tr>
                    </Col>
                    <Col md="3">
                    <tr>
                        <td><h6>Side Loose:</h6></td>&nbsp;
                        <td><p class="fs-5">{sSideLoose}</p></td>
                      </tr>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
            </Card>
        </div>
    )
}

export default ViewCustomerLarge
