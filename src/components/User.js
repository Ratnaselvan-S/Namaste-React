import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div style={{ marginTop: "200px" }}>
        <h3>Count :{this.state.count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click me
        </button>
        <h2>name:{this.props.name}</h2>
      </div>
    );
  }
}

export default User;
