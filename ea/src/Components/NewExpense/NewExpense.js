import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import {useState} from "react"

function NewExpense(props) {
  const[isEdititing,setIsEditing] = useState(false)
  const SaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now(),
      
    };

    props.addExpenseHandler(expenseData);
    setIsEditing(false)
  };
  const handleForm=()=>{
    setIsEditing(true)
  }
  const handleEdit=()=>{
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {isEdititing && <ExpenseForm onSaveExpense={SaveExpenseHandler} handleCancel={handleEdit}/>}
      <button onClick={handleForm}>Add New Expense</button>
      
    </div>
  );
}

export default NewExpense;
