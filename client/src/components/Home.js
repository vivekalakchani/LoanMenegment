import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default function Home() {
  const [data, setData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/dailyDetails/list",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //console.log(response);
      const data = response.data;
     // console.log({ data });
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container mt-2">
      <h2 className="text-center mt-2">Loan Details</h2>
      <div className="text-end">
        <Button variant="dark">
          <NavLink to="/register" className="text-decoration-none text-light ">
            Add Loan
          </NavLink>
        </Button>
      </div>
      <div className="row d-flex  align-iteams-center mt-5">
      <Table striped="columns">
      <thead>
        <tr>
          <th>id</th>
          <th>Name </th>
          <th>Loan Amount</th>
          <th>Duration</th>
          <th>Start Day</th>
          <th>More ...</th>
        </tr>
      </thead>
        {data.length > 0
          ? data.map((el, i) => {
              console.log(el);
              return (
                <>
             
      <tbody>
        <tr>
          <td>{el._id}</td>
          <td>{el.fname}</td>
          <td>$ {el.amount}</td>
          <td>{el.duration}</td>
          <td>{el.date}</td>
          <td><Button variant="dark">
                        <NavLink
                          to={`/details/${el._id}`}
                          className="text-decoration-none text-light "
                        >
                          Details
                        </NavLink>
                      </Button></td>
        </tr>
        
          </tbody>
          
                  
                </>
              );
              
            })
          : ""}
          </Table>
      </div>
    </div>
  );
}
