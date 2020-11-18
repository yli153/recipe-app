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
            prep: "Select",
            cook: "Select",
            servings: "Select"
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
    
    render() {
        return (
            <div>
            <TopBar onSelectFilterDiet={this.onSelectFilterDiet} onSelectFilterType={this.onSelectFilterType} onSelectFilterFlavor={this.onSelectFilterFlavor} 
                    onSelectSortPrep={this.onSelectSortPrep} />
            <DisplayList list={this.props.list.filter(this.matchesFilterDiet).filter(this.matchesFilterType).filter(this.matchesFilterFlavor).sort(this.sortPrep)}/>
            </div>
        );
    }
}
export default FilteredList;