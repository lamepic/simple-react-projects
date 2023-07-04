import { useState } from "react"
import List from "./components/List"
import userData from "./data"


function App() {
  const [data, setData] = useState([...userData])

  return (
    <main>
        <div className='container'>
          <h1>{data.length} Birthdays today</h1>
          <div>
            <List data={data} />
          </div>
          <button className="clear-btn" onClick={() => setData([])}>Clear All</button>
        </div>
    </main>
  )
}

export default App
