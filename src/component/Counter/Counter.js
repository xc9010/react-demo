import React, {Component} from 'react';
import {increment, decrement, reset} from './actions';

import {connect} from 'react-redux';

import {Button} from 'shineout'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为{this.props.counter.count}</div>
        <Button type='warning' onClick={() => this.props.increment()}>自增
        </Button>
        <Button type='warning' onClick={() => this.props.decrement()}>自减
        </Button>
        <Button type='warning' onClick={() => this.props.reset()}>重置
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
