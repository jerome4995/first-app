import React, { useState } from "react";
import Header from "../header";
import Card from "react-bootstrap/Card";
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
  FormGroup,
  FormFeedback,
  FormText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Dropdown, StatisticValue } from "semantic-ui-react";
import "./table.css";
import Swal from "sweetalert2";
import { orderRef, db } from "../../firebase/Firebase";

const options = [
  { key: "angular", text: "Pending", value: "Pending" },
  { key: "css", text: "Completed", value: "Completed" },
  { key: "design", text: "Delivered", value: "Delivered" },
];

const AddOrder = () => {
  const values = {
    phoneNumber: "",
    name: "",
    age: "",
    oEmail: "",
    address: "",
    pHeight: "",
    pHip: "",
    pHipDown: "",
    pThighTight: "",
    pThighLoose: "",
    pKneeHeight: "",
    pKneeLose: "",
    pBottom: "",
    pPlay: "",
    sHeight: "",
    sBodySqu: "",
    sStoamchSqu: "",
    sSeat: "",
    sShoulder: "",
    sHandLength: "",
    sKappu: "",
    sElbowLoose: "",
    sCollar: "",
    sSideLoose: "",
    dDate: "",
    nPant: "",
    nShirt: "",
    oStatus: "",
  };

  const [initialState, setInitialState] = useState(values);
  console.log(initialState);
  const {
    phoneNumber,
    name,
    age,
    oEmail,
    address,
    pHeight,
    pHip,
    pHipDown,
    pThighTight,
    pThighLoose,
    pKneeHeight,
    pKneeLose,
    pBottom,
    pPlay,
    sHeight,
    sBodySqu,
    sStoamchSqu,
    sSeat,
    sShoulder,
    sHandLength,
    sKappu,
    sElbowLoose,
    sCollar,
    sSideLoose,
    dDate,
    nPant,
    nShirt,
    oStatus,
  } = initialState;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInitialState({
      ...initialState,
      [name]: value,
    });
  };

  const handleDropDown = (event, result) => {
    const { name, value } = result || event.target;
    // console.log(name, value);
    setInitialState({ ...initialState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.showLoading();
    orderRef.add(initialState).then(() => {
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Customer Details has been successfully added",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(window.location.reload(), 50000);
      });
    });
  };

  return (
    <div className="container" style={{ marginTop: "12px" }}>
      <Card>
        <Card.Header>
          <h5>Add Order</h5>
        </Card.Header>
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardBody>
                <Form>
                  <Row className="pb-3 pt-3 pl-3 pr-3">
                    <Col md="4">
                      <label>Order Number</label>
                      <Input value="01" type="number" readOnly />
                    </Col>
                    <Col md="4"></Col>
                    <Col md="4"></Col>
                  </Row>

                  <hr />

                  <Row className="pb-3 pt-3 pl-3 pr-3">
                    <Col md="4">
                      <label>Phone Number</label>
                      <Input
                        defaultValue="Phone Number"
                        type="number"
                        value={phoneNumber}
                        name="phoneNumber"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md="4">
                      <label>Name</label>
                      <Input
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        name="name"
                      />
                    </Col>
                    <Col md="4">
                      <label>Age</label>
                      <Input
                        type="number"
                        value={age}
                        onChange={handleInputChange}
                        name="age"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <label>Email</label>
                      <Input
                        type="email"
                        value={oEmail}
                        onChange={handleInputChange}
                        name="oEmail"
                      />
                    </Col>
                    <Col md="6">
                      <label>Address</label>
                      <Input
                        type="textarea"
                        value={address}
                        onChange={handleInputChange}
                        name="address"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3"></Row>

                  <hr />

                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <h4>Pant</h4>
                    </Col>
                    <Col md="6" style={{ textAlign: "right" }}>
                      <div className="right floated ui checkbox">
                        <input type="checkbox" />
                        <label></label>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Height</label>
                      <Input
                        type="number"
                        value={pHeight}
                        onChange={handleInputChange}
                        name="pHeight"
                      />
                    </Col>
                    <Col md="3">
                      <label>Hip</label>
                      <Input
                        type="number"
                        value={pHip}
                        onChange={handleInputChange}
                        name="pHip"
                      />
                    </Col>
                    <Col md="3">
                      <label>Hip Down</label>
                      <Input
                        type="number"
                        value={pHipDown}
                        onChange={handleInputChange}
                        name="pHipDown"
                      />
                    </Col>
                    <Col md="3">
                      <label>Thigh Tight</label>
                      <Input
                        type="number"
                        value={pThighTight}
                        onChange={handleInputChange}
                        name="pThighTight"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Thigh Lose</label>
                      <Input
                        type="number"
                        value={pThighLoose}
                        onChange={handleInputChange}
                        name="pThighLoose"
                      />
                    </Col>
                    <Col md="3">
                      <label>Knee Height</label>
                      <Input
                        type="number"
                        value={pKneeHeight}
                        onChange={handleInputChange}
                        name="pKneeHeight"
                      />
                    </Col>
                    <Col md="3">
                      <label>Knee Lose</label>
                      <Input
                        type="number"
                        value={pKneeLose}
                        onChange={handleInputChange}
                        name="pKneeLose"
                      />
                    </Col>
                    <Col md="3">
                      <label>Bottom</label>
                      <Input
                        type="number"
                        value={pBottom}
                        onChange={handleInputChange}
                        name="pBottom"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Play</label>
                      <Input
                        type="number"
                        value={pPlay}
                        onChange={handleInputChange}
                        name="pPlay"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3"></Col>
                    <Col md="4"></Col>
                    <Col md="5" style={{ textAlign: "right" }}>
                      <div className="ui form">
                        <div className="inline field">
                          <label>Number of Pant</label>
                          <input
                            type="text"
                            value={nPant}
                            onChange={handleInputChange}
                            name="nPant"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <h4>Shirt</h4>
                    </Col>
                    <Col md="6" style={{ textAlign: "right" }}>
                      <div className="ui checkbox">
                        <input type="checkbox" />
                        <label></label>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Height</label>
                      <Input
                        type="number"
                        value={sHeight}
                        onChange={handleInputChange}
                        name="sHeight"
                      />
                    </Col>
                    <Col md="3">
                      <label>Body Squre</label>
                      <Input
                        type="number"
                        value={sBodySqu}
                        onChange={handleInputChange}
                        name="sBodySqu"
                      />
                    </Col>
                    <Col md="3">
                      <label>Stomach Squre</label>
                      <Input
                        type="number"
                        value={sStoamchSqu}
                        onChange={handleInputChange}
                        name="sStoamchSqu"
                      />
                    </Col>
                    <Col md="3">
                      <label>Seat</label>
                      <Input
                        type="number"
                        value={sSeat}
                        onChange={handleInputChange}
                        name="sSeat"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Shoulder</label>
                      <Input
                        type="number"
                        value={sShoulder}
                        onChange={handleInputChange}
                        name="sShoulder"
                      />
                    </Col>
                    <Col md="3">
                      <label>Hand Length</label>
                      <Input
                        type="number"
                        value={sHandLength}
                        onChange={handleInputChange}
                        name="sHandLength"
                      />
                    </Col>
                    <Col md="3">
                      <label>Kappu</label>
                      <Input
                        type="number"
                        value={sKappu}
                        onChange={handleInputChange}
                        name="sKappu"
                      />
                    </Col>
                    <Col md="3">
                      <label>Elbow Lose</label>
                      <Input
                        type="number"
                        value={sElbowLoose}
                        onChange={handleInputChange}
                        name="sElbowLoose"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Collar</label>
                      <Input
                        type="number"
                        value={sCollar}
                        onChange={handleInputChange}
                        name="sCollar"
                      />
                    </Col>
                    <Col md="3">
                      <label>Side Lose</label>
                      <Input
                        type="number"
                        value={sSideLoose}
                        onChange={handleInputChange}
                        name="sSideLoose"
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3"></Col>
                    <Col md="4"></Col>
                    <Col md="5" style={{ textAlign: "right" }}>
                      <div className="ui form">
                        <div className="inline field">
                          <label>Number of Shirt</label>
                          <input
                            type="text"
                            value={nShirt}
                            onChange={handleInputChange}
                            name="nShirt"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="4">
                      <div className="ui form">
                        <div className="inline field">
                          <label>Delivery Date</label>
                          <input
                            type="date"
                            value={dDate}
                            onChange={handleInputChange}
                            name="dDate"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md="5"></Col>
                    <br />
                    <Col md="3" style={{ textAlign: "right" }}>
                      <Dropdown
                        placeholder="Status"
                        fluid
                        selection
                        options={options}
                        name="oStatus"
                        onChange={handleDropDown}
                        value={oStatus.oStatus}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <div class="text-center">
                      <button className="ui teal button" onClick={handleSubmit}>
                        Add Order
                      </button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AddOrder;
