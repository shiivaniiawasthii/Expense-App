import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expense(props) {
  const [filterValue,setFilterValue] = useState("2022")
  const filterHandler=(selectedYear)=>
  {
    setFilterValue(selectedYear)
  }
    // console.log(filterValue,"filter");
    // console.log(props.items[0],"prop")
    const newList=props.items.filter(expense=> {return expense.date.getFullYear().toString()===filterValue})
    console.log(newList)
     
    

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter 
    selected={filterValue}
    addFilter={filterHandler}
    />
    {/* <ExpensesChart expense={newList}/> */}
      {
        newList.length===0?(
          <p>No expense Found</p>
        ):(
          newList.map((expense)=>
            <ExpenseItem 
            key={Date.now()}
            title={expense.title} 
            date={expense.date} 
            amount={expense.amount}/>
                ) 
        )
      }
    


 
      
     
    </Card>
    </div>
  );
}

export default Expense;
