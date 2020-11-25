import React, {Component} from 'react';
import DisplayList from './DisplayList';
import TopBar from './TopBar';

/** Component FilteredList which performs filtering and sorting on the original recipe list inherited from App.js 
 *  and renders TopBar as well as DisplayList */

class FilteredList extends Component {
    /** Props inherited from App.js: the original recipeList, the favoriteList, and the addFavorite and removeFavorite functions */
    constructor(props) {
        super(props);
        /** State to keep track of all the selected filtering and sorting criteria; default filtering criteria set to "All" and sorting criteria set to 
         *  "Select" to resort back to the original state without refreshing the page */
        this.state = {
            diet: "All",
            type: "All",
            flavor: "All",
            sortCriteria: "Select"
        };
    }

    /** Function to set the filtering criteria for diet to the event */
    onSelectFilterDiet = event => {
        this.setState ({
            diet: event
        })
    };

    /** Function to select the items with the desired filtering property by returning a boolean (true if either the filtering criteria is "All" or 
     *  if the dietary specification of a recipe matches the user-selected diet)  */
    matchesFilterDiet = item => {
        if (this.state.diet === "All") {
            return true;
        } else if (this.state.diet === item.diet) {
            return true;
        } else {
            return false;
        }
    };

    /** Function to set the filtering criteria for dessert type to the event */
    onSelectFilterType = event => {
        this.setState ({
            type: event
        })
    };

    /** Function to select the items with the desired filtering property by returning a boolean (true if either the filtering criteria is "All" or 
     *  if the dessert type of a recipe matches the user-selected type)  */
    matchesFilterType = item => {
        if (this.state.type === "All") {
            return true;
        } else if (this.state.type === item.type) {
            return true;
        } else {
            return false;
        }
    };

    /** Function to set the filtering criteria for flavor to the event */
    onSelectFilterFlavor = event => {
        this.setState ({
            flavor: event
        })
    };

    /** Function to select the items with the desired filtering property by returning a boolean (true if either the filtering criteria is "All" or 
     *  if the flavor of a recipe matches the user-selected flavor)  */
    matchesFilterFlavor = item => {
        if (this.state.flavor === "All") {
            return true;
        } else if (this.state.flavor === item.flavor) {
            return true;
        } else {
            return false;
        }
    };
    
    /** Function to set the sorting criteria to the event and return the event for display in the TopBar */
    onSelectSort = event => {
        this.setState ({
            sortCriteria: event
        })
        return event;
    };

    /** Function to sort two items according to the selected sorting criteria */
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
        /** Rendering the TopBar and DisplayList components through passing down relevant props and the post-filtered, post-sorted recipe list */
        /** Passing down the functions onSelectFilterDiet, onSelectFilterType, onSelectFilterFlavor and onSelectSort as well as the state sortCriteria to TopBar */
        /** Filtering and sorting the original recipe list by calling the filter function three times with different filtering criteria and the sort function one time 
         *  with the sorting criteria; passing down the resulting list, the addFavorite and removeFavorite functions and the favoriteList inherited from App.js to DisplayList */
        return (
            <div>
            <TopBar onSelectFilterDiet={this.onSelectFilterDiet} onSelectFilterType={this.onSelectFilterType} onSelectFilterFlavor={this.onSelectFilterFlavor} onSelectSort={this.onSelectSort} sortTitle={this.state.sortCriteria}/>
            <DisplayList list={this.props.recipeList.filter(this.matchesFilterDiet).filter(this.matchesFilterType).filter(this.matchesFilterFlavor).sort(this.sortList)} addFavorite={this.props.addFavorite} removeFavorite={this.props.removeFavorite} favoriteList={this.props.favoriteList}/>
            </div>
        );
    }
}
export default FilteredList;