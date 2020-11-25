import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';

/** Component FavoriteSection to create cards for recipes added to favorite and aggregate the total prep time, total cook time and 
 *  total time (including both prep and cook time) for all favorite recipes inherited from App.js */

class FavoriteSection extends Component {
    /** Props inherited from App.js: favoriteList and removeFavorite function */
    constructor(props) {
        super(props);
    }
    /** Function createFavoriteItem which takes in a favorite recipe and creates a card for it; in particular, the removeFavorite function inherited from App.js is called here
     *  in the unfavorite button and triggered on click*/
    createFavoriteItem = (item) => {
        return(
                <Card style={{ width: '100%' }}>
                <Card.Header>
                    <Row>
                        <Col xs={8}><p class="favorite-item-name"><b>{item.name}</b></p></Col>
                        <Col xs={4} className="align-right"><Button variant="primary" className="remove-button" onClick={() => this.props.removeFavorite(item.id)}>Unfavorite</Button></Col>
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

    /** Function convertTime which converts time in minutes to the format of "X hr(s) Y mins" if the total time exceeds 60 minutes */
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
        /** Special case to print out a message when there hasn't been any recipe added to the favorite section yet */
        if (this.props.favoriteList.length === 0) {
            return (
                <div>
                    <p class="no-favorite">No favorite recipe added yet</p>
                    <Row className="time-aggregator">
                        <Col xs={8}>Total Prep Time:</Col>
                        <Col xs={4} className="align-right">0 minute</Col>
                    </Row>
                    <Row className="time-aggregator bottom-border">
                        <Col xs={8}>Total Cook Time:</Col>
                        <Col xs={4} className="align-right">0 minute</Col>
                    </Row>
                    <Row className="time-aggregator">
                        <Col xs={8}><b>Total Time (Prep + Cook):</b></Col>
                        <Col xs={4} className="align-right"><b>0 minute</b></Col>
                    </Row>
                </div>);
        } else {
            /** Using map function and calling createFavoriteItem function to create a card for each favorite recipe */
            let favoriteCards = this.props.favoriteList.map(item => this.createFavoriteItem(item)); 
            /** Using map function and reduce function to aggregate the prep time for all favorite recipes */
            let totalPrepTime = this.props.favoriteList.map(item => item.prep).reduce((a, c) => a + c);
            /** Using map function and reduce function to aggregate the cook time for all favorite recipes */
            let totalCookTime = this.props.favoriteList.map(item => item.cook).reduce((a, c) => a + c);
            /** Adding total prep and cook time to get the final total time */
            let totalTime = totalPrepTime + totalCookTime;
            return (
                /** Rendering the Favorite Section */
                <div>
                    <CardColumns className="favorite-cards">{favoriteCards}</CardColumns>
                    <Row className="time-aggregator">
                        <Col xs={8}>Total Prep Time:</Col>
                        <Col xs={4} className="align-right">{this.convertTime(totalPrepTime)}</Col>
                    </Row>
                    <Row className="time-aggregator bottom-border">
                        <Col xs={8}>Total Cook Time:</Col>
                        <Col xs={4} className="align-right">{this.convertTime(totalCookTime)}</Col>
                    </Row>
                    <Row className="time-aggregator">
                        <Col xs={8}><b>Total Time (Prep + Cook):</b></Col>
                        <Col xs={4} className="align-right"><b>{this.convertTime(totalTime)}</b></Col>
                    </Row>
                </div>         
            );
        }
    }
}

export default FavoriteSection;