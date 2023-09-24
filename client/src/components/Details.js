import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

const Details = () => {
  const [customer, setCustomer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(`http://localhost:8000/dailyDetails/list/${id}`);
        setCustomer(response.data);
      
      } catch (error) {
        console.error("Error:", error);
      
      }
    };

    fetchData();
  }, []);

  
  console.log(customer);

  return (
    <div className="container mt-2">

<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Customer Details</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      <ListGroup.Item>Loan ID: {customer.Loanid}</ListGroup.Item>
      <ListGroup.Item>DailyDebit ID: {customer.dailyDebitid}</ListGroup.Item>
      <ListGroup.Item>Name : {customer.fname}</ListGroup.Item>
      <ListGroup.Item>Loan Amount: ${customer.amount}.00</ListGroup.Item>
      <ListGroup.Item>Loan Duration: {customer.duration} days</ListGroup.Item>
      
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Repayment Schedule</Accordion.Header>
        <Accordion.Body>
        <Table striped="columns">
            <thead>
              <tr>
                <th>Installment Number</th>
                <th>Due Date</th>
                <th>Installment Amount</th>
                <th>Remaining Balance</th>
                  
              </tr>
            </thead>
            <tbody>
              {customer.repaymentSchedule?.map((repayment) => (
                <tr key={repayment._id}>
                  <td>{repayment.installmentNumber}</td>
                  <td>{new Date(repayment.dueDate).toLocaleDateString()}</td>
                  <td>${repayment.installmentAmount}.00</td>
                  <td>${repayment.remainingBalance}.00</td>
                
                  
                </tr>
              ))} 

               
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>

        
      ) 
      
              }


export default Details;

