
import './App.css';
import Date from './Date';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <h1>My current date</h1>
      <Date/>
      <h1>My current time</h1>
      <Clock/>
    </div>
  );
}

export default App;
