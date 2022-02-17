import { Expenses } from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {title: 'Car Insurance', amount: 234.33, date: new Date(2022, 1, 10)},
    {title: 'Bike Insurance', amount: 54.00, date: new Date(2021, 2, 8)},
    {title: 'House Insurance', amount: 372.00, date: new Date(2020, 7, 2)},
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>

  );
}

export default App;
