import React, { Component } from 'react';
import MenuJujuca from './menu';

class MenuJujucaExtended extends MenuJujuca {
    constructor(props) {
        super(props);

    }



    render(){

        const menu = this.props.dishes.map((dish) => {
            return <h1>{dish.name}</h1>;
        });

        return (
            <div>
                <h1 className="">{this.props.colors.primaryColor}</h1>
                <img src={this.props.image} />
                {menu}

            </div>)
    }
}

export default MenuJujucaExtended;