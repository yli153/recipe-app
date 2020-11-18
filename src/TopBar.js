import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        Diet:
        <Nav className="mr-auto">
          <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterDiet}>All</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Normal" onSelect={this.onSelectFilterDiet}>Normal</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Gluten-Free" onSelect={this.onSelectFilterDiet}>Gluten-Free</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Vegan" onSelect={this.onSelectFilterDiet}>Vegan</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Keto" onSelect={this.onSelectFilterDiet}>Keto</Nav.Link></Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default TopBar;