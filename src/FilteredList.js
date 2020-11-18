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
            prepTime: "Select",
            cookTime: "Select",
            servingSize: "Select"
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
    
    onSelectSortPrep = event => {
        this.setState ({
            prepTime: event
        })
        return event;
    }

    sortPrep = (a, b) => {
        if (this.state.prepTime === "ShortFirst") {
            return a.prep - b.prep;
        } else if (this.state.prepTime === "LongFirst") {
            return b.prep - a.prep;
        } else {
            return 0;
        }
    }

    onSelectSortCook = event => {
        console.log(event);
        this.setState ({
            cookTime: event
        })
        return event;
    }

    sortCook = (a, b) => {
        if (this.state.cookTime === "ShortFirst") {
            return a.cook - b.cook;
        } else if (this.state.cookTime === "LongFirst") {
            return b.cook - a.cook;
        } else {
            return 0;
        }
    }
    
    onSelectSortServings = event => {
        this.setState ({
            servingSize: event
        })
        return event;
    }

    sortServings = (a, b) => {
        if (this.state.servingSize === "FewFirst") {
            return a.servings - b.servings;
        } else if (this.state.servingSize === "MoreFirst") {
            return b.servings - a.servings;
        } else {
            return 0;
        }
    }
    
    render() {
        return (
            <div>
            <TopBar onSelectFilterDiet={this.onSelectFilterDiet} onSelectFilterType={this.onSelectFilterType} onSelectFilterFlavor={this.onSelectFilterFlavor} 
                    onSelectSortPrep={this.onSelectSortPrep} onSelectSortCook={this.onSelectSortCook} onSelectSortServings={this.onSelectSortServings}prepTitle={this.state.prepTime} cookTitle={this.state.cookTime} servingsTitle={this.state.servingSize}/>
            <DisplayList list={this.props.list.filter(this.matchesFilterDiet).filter(this.matchesFilterType).filter(this.matchesFilterFlavor).sort(this.sortPrep).sort(this.sortCook).sort(this.sortServings)}/>
            </div>
        );
    }
}
export default FilteredList;