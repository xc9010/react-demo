import React, {Component} from 'react';

import {Button} from 'shineout'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <Button
                  type='success'
                  onClick={() => this._handleClick()}>自增</Button>
            </div>
        )
    }
}
