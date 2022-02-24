import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./table.css";
import { Icon, ItemContent } from "semantic-ui-react";
import Swal from "sweetalert2";
//firebase
import { orderRef, db } from "../../firebase/Firebase";
import firebase from "firebase";
import OrderList from "./orderList";

const OrderTable = ({ orderDetails }) => {
  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        orderRef
          .doc(id)
          .delete()
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            window.location.replace("/orderlist");
            // setRefresh(!refresh);
          })
          .catch((error) => {
            // console.error("Error removing document: ", error);
          });
      }
    });
  };
  let i = 1;
  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Order No</th>
            <th>Phone</th>
            <th>No. of Pant</th>
            <th>No. of Shirt</th>
            <th>Delivery Date</th>
            <th>Status</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((item, id, index) => (
            <tr keys={id}>
              <td data-label="Order No">{id + 1}</td>
              <td data-label="Phone">{item.phoneNumber}</td>
              <td data-label="No. of Pant">{item.nPant}</td>
              <td data-label="No. of Shirt">{item.nShirt}</td>
              <td data-label="Delivery Date">{item.dDate}</td>
              <td data-label="Status">{item.oStatus}</td>
              <td data-label="Message">
                <Icon color="olive" name="checkmark" size="large" />
              </td>
              <td data-label="Action">
                <Link
                  to={`/vieworder/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <i class="green eye icon"></i>
                </Link>
                &nbsp;
                <Link
                  to={`/editorder/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <i class="yellow edit icon"></i>
                </Link>
                &nbsp;
                <i
                  class="red trash alternate icon"
                  onClick={() => onDelete(item.id)}
                ></i>
              </td>
            </tr>
            //let i= i + 1;
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
