
import Expense from "./Components/Expense"

function App() {
  const expenses =[
    {
      id:"e1",
      title:"car",
      amount:1000,
      date:new Date(2020,2,12)
    },
    {
      id:"e2",
      title:"Ac",
      amount:10000,
      date:new Date(2020,8,12)
    },
    {
      id:"e3",
      title:"books",
      amount:100,
      date:new Date(2020,2,12)
    },
    {
      id:"e4",
      title:"cloths",
      amount:1000,
      date:new Date(2010,2,12)
    }
  ]
  return (
    <>
     
      <Expense expenses={expenses}/>
    
    </>
  );
}

export default App;
