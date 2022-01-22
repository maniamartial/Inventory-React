import "./App.css";
import Info from "./Info.js";
import { PropTypes } from "prop-types";

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
