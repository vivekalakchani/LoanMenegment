import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

export default function Register() {
  const [fname, setFName] = useState("");
  console.log(fname);

  const [amount, setAmount] = useState("");
  console.log(amount);

  const [id, setid] = useState("");
  console.log(id);

  const [duration, setduration] = useState("");
  console.log(duration);

  const [date, setDates] = useState("");
  console.log(date);

  const [file, setFile] = useState("");
  console.log(file);

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setFName(value);
  };

  const setnumber = (e) => {
    const { value } = e.target;
    setAmount(value);
  };
  const setidnumber = (e) => {
    const { value } = e.target;
    setid(value);
  };
  const setDurationNumber = (e) => {
    const { value } = e.target;
    setduration(value);
  };

  const setDatesNumber = (e) => {
    const { value } = e.target;
    setDates(value);
  };

  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  // add user data

  const addLoanData = async (e) => {
    e.preventDefault();

    const loan = {
      
      fname: fname,
      amount: amount,
      photo: file,
      duration:duration,
    };

    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:8000/loanDetails/add",
      loan,
      config
    );
    console.log(res);
    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      history("/");
    }

    const daliyDebit = {
            fname: fname,
            amount: amount,
            duration:duration,
          };
         
          
      console.log(daliyDebit);
          const res2= await axios.post(
            "http://localhost:8000/dailyDetails/add",
            daliyDebit,
            config
          );
          console.log(res2);
          if (res2.data.status === 401 || !res2.data) {
            console.log("error");
          } else {
            history("/");
          }
  };

 



  return (
    <div className="container mt-3">
      <h2>Enter Direct Debit Details</h2>

      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            onChange={setdata}
            placeholder="saman perera"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              aria-label="Amount (to the nearest dollar)"
              onChange={setnumber}
              name="amount"
              placeholder="1000"
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duration </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>Dates</InputGroup.Text>
            <Form.Control
              type="number"
              onChange={setDurationNumber}
              name="duration"
              placeholder="180"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Your Image</Form.Label>
          <Form.Control
            type="File"
            onChange={setimgfile}
            name="photo"
            placeholder=""
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          onClick={ addLoanData
          }
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
