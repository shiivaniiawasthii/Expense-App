import React from 'react'
import "./ExpenseForm.css"
import{useState} from "react"

function ExpenseForm() {
const [intitle,setTitle] = useState("")
const [inamount,setAmount] = useState("")
const [indate,setDate] = useState("")

const titleChangeHandler=(e)=>{
        setTitle(e.target.value)
        // console.log(title)
}
       
const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
        // console.log(amount)
}
      
const dateChangeHandler=(e)=>{
        setDate(e.target.value)
        // console.log(date)
}

const submitHandler = (event) => {
        event.preventDefault()
const expenseData={
       
        title:intitle,
        date:indate,
        amount:inamount
}
 console.log(expenseData)
 setTitle("")
 setAmount("")
 setDate("")
}
        
               
  return (
    <form onSubmit={submitHandler}>
       <div className='new-expense__control'>
        <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" 
                onChange={titleChangeHandler}
                value={intitle}/>
        </div>
        <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min=".01" step=".01" onChange={amountChangeHandler}  value={inamount}/>
        </div>
        <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-3" onChange={dateChangeHandler}  value={indate}/>
        </div>
        <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
        </div>
       </div>
        </form>
  )
}

export default ExpenseForm