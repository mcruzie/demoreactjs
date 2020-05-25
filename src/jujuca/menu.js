import React, { Component } from 'react';

class MenuJujuca extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            const comments = dish.comments.map((rosca) => {
                return <li>{rosca.comment}</li>;
            });
            return (comments.length > 0 ? <h1>{dish.name}<ul>{comments}</ul></h1> : <h1>{dish.name}</h1>);
        });

        return (
            <div>
                <img src={this.props.image} />
                {menu}
            </div>)
    }
}

export default MenuJujuca;