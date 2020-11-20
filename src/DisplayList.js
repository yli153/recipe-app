import React, {Component} from 'react';
import PastryCard from './PastryCard';
import CardDeck from 'react-bootstrap/CardDeck';

class DisplayList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.list.length === 0) {
            return "No results match the filter(s)";
        }
        else {
            let pastryCards = this.props.list.map(item => <PastryCard item={item} addFavorite={this.props.addFavorite}/>) 
            return (
                <CardDeck>{pastryCards}</CardDeck>
            );
        }  
    }
}
export default DisplayList;