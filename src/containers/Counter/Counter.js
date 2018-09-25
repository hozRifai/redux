import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.AddingCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.SubsCounter} />
        <hr />
        <button onClick={() => this.props.StoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map(rst => (
            <li key={rst.id} onClick={() => this.props.DeleteResult(rst.id)}>
              {rst.value}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    AddingCounter: () => dispatch({ type: "ADDING", value: 10 }),
    SubsCounter: () => dispatch({ type: "SUBSTRACTING", value: 15 }),
    StoreResult: result => dispatch({ type: "STORE_RESULT", result: result }),
    DeleteResult: id => dispatch({ type: "DELETE_RESULT", elemId: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
