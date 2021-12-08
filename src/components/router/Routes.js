import React from "react";
import { Route, Redirect } from "react-router-dom";

//Login page
import Loginpage from "../auth/loginpage";
import Logout from "../auth/logout";

// tailor
import OrderList from "../tailor/orderList";
import AddOrder from "../tailor/addOrder";
import CustomerList from "../tailor/customerList";
import AddCustomer from "../tailor/addCustomer";
import OrderListTest from "../tailor/OrderListTest";
import FormTest from "../tailor/FormTest";

// tailor order
import ViewOrder from "../tailor/viewOrder";
import EditOrder from "../tailor/editOrder";

// tailor customer
import ViewCustomer from "../tailor/viewCustomer";
import EditCustomer from "../tailor/editCustomer";

// header
import Header from "../header";

const login = localStorage.getItem("login");

const BaseRouter = () => {
  return (
    <>
      <Route path="/" exact>
        <Loginpage />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      {login ? (
        <>
          <Route path="/orderlist">
            <Header />
            <OrderList />
          </Route>
          <Route path="/addorder">
            <Header />
            <AddOrder />
          </Route>
          <Route path="/customerlist">
            <Header />
            <CustomerList />
          </Route>
          <Route path="/addcustomer">
            <Header />
            <AddCustomer />
          </Route>
          <Route path="/vieworder/:id">
            <Header />
            <ViewOrder />
          </Route>
          <Route path="/editorder/:id">
            <Header />
            <EditOrder />
          </Route>
          <Route path="/viewcustomer/:id">
            <Header />
            <ViewCustomer />
          </Route>
          <Route path="/editcustomer/:id">
            <Header />
            <EditCustomer />
          </Route>
          {
            /* <Route path="/orderlisttest">
            <Header />
            <OrderListTest />
          </Route>*/
            <Route path="/formtest">
              <Header />
              <FormTest />
            </Route>
          }
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default BaseRouter;
