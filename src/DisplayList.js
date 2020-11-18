import React, {Component} from 'react';
import PastryCard from './PastryCard';
import CardDeck from 'react-bootstrap/CardDeck';

class DisplayList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let pastryCards = this.props.list.map(item => <PastryCard item={item}/>) 
        return (
            <CardDeck>{pastryCards}</CardDeck>
        );
    }
}
export default DisplayList;