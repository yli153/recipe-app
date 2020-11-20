import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';

class FavoriteSection extends Component {
    constructor(props) {
        super(props);
    }
    createFavoriteItem = (item) => {
        return(
            <Card style={{ width: '5rem' }}>
            <Card.Header>
                <Row>
                    <Col xs={8}><p class="favorite-item-name"><b>{item.name}</b></p></Col>
                    <Col xs={4} className="remove-column"><Button variant="primary" className="remove-button">Remove</Button></Col>
                </Row>
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Prep Time: {item.prep} minutes</ListGroup.Item>
                <ListGroup.Item>Cook Time: {item.cook} minutes</ListGroup.Item>
                <ListGroup.Item>Servings: {item.servings}</ListGroup.Item>
            </ListGroup>
            </Card>
        );
    };
    render() {
        if (this.props.list.length === 0) {
            return (
                <div>
                    <p class="no-favorite">No favorite recipe added yet</p>
                    <Row className="time-aggregator">
                        <Col xs={8}>Total Time (Prep + Cook):</Col>
                        <Col xs={4}><b>0 minute</b></Col>
                    </Row>
                </div>);
        } else {
            let favoriteCards = this.props.list.map(item => this.createFavoriteItem(item)); 
            return (
                <div>
                    <CardDeck>{favoriteCards}</CardDeck>
                    <Row className="time-aggregator">
                        <Col xs={8}>Total Time (including Prep and Cook):</Col>
                        <Col xs={4}>TBD</Col>
                    </Row>
                </div>         
            );
            

        }
        
    }
}

export default FavoriteSection;