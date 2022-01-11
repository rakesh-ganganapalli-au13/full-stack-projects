import './App.css';
import Dashboard from './components/dashboard.js'
import Store from './components/context'

function App() {
  return (
    <div className="App">
      <Store>
         <Dashboard/>
      </Store>

    </div>
  );
}

export default App;
