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
import { Link , useParams } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Dropdown } from "semantic-ui-react";
import ViewCustomerLarge from './viewCustomerLarge';
import ViewCustomerSmall from './viewCustomerSmall';

//firebase
import { customerRef } from '../../firebase/Firebase';

// const options = [
//     { key: 'angular', text: 'Pending', value: 'angular' },
//     { key: 'css', text: 'Completed', value: 'css' },
//     { key: 'design', text: 'Delivered', value: 'design' },
//   ]

const ViewCustomer = () => {
    
  const [customerDetails, setCustomerDetails] = useState([]);
  // const { name, phoneNumber, age, emailId, address, pHeight, pHip, pHipDown, pThighTight, pThighLoose, pKneeHeight, pKneeLoose, pBottom, pPlay, sHeight, sBodySqu, sStomachSqu, sSeat, sShoulder, sHandLength, sKappu, sElbowLoose, sCollar, sSideLoose } = customerDetails;
  const {id} = useParams()

  const fetchBlogs = () => {
    const ref = customerRef.doc(id);
    ref.get().then((doc)=>{
      if(doc.exists){
        setCustomerDetails(doc.data());                                                      
      }else{
        console.log("No such document");
      }
    });
  }

  useEffect(() => {fetchBlogs()},[])

    return (
        <>
        <div className="d-none d-md-block">
        <ViewCustomerLarge customer={customerDetails}/>
        </div>
        <div className="d-block d-md-none">
        <ViewCustomerSmall customer={customerDetails}/>
        </div>
        </>
    )
}

export default ViewCustomer
