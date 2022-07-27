import React, { useEffect } from "react";
import { fetchCustomers } from "../features/customers/customersSlice";
import { useSelector, useDispatch } from 'react-redux'; 
import { useState } from "react";
export default function CustomerList() {
    const dispatch = useDispatch();
    const customerList = useSelector(state => state.customers)
    useEffect(() => {
      dispatch(fetchCustomers())
    },[])
    console.log(customerList);
    const [customer, setCustomer] = useState([]);
    return (
    <div>
      
    </div>
  );
}
