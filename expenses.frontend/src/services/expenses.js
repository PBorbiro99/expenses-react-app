import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
  try {
    // API call
    const expenses = [
      { id: 1, description: "Groceries", amount: 23.15 },
      { id: 2, description: "Gas", amount: 123.15 },
      { id: 3, description: "Loans", amount: 1222.15 },
    ];
    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error!");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    //API call
    dispatch(
      ActionCreators.newExpense({
        id: 10,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch {
    console.log("Error!");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //api call
    dispatch(ActionCreators.editExpense(expense));
  } catch {
    console.log("!Error");
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //api call
    dispatch(ActionCreators.deleteExpense(expense));
  } catch {
    console.log("!Error");
  }
};
