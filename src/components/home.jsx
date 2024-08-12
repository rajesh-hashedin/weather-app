import React, { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/actions";

class Home extends Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => increment(1)}>+</button>
        <button onClick={() => decrement(-1)}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
