import React, {Component} from 'react';


class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diet: "All",
            type: "All",
            ingredients: "All"
        };
    }
    onSelectFilterDiet = event => {
        this.setState ({
            diet: event
        })
    };
    matchesFilterDiet = item => {
        if (this.state.diet === "All") {
            return true;
        } else if (this.state.diet === item.diet) {
            return true;
        } else {
            return false;
        }
    };

    onSelectFilterType = event => {
        this.setState ({
            type: event
        })
    };
    matchesFilterType = item => {
        if (this.state.type === "All") {
            return true;
        } else if (this.state.type === item.type) {
            return true;
        } else {
            return false;
        }
    };
    onSelectFilterIngredient = event => {
        this.setState ({
            ingredient: event
        })
    };
    matchesFilterIngredient = item => {
        if (this.state.ingredient === "All") {
            return true;
        } else if (this.state.ingredient === item.ingredient) {
            return true;
        } else {
            return false;
        }
    };
}

export default FilteredList;