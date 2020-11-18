import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

class PastryCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card bg="light">
                    <Card.Img variant="top" width="100%" src={this.props.item.img} className="image" alt="pastry image"/>
                    <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.item.diet}</Card.Subtitle>
                    <Card.Text>{this.props.item.type}</Card.Text>
                    <Card.Text>{this.props.item.ingredient}</Card.Text>
                    <Button variant="primary">Add to Favorite</Button>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Prep Time: {this.props.item.prep} minutes</ListGroup.Item>
                <ListGroup.Item>Cook Time: {this.props.item.cook} minutes</ListGroup.Item>
                <ListGroup.Item>Servings: {this.props.item.servings}</ListGroup.Item>
                </ListGroup>
                </Card>
            </div>
        );
    };
}

export default PastryCard;


