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
import { DataGrid } from "@mui/x-data-grid";
import { Icon } from "semantic-ui-react";
import "./table.css";
import Swal from "sweetalert2";
import OrderTableTest from "./OrderTableTest";

import { orderRef } from "../../firebase/Firebase";
import { firebaseLooper } from "../../firebase/FirebaseLooper";

const OrderListTest = () => {
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
    return rows.filter(
      (row) =>
        row.oPhoneNumber.toString().toLowerCase().indexOf(term) > -1 ||
        row.oName.toLowerCase().indexOf(term) > -1
    );
  }

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
              <Col md="12">
                <OrderTableTest orderDetails={search(orderDetails)} />
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderListTest;
