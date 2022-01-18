// import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';

// function App() {
//   const handleData = (data) => {
//     console.log("Received:", data);
//   }
//   return (
//     <div className="App">
//       <h3>Child receiverd</h3>
//       <Child1 handleData={handleData} />
//     </div>
//   );
// }

// function Child1({ handleData }) {
//   const data = "Masaischool";
//   handleData(data);
//   return <h3>Child receiverd: {data}</h3>;
// }

// function Child2() { }



// have a function in parent
// give it to child
// call function in child, send some data in it as argument



// import { useState } from "react";


// function App() {
//   const [data, setData] = useState("");
//   const handleData = (name) => {
//     console.log("parent Received: ", name);
//     setData(name);
//   };
//   return (
//     <div className="App">
//       <h3>Child receiverd</h3>
//       <Child1 handleData={handleData} />
//       <Child2 data={data} />
//     </div>
//   );
// }

// function Child1({ handleData }) {
//   const data = "Masaischool";
//   handleData(data);
//   return <h3></h3>;
// }

// function Child2({ data }) {
//   return <div>Child 2 received: {data}</div>
// }




// import { Todo } from "./components/Todo";


function App() {
  return (
    <div className="App">
      <Todo/> 
    </div>
  );
}



export default App;