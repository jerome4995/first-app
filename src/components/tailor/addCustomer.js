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
} from "reactstrap";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Dropdown } from "semantic-ui-react";
import "./table.css";
import Swal from "sweetalert2";
import { customerRef } from "../../firebase/Firebase";

const AddCustomer = () => {
  const values = {
    name: "",
    phoneNumber: "",
    age: "",
    emailId: "",
    address: "",
    pHeight: "",
    pHip: "",
    pHipDown: "",
    pThighTight: "",
    pThighLoose: "",
    pKneeHeight: "",
    pKneeLoose: "",
    pBottom: "",
    pPlay: "",
    sHeight: "",
    sBodySqu: "",
    sStomachSqu: "",
    sSeat: "",
    sShoulder: "",
    sHandLength: "",
    sKappu: "",
    sElbowLoose: "",
    sCollar: "",
    sSideLoose: "",
  };

  const [initialState, setInitialState] = useState(values);

  const {
    name,
    phoneNumber,
    age,
    emailId,
    address,
    pHeight,
    pHip,
    pHipDown,
    pThighTight,
    pThighLoose,
    pKneeHeight,
    pKneeLoose,
    pBottom,
    pPlay,
    sHeight,
    sBodySqu,
    sStomachSqu,
    sSeat,
    sShoulder,
    sHandLength,
    sKappu,
    sElbowLoose,
    sCollar,
    sSideLoose,
  } = initialState;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInitialState({
      ...initialState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.showLoading();
    customerRef.add(initialState).then(() => {
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
          <h5>Add Customer</h5>
        </Card.Header>
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardBody>
                <Form>
                  <Row className="pb-3 pt-3 pl-3 pr-3">
                    <Col md="4">
                      <label>Name</label>
                      <Input
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                      />
                    </Col>
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
                      <label>Age</label>
                      <Input
                        type="number"
                        value={age}
                        name="age"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <label>Email</label>
                      <Input
                        type="email"
                        value={emailId}
                        name="emailId"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="6">
                      <label>Address</label>
                      <Input
                        type="textarea"
                        value={address}
                        name="address"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3"></Row>

                  <hr />

                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <h4>Pant</h4>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Height</label>
                      <Input
                        type="number"
                        value={pHeight}
                        name="pHeight"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Hip</label>
                      <Input
                        type="number"
                        value={pHip}
                        name="pHip"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Hip Down</label>
                      <Input
                        type="number"
                        value={pHipDown}
                        name="pHipDown"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Thigh Tight</label>
                      <Input
                        type="number"
                        value={pThighTight}
                        name="pThighTight"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Thigh Loose</label>
                      <Input
                        type="number"
                        value={pThighLoose}
                        name="pThighLoose"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Knee Height</label>
                      <Input
                        type="number"
                        value={pKneeHeight}
                        name="pKneeHeight"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Knee Loose</label>
                      <Input
                        type="number"
                        value={pKneeLoose}
                        name="pKneeLoose"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Bottom</label>
                      <Input
                        type="number"
                        value={pBottom}
                        name="pBottom"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Play</label>
                      <Input
                        type="number"
                        value={pPlay}
                        name="pPlay"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <hr />
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <h4>Shirt</h4>
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Height</label>
                      <Input
                        type="number"
                        value={sHeight}
                        name="sHeight"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Body Squre</label>
                      <Input
                        type="number"
                        value={sBodySqu}
                        name="sBodySqu"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Stomach Squre</label>
                      <Input
                        type="number"
                        value={sStomachSqu}
                        name="sStomachSqu"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Seat</label>
                      <Input
                        type="number"
                        value={sSeat}
                        name="sSeat"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Shoulder</label>
                      <Input
                        type="number"
                        value={sShoulder}
                        name="sShoulder"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Hand Length</label>
                      <Input
                        type="number"
                        value={sHandLength}
                        name="sHandLength"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Kappu</label>
                      <Input
                        type="number"
                        value={sKappu}
                        name="sKappu"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Elbow Loose</label>
                      <Input
                        type="number"
                        value={sElbowLoose}
                        name="sElbowLoose"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="3">
                      <label>Collar</label>
                      <Input
                        type="number"
                        value={sCollar}
                        name="sCollar"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md="3">
                      <label>Side Loose</label>
                      <Input
                        type="number"
                        value={sSideLoose}
                        name="sSideLoose"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <div class="text-center">
                      <button className="ui teal button" onClick={handleSubmit}>
                        Add Customer
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

export default AddCustomer;
