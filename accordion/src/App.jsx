import Question from "./components/Question";
import data from "../src/data";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="p-10 pb-20 bg-white rounded-md shadow-md w-6/12 space-y-12">
        <h1 className="text-5xl text-blue-950 text-center">Questions</h1>
        <div className="flex flex-col gap-6 items-center">
          {data.map((question) => {
            return <Question key={question.id} question={question} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
