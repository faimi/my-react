import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease, reset } from "../../redux/actions";

class calculation extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <span>当前计数值为：{this.props.reducers.count}</span>
        <button onClick={() => this.props.increases()}>增加</button>
        <button onClick={() => this.props.decreases()}>减少</button>
        <button onClick={() => this.props.resets()}>重置</button>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    increases: () => {
      dispatch(increase());
    },
    decreases: () => {
      dispatch(decrease());
    },
    resets: () => {
      dispatch(reset());
    }
  })
)(calculation);
