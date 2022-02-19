import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {title: 'Car Insurance', amount: 234.33, date: new Date(2022, 1, 10)},
    {title: 'Bike Insurance', amount: 54.00, date: new Date(2021, 2, 8)},
    {title: 'House Insurance', amount: 372.00, date: new Date(2020, 7, 2)},
  ]

  const addExpenseHandler = expense => {
    const NewExpense = {
      ...expense
    }
    console.log(NewExpense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>

  );
}

export default App;
