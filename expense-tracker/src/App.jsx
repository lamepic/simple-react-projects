import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import NewTransaction from "./components/NewTransaction";
import { useStateValue } from "./store";

function App() {
  const [state, dispatch] = useStateValue();

  const total = state.transactions
    .map((trans) => parseFloat(trans.amount))
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl text-center sticky top-0 p-5 bg-[#f5f5dc]">
        Expense Tracker
      </h1>

      <div className="mt-10">
        <p className="uppercase text-sm">Your Balance</p>
        <p className="text-2xl">${total}</p>
      </div>

      <div className="mt-10">
        <IncomeExpense />
      </div>

      <div className="mt-10">
        <History />
      </div>

      <div className="mt-16">
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
