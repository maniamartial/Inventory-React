import "./App.css";
import styled from "styled-components";
//Displaying data dynamically
import { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import AddItem from "./addItem";
import ItemDisplay from "./ItemDisplay";
import Test from "./Class";

//Creating component styling
const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : "green")};
`;

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  const [showTest, setShowTest] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);
  useEffect(() => {
    console.log("use Effect");
    return () => {
      console.log("cleanup");
    };
  }, [data, filters]);

  //U ca use alot of use effects with different functionalities
  useEffect(() => {
    console.log("second fucks ");
  });
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(item);
        setData({ items: items });
      });

    // console.log(data);
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      //console.log(filters);
      if (filters.name !== " " && item.name !== filters.name) {
        continue;
      }

      if (filters.price !== "" && item.name !== filters.price) {
        continue;
      }

      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }

      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3" style={{}}>
        <Title>Relax am feeling njaa BUANA</Title>
      </div>

      <div className="row mt-3" style={{ color: "red" }}>
        <ItemDisplay items={filterData(data["items"])} />
      </div>

      <div className="row mt-3" style={{}}>
        <SearchBar updateSearchParams={updateFilters} />
      </div>

      <div className="row mt-3" style={{}}>
        <AddItem addItem={addItemToData} />
      </div>
      <div className="row mt-3" style={{}}>
        {showTest ? <Test destroy={setShowTest} /> : null}
      </div>
    </div>
  );
}

export default App;

//import Info from "./Info.js";
//import { PropTypes } from "prop-types";
/*import { useState } from "react";
import SearchBar from "./searchBar";
function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };

  return (
    <div className="App">
      <SearchBar callback={updateData} />

      <p>Name: {"name" in data ? data["name"] : "No Name to display"}</p>
      <p>
        Price: {"maxprice" in data ? data["maxprice"] : "No price to display"}
      </p>
      <p>Type: {"type" in data ? data["type"] : "No type to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No brand to display"}</p>
    </div>
  );
}

export default App;

//Use State Over
/*
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
