import './App.css'
import Addtask from './Components/Addtask/Addtask'
import Tasklist from './Components/ListTask/ListTask'

function App() {

  return (
    <>
      <div className="todo">
        <div>
            <h1>
              TODO LIST WITH REDUX
            </h1>
            <Addtask />
            <Tasklist/>
        </div>
      </div>
    </>
  )
}

export default App
