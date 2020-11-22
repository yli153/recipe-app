import React, {Component} from 'react';
import PastryCard from './PastryCard';
import CardDeck from 'react-bootstrap/CardDeck';

/** Component DisplayList which takes in an array of recipes (after filtered and sorted) inherited from FilteredList.js 
 * and displays those recipes as cards */

class DisplayList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        /** Special case to print out a message when there are no matched items for the selected filter(s) */ 
        if (this.props.list.length === 0) {
            return "No results match the filter(s)";
        }
        else {
            /** Creating a PastryCard for each recipe in the array by using a map function and passing down individual 
             * recipe as well as addFavorite function inherited from FilteredList.js as props to PastryCard.js */ 
            let pastryCards = this.props.list.map(item => <PastryCard item={item} addFavorite={this.props.addFavorite}/>) 
            return (
                /** Returning a deck of pastry cards */ 
                <CardDeck>{pastryCards}</CardDeck>
            );
        }  
    }
}
export default DisplayList;