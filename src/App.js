import "./App.css";
import Info from "./Info.js";
//import { PropTypes } from "prop-types";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />

      <ButtonState></ButtonState>
      <Example />
    </div>
  );
}

//State management
function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We are coming home baiby");
  };

  const updateCounterClicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Data title={title} count={count} />

      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title:{props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

Data.defaultProps = {
  title: "Kumbafu",
  count: 2,
};

ButtonState.protyTypes = {};
//Mine
function Example() {
  const [num, setNumber] = useState(0);
  const [fruit, setFruit] = useState("Ovacado");

  const updateNumber = () => {
    setNumber(num + 1);
  };

  return (
    <div>
      <p>Number: {num}</p>
      <p>Fruit:{fruit}</p>
      <button onClick={updateNumber}>Update Number</button>
      <button onClick={() => setFruit("Mayai")}>Update Fruit</button>
    </div>
  );
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <Info />

      <AddItem text="Mania" number={2} />
      <AddItem text="Mokeira" number={"hep baby"} />
      <AddItem />
    </div>
  );
}

//If you have few values u can decide not to use props and just go with raw
//function AddItem({text, number}){
//const value=text;
//}
/*
function AddItem(props) {
  const value = props.text;
  return (
    <form>
      <lable for="text-form">Ufala udogo</lable>
      <input type="text" id="text-form" value={value} />
      <p>{props.number}</p>
    </form>
  );
}
//Using teh prop defaults, if user doesnt enter any value then output that one in teh default
AddItem.defaultProps = {
  number: 10,
  text: "Melisa",
};
//Specify teh type of props
AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};
export default App;

/*function Info(){
  const title="Mania is back with some goodies";
  const showTitle=false;
  return ( 
    <div>
    <h1>{showTitle ? title:"No title"}</h1>
    <p>Manage your things</p>
    </div>
  )
}*/
