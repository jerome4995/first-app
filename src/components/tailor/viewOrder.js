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
import { Link, useParams } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Dropdown } from "semantic-ui-react";
import ViewOrderLarge from './viewOrderLarge';
import ViewOrderSmall from './viewOrderSmall';

//firebase
import { orderRef } from '../../firebase/Firebase';

// const options = [
//     { key: 'angular', text: 'Pending', value: 'angular' },
//     { key: 'css', text: 'Completed', value: 'css' },
//     { key: 'design', text: 'Delivered', value: 'design' },
//   ]

const ViewOrder = () => {

  const [orderDetails, setOrderDetails] = useState([]);

  const {id} = useParams()

  const fetchBlogs = () => {
    const ref = orderRef.doc(id);
    ref.get().then((doc)=>{
      if(doc.exists){
        setOrderDetails(doc.data());                                                      
      }else{
        console.log("No such document");
      }
    });
  }

  useEffect(() => {fetchBlogs()},[])

    return (
        <>
        <div className="d-none d-md-block">
        <ViewOrderLarge order={orderDetails}/>
        </div>
        <div className="d-block d-md-none">
        <ViewOrderSmall order={orderDetails}/>
        </div>
        </>
    )
}

export default ViewOrder
