import logo from './logo.svg';
import './App.css';

function App() {
  const handleData = (data) => {
    console.log("Received:", data);
  }
  return (
    <div className="App">
      <h3>Child receiverd</h3>
      <Child1 handleData={handleData} />
    </div>
  );
}

function Child1({ handleData }) {
  const data = "Masaischool";
  handleData(data);
  return <h3>Child receiverd: {data}</h3>;
}

function Child2() { }

export default App;
