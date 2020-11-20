import React, {Component} from 'react';
import DisplayList from './DisplayList';
import TopBar from './TopBar';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diet: "All",
            type: "All",
            flavor: "All",
            sortCriteria: "Select"
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
    onSelectFilterFlavor = event => {
        this.setState ({
            flavor: event
        })
    };
    matchesFilterFlavor = item => {
        if (this.state.flavor === "All") {
            return true;
        } else if (this.state.flavor === item.flavor) {
            return true;
        } else {
            return false;
        }
    };
    
    onSelectSort = event => {
        this.setState ({
            sortCriteria: event
        })
        return event;
    };

    sortList = (a, b) => {
        if (this.state.sortCriteria === "PrepAscending") {
            return a.prep - b.prep;
        } else if (this.state.sortCriteria === "PrepDescending") {
            return b.prep - a.prep;
        } else if (this.state.sortCriteria === "CookAscending") {
            return a.cook - b.cook;
        } else if (this.state.sortCriteria === "CookDescending") {
            return b.cook - a.cook;
        } else if (this.state.sortCriteria === "ServingsAscending") {
            return a.servings- b.servings;
        } else if (this.state.sortCriteria === "ServingsDescending") {
            return b.servings- a.servings;
        } else {
            return 0;
        }
    };
    
    render() {
        return (
            <div>
            <TopBar onSelectFilterDiet={this.onSelectFilterDiet} onSelectFilterType={this.onSelectFilterType} onSelectFilterFlavor={this.onSelectFilterFlavor} onSelectSort={this.onSelectSort} sortTitle={this.state.sortCriteria}/>
            <DisplayList list={this.props.list.filter(this.matchesFilterDiet).filter(this.matchesFilterType).filter(this.matchesFilterFlavor).sort(this.sortList)} addFavorite={this.props.addFavorite}/>
            </div>
        );
    }
}
export default FilteredList;