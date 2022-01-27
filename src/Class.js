import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //Component didmount used to output or run something immediately teh site loads
  componentDidMount() {
    console.log("Mounted");
  }

  //Comp didupdate
  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Cleanup operation");
  }
  clickedButton() {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.destroy(false);
    console.log("clicked lol");
  }

  render() {
    return (
      <div>
        <p>Clicked: {this.state.count} times</p>
        <button
          className="btn btn-primary"
          onClick={() => this.clickedButton()}
        >
          Click Me !
        </button>
      </div>
    );
  }
}
