import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class TopBar extends Component {
  render() {
    return (
      <div class="mb-4">
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Diet:</b></span>
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterDiet}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Normal" onSelect={this.onSelectFilterDiet}>Normal</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Gluten-Free" onSelect={this.onSelectFilterDiet}>Gluten-Free</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Vegan" onSelect={this.onSelectFilterDiet}>Vegan</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Keto" onSelect={this.onSelectFilterDiet}>Keto</Nav.Link></Nav.Item>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Type:</b></span>
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Cake" onSelect={this.onSelectFilterType}>Cake</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Cookie" onSelect={this.onSelectFilterType}>Cookie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Pie" onSelect={this.onSelectFilterType}>Pie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Tart" onSelect={this.onSelectFilterType}>Tart</Nav.Link></Nav.Item>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Flavor:</b></span>
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Chocolate" onSelect={this.onSelectFilterType}>Chocolate</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Fruits" onSelect={this.onSelectFilterType}>Fruits</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Vegetables" onSelect={this.onSelectFilterType}>Vegetables</Nav.Link></Nav.Item>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Prep Time:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Select</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Longest to Shortest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Cook Time:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Select</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Longest to Shortest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Servings:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Select</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fewest to Greatest</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Greatest to Fewest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>   
    );
  }
}

export default TopBar;