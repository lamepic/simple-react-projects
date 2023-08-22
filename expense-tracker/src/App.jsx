import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import NewTransaction from "./components/NewTransaction";

function App() {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl text-center mt-8">Expense Tracker</h1>

      <div className="mt-10">
        <p className="uppercase text-sm">Your Balance</p>
        <p className="text-2xl">$260.00</p>
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
