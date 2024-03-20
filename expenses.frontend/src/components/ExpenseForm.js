import { Button, Col, Form, Row } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";

export default () => {
  const descriptions = [
    "Groceries",
    "Credi card",
    "Loans",
    "Eating out",
    "Gas",
  ];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();

  return <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //create new expense
          NewExpense(dispatch, { description: description, amount: amount });
        } else {
          //edit expense
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d) => (
              <option>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        {/* <Col> */}
        <div style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button variant="danger">Delete</Button>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="default">Cancel</Button>
            </div>
          )}
        </div>
        {/* </Col> */}
      </Row>
    </Form>
  
};
