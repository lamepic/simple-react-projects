import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = useState("# markdown preview");

  return (
    <main className="container">
      <div className="markdown">
        <div className="markdown__textbox">
          <textarea
            className="text-area"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="markdown__preview">
          <ReactMarkdown>{input}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}

export default App;
