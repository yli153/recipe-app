import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="mb-4">
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Diet:</b></span>
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.onSelectFilterDiet}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Normal" onSelect={this.props.onSelectFilterDiet}>Normal</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Gluten-Free" onSelect={this.props.onSelectFilterDiet}>Gluten-Free</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Vegan" onSelect={this.props.onSelectFilterDiet}>Vegan</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Keto" onSelect={this.props.onSelectFilterDiet}>Keto</Nav.Link></Nav.Item>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Type:</b></span>
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.onSelectFilterType}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Cake" onSelect={this.props.onSelectFilterType}>Cake</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Cookie" onSelect={this.props.onSelectFilterType}>Cookie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Pie" onSelect={this.props.onSelectFilterType}>Pie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Tart" onSelect={this.props.onSelectFilterType}>Tart</Nav.Link></Nav.Item>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Flavor:</b></span>
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.onSelectFilterFlavor}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Chocolate" onSelect={this.props.onSelectFilterFlavor}>Chocolate</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Fruits" onSelect={this.props.onSelectFilterFlavor}>Fruits</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Vegetables" onSelect={this.props.onSelectFilterFlavor}>Vegetables</Nav.Link></Nav.Item>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Prep Time:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="Select" onSelect={this.props.onSelectSortPrep}>Select</NavDropdown.Item>
              <NavDropdown.Item eventKey="ShortFirst" onSelect={this.props.onSelectSortPrep}>Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item eventKey="LongFirst" onSelect={this.props.onSelectSortPrep}>Longest to Shortest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Cook Time:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item>Select</NavDropdown.Item>
              <NavDropdown.Item>Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item>Longest to Shortest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Servings:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item>Select</NavDropdown.Item>
              <NavDropdown.Item>Fewest to Greatest</NavDropdown.Item>
              <NavDropdown.Item>Greatest to Fewest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>   
    );
  }
}

export default TopBar;