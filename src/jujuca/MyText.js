import React, { Component } from 'react';
import './styles/MyText.css'

class MyText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    <label>{this.props.props.label}</label>
                    <input className="MyText" type={this.props.props.type}
                        placeholder={this.props.props.placeholder}
                        onChange={this.props.onchanged}
                    />
                </p>
            </div>)
    }
}

export default MyText;