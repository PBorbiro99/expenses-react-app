import { Button, Col, Form, Row } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { EditExpense, NewExpense, DeleteExpense } from "../services/expenses";
import { useDispatch } from "react-redux";

export default ({ expense, setIsEditing }) => {
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

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //create new expense
          NewExpense(dispatch, {
            description: description,
            amount: Number(amount),
          });
        } else {
          //edit expense
          EditExpense(dispatch, {
            id: expense.id,
            description: description,
            amount: Number(amount),
          });

          setIsEditing(false);
        }
      }}
    >
      <Row className="justify-content-between">
        <Col md="auto">
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
        <Col md="auto">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        {/* <Col> */}
        <Col md="auto" className="mt-auto">
          <div style={{ marginTop: "auto" }}>
            {isNewExpense ? (
              <Button variant="primary" type="submit">
                Add
              </Button>
            ) : (
              <div>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="danger"
                  onClick={() => DeleteExpense(dispatch, expense)}
                >
                  Delete
                </Button>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="success"
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="default"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </Col>
        {/* </Col> */}
      </Row>
    </Form>
  );
};
