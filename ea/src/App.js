import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
import {useState} from "react"
const dummyData = [
  {
    id: "e1",
    title: "car",
    amount: 1000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    title: "Ac",
    amount: 10000,
    date: new Date(2020, 8, 12),
  },
  {
    id: "e3",
    title: "books",
    amount: 100,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e4",
    title: "cloths",
    amount: 1000,
    date: new Date(2019, 2, 12),
  },
];
function App() {
  
  const [expenses,setExpenses] = useState(dummyData)
  
  const addExpenseHandler=(newEx)=>{
    setExpenses((prevExpenses)=>{
        return [newEx,...prevExpenses]
    })
  
  }
  return (
    <>
    <NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expense items={expenses} />
      
    </>
  );
}

export default App;
