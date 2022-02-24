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

const mapTest = () => {
  return (
    <div>
      <h1>Map Test</h1>
    </div>
  );
};

export default mapTest;
