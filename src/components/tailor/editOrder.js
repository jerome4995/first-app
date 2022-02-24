import React, { useState, useEffect } from "react";
import Header from "../header";
import Card from "react-bootstrap/Card";
import {
  // Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Input,
  Form,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import "./table.css";
import Swal from "sweetalert2";

//firebase
import { orderRef } from "../../firebase/Firebase";

const options = [
  { key: "angular", text: "Pending", value: "Pending" },
  { key: "css", text: "Completed", value: "Completed" },
  { key: "design", text: "Delivered", value: "Delivered" },
];

const EditOrder = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const {
    name,
    phoneNumber,
    oStatus,
    dDate,
    nPant,
    nShirt,
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
  } = orderDetails;

  const { id } = useParams();

  const fetchBlogs = () => {
    const ref = orderRef.doc(id);
    ref.get().then((doc) => {
      if (doc.exists) {
        setOrderDetails(doc.data());
      } else {
        console.log("No such document");
      }
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };
  const handleDropDown = (event, result) => {
    const { name, value } = result || event.target;
    // console.log(name, value);
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      phoneNumber,
      oStatus,
      dDate,
      nPant,
      nShirt,
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
    } = orderDetails;

    const updateRef = orderRef.doc(id);
    updateRef
      .update({
        name,
        phoneNumber,
        oStatus,
        dDate,
        nPant,
        nShirt,
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
      })
      .then(() => {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Order Details has been updated successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        // setTimeout(()=>{this.props.history.push("/view/"+this.props.match.params.id)},1900)
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="container" style={{ marginTop: "12px" }}>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Link to="/orderlist" style={{ textDecoration: "none" }}>
                <i class="large arrow alternate circle left teal icon"></i>
              </Link>
            </Col>
            <h5 style={{ textAlign: "center", marginTop: "-27px" }}>
              Edit Order
            </h5>
          </Row>
        </Card.Header>{" "}
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
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="4">
                      <label>Name</label>
                      <Input
                        type="text"
                        value={name}
                        name="name"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="4">
                      <label>Age</label>
                      <Input
                        type="number"
                        value={age}
                        name="age"
                        onChange={onChangeHandler}
                      />
                    </Col>
                  </Row>
                  <Row className="pb-3 pl-3 pr-3">
                    <Col md="6">
                      <label>Email</label>
                      <Input
                        type="email"
                        value={oEmail}
                        name="oEmail"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="6">
                      <label>Address</label>
                      <Input
                        type="textarea"
                        value={address}
                        name="address"
                        onChange={onChangeHandler}
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
                        name="pHeight"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Hip</label>
                      <Input
                        type="number"
                        value={pHip}
                        name="pHip"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Hip Down</label>
                      <Input
                        type="number"
                        value={pHipDown}
                        name="pHipDown"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Thigh Tight</label>
                      <Input
                        type="number"
                        value={pThighTight}
                        name="pThighTight"
                        onChange={onChangeHandler}
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
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Knee Height</label>
                      <Input
                        type="number"
                        value={pKneeHeight}
                        name="pKneeHeight"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Knee Loose</label>
                      <Input
                        type="number"
                        value={pKneeLose}
                        name="pKneeLose"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Bottom</label>
                      <Input
                        type="number"
                        value={pBottom}
                        name="pBottom"
                        onChange={onChangeHandler}
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
                        onChange={onChangeHandler}
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
                            name="nPant"
                            onChange={onChangeHandler}
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
                        name="sHeight"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Body Squre</label>
                      <Input
                        type="number"
                        value={sBodySqu}
                        name="sBodySqu"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Stomach Squre</label>
                      <Input
                        type="number"
                        value={sStoamchSqu}
                        name="sStoamchSqu"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Seat</label>
                      <Input
                        type="number"
                        value={sSeat}
                        name="sSeat"
                        onChange={onChangeHandler}
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
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Hand Length</label>
                      <Input
                        type="number"
                        value={sHandLength}
                        name="sHandLength"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Kappu</label>
                      <Input
                        type="number"
                        value={sKappu}
                        name="sKappu"
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Elbow Lose</label>
                      <Input
                        type="number"
                        value={sElbowLoose}
                        name="sElbowLoose"
                        onChange={onChangeHandler}
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
                        onChange={onChangeHandler}
                      />
                    </Col>
                    <Col md="3">
                      <label>Side Lose</label>
                      <Input
                        type="number"
                        value={sSideLoose}
                        name="sSideLoose"
                        onChange={onChangeHandler}
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
                            name="nShirt"
                            onChange={onChangeHandler}
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
                            name="dDate"
                            onChange={onChangeHandler}
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
                        value={oStatus}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <div class="text-center">
                      <button className="ui teal button" onClick={onSubmit}>
                        Update Order
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

export default EditOrder;
