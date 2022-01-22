import React from "react";
import { PropTypes } from "prop-types";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  /*
classs Info extends React.Component{
  constructor(props){
    super(props);
    console.log(props)
  }
}
  */

  render() {
    const title = this.props.title;
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Manage the Inventory</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

Info.defaultProps = {
  title: "Midecha",
};

Info.protoTypes = {
  title: PropTypes.string,
};
export default Info;

//function based classes
/*
 function Info(){
  const title="Mania is back with some goodies";
  const showTitle=false;

if(showTitle){
    return (
        <div>
            <h1>{title}</h1>
            <p>Manage the Inventory</p>
        </div>
    );
}
else{
    return <p>empty</p>
}
}
export default Info;
/*
return (
    <div>
    <h1>{showTitle ? title:"No title"}</h1>
    <p>Manage your things</p>
    </div>
  );
}*/
