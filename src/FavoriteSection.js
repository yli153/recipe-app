import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns'

class FavoriteSection extends Component {
    constructor(props) {
        super(props);
    }
    createFavoriteItem = (item) => {
        return(
            
                <Card style={{ width: '100%' }}>
                <Card.Header>
                    <Row>
                        <Col xs={8}><p class="favorite-item-name"><b>{item.name}</b></p></Col>
                        <Col xs={4} className="align-right"><Button variant="primary" className="remove-button" onClick={() => this.props.removeFavorite(item.id)}>Remove</Button></Col>
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

    convertTime = (time) => {
        const hr_min = [Math.floor(time/60), time%60]; 
        if (hr_min[0] === 0) {
            return hr_min[1].toString() + " mins";
        } else if (hr_min[0] === 1){
            return "1 hr " + hr_min[1].toString() + " mins";
        } else {
            return hr_min[0].toString() + " hrs " + hr_min[1].toString() + " mins";
        }
    };

    render() {
        if (this.props.list.length === 0) {
            return (
                <div>
                    <p class="no-favorite">No favorite recipe added yet</p>
                    <Row className="time-aggregator">
                        <Col xs={8}>Total Time (Prep + Cook):</Col>
                        <Col xs={4} className="align-right"><b>0 minute</b></Col>
                    </Row>
                </div>);
        } else {
            let favoriteCards = this.props.list.map(item => this.createFavoriteItem(item)); 
            let totalPrepTime = this.props.list.map(item => item.prep).reduce((a, c) => a + c);
            let totalCookTime = this.props.list.map(item => item.cook).reduce((a, c) => a + c);
            let totalTime = totalPrepTime + totalCookTime;
            return (
                <div>
                    <CardColumns className="favorite-cards">{favoriteCards}</CardColumns>
                    <Row className="time-aggregator">
                        <Col xs={8}>Total Time (Prep + Cook):</Col>
                        <Col xs={4} className="align-right"><b>{this.convertTime(totalTime)}</b></Col>
                    </Row>
                </div>         
            );
        }
    }
}

export default FavoriteSection;