import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { ExpenseTracker } from './pages/expense-tracker/index.jsx'
import { Auth } from './pages/auth/index';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/expense-tracker" exact element = {<Auth/>}/>
        <Route path="/expense-trackers-data" element={<ExpenseTracker/>}/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
