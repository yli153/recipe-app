import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PastryCard extends Component {
    constructor(props) {
        super(props);
    }
    pastry_type() {
        if (this.props.item.type === "Cake") {
            return 'recipes/cake_icon.png';
        } else if (this.props.item.type === "Tart") {
            return 'recipes/tart_icon.png';
        } else if (this.props.item.type === "Cookie") {
            return 'recipes/cookie_icon.png';
        } else {
            return 'recipes/pie_icon.png';
        }
    };
    render() {
        return (
            <div>
                <Card bg="light">
                    <Card.Img variant="top" width="100%" src={this.props.item.img} className="image" alt="pastry image"/>
                    <Card.Body>
                    <Row>
                        <Col xs={8}><Card.Title><b>{this.props.item.name}</b></Card.Title></Col>
                        <Col xs={4}><img class="pastry-icon" src={this.pastry_type()} alt="pastry icon"></img></Col>
                    </Row>
                    <Card.Subtitle className="mb-2 text-muted"><b>{this.props.item.diet}</b></Card.Subtitle>  
                    <Card.Text>Flavor: {this.props.item.flavor}</Card.Text>
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


