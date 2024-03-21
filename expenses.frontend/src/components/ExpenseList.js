import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Row, Col } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

export default () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return expenses.map((e) => (
    <div key={e.id} style={{ marginBottom: "1rem" }}>
      <ListRow expense={e} />
    </div>
  ));
};

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false)
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div style={{ borderBottom: "1px solid gray" }}>
      <Row className="justify-content-between">
        <Col md="2" className="mt-auto">
          {expense.description}
        </Col>
        <Col md="2" className="mt-auto">
          ${expense.amount}
        </Col>
        <Col md="auto">
          <Button style={{ justifyContent: "right" }} variant="warning" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
      </Row>
    </div>
  );
};
