import React, {Component} from 'react';
import DisplayList from './DisplayList';
import TopBar from './TopBar';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diet: "All",
            type: "All",
            flavor: "All"
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
    render() {
        return (
            <div>
            <TopBar onSelectFilterDiet={this.onSelectFilterDiet} onSelectFilterType={this.onSelectFilterType} onSelectFilterFlavor={this.onSelectFilterFlavor} />
            <DisplayList list={this.props.list.filter(this.matchesFilterDiet).filter(this.matchesFilterType).filter(this.matchesFilterFlavor)}/>
            </div>
        );
    }
}
export default FilteredList;