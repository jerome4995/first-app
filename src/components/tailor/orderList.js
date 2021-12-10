import React, { useState, useEffect } from "react";
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
} from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./table.css";
import OrderTable from "./orderTable";

//firebase
import { orderRef } from "../../firebase/Firebase";
import { firebaseLooper } from "../../firebase/FirebaseLooper";
import firebase from "firebase";

const OrderList = () => {
  const [store, setStore] = useState([]);
  const [reload, setReload] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const [term, setTerm] = useState("");

  const fetchBlogs = async () => {
    orderRef.get().then((res) => {
      const forms = firebaseLooper(res);
      setOrderDetails(forms);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  function search(rows) {
    return rows.filter((row) => {
      console.log(row, "test");
      console.log(row.phoneNumber, "test 1");
      console.log(row.name, "test 2");
      return (
        row.phoneNumber.toString().toLowerCase().indexOf(term) > -1 ||
        row.name.toLowerCase().indexOf(term) > -1
      );
    });
  }
  const fetchData = async () => {
    await firebase
      .firestore()
      .collection("order")
      .get()
      .then((res) => {
        const detail = firebaseLooper(res);
        setStore(detail);
        // console.log(detail,'detail')
      });
  };
  const handleFilterPending = (value) => {
    if (value == undefined) {
      fetchData();
    } else {
      firebase
        .firestore()
        .collection("order")
        .where("oStatus", "==", value)
        .get()
        .then((res) => {
          const forms = firebaseLooper(res);
          setStore(forms);
          console.log(forms, "Pending");
        });
    }
  };

  const handleFilterCompleted = (value) => {
    if (value == undefined) {
      fetchData();
    } else {
      firebase
        .firestore()
        .collection("order")
        .where("oStatus", "==", value)
        .get()
        .then((res) => {
          const forms = firebaseLooper(res);
          setStore(forms);
          console.log(forms, "Completed");
        });
    }
  };
  const handleFilterDelivered = (value) => {
    if (value == undefined) {
      fetchData();
    } else {
      firebase
        .firestore()
        .collection("order")
        .where("oStatus", "==", value)
        .get()
        .then((res) => {
          const forms = firebaseLooper(res);
          setStore(forms);
          console.log(forms, "Delivered");
        });
    }
  };
  useEffect(() => {
    fetchData();
  }, [reload]);

  return (
    <div className="container" style={{ marginTop: "12px" }}>
      <Card>
        <Card.Header>
          <Row>
            <h5>Order List</h5>
            <Col
              className="d-block d-md-none"
              style={{ textAlign: "right", marginTop: "-29px" }}
            >
              <Link to="/addorder" style={{ textDecoration: "none" }}>
                <i class="large plus teal icon"></i>
              </Link>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <div className="content">
            <Row>
              <Col md="6">
                <div className="ml-0 mr-0">
                  <div class="ui category search">
                    <div class="ui icon input">
                      <input
                        class="prompt"
                        type="text"
                        placeholder="Search..."
                        name="search"
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                      />
                      <i class="search icon"></i>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="d-none d-md-block">
                <div className="update add-cust-btn">
                  <Link to="./addorder">
                    <button class="right floated ui teal button">
                      Add Order
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md="12" className="d-none d-md-block">
                <button
                  class="right floated ui grey button"
                  onClick={() => handleFilterDelivered("Delivered")}
                >
                  Delivered
                </button>
                <button
                  class="right floated ui grey button"
                  onClick={() => handleFilterCompleted("Completed")}
                >
                  Completed
                </button>
                <button
                  class="right floated ui grey button"
                  onClick={() => handleFilterPending("Pending")}
                >
                  Pending
                </button>
                <button class="right floated ui grey button">All</button>
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="d-block d-md-none">
                <button class="right floated ui grey button">Pending</button>
                <button class="right floated ui grey button">All</button>
              </Col>
            </Row>
            &nbsp;
            <Row>
              <Col xs="12" className="d-block d-md-none">
                <button class="right floated ui grey button">Delivered</button>
                <button class="right floated ui grey button">Completed</button>
              </Col>
            </Row>
            &nbsp;
            <Row>
              <Col md="12">
                <OrderTable orderDetails={search(orderDetails)} />
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderList;
