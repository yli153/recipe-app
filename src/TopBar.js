import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  showPrepTitle = (state) => {
    if (state === "Select") {
      return "Select";
    } else if (state === "ShortFirst") {
      return "Shortest to Longest";
    } else {
      return "Longest to Shortest";
    }
  }

  showCookTitle = (state) => {
    if (state === "Select") {
      return "Select";
    } else if (state === "Short") {
      return "Shortest to Longest";
    } else {
      return "Longest to Shortest";
    }
  }

  showServingsTitle = (state) => {
    if (state === "Select") {
      return "Select";
    } else if (state === "FewFirst") {
      return "Fewest to Greatest";
    } else {
      return "Greatest to Fewest";
    }
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
            <NavDropdown title={this.showPrepTitle(this.props.prepTitle)} id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="Select" onSelect={this.props.onSelectSortPrep}>Select</NavDropdown.Item>
              <NavDropdown.Item eventKey="ShortFirst" onSelect={this.props.onSelectSortPrep}>Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item eventKey="LongFirst" onSelect={this.props.onSelectSortPrep}>Longest to Shortest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Cook Time:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title={this.showCookTitle(this.props.cookTitle)} id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="Select" onSelect={this.props.onSelectSortCook}>Select</NavDropdown.Item>
              <NavDropdown.Item eventKey="ShortFirst" onSelect={this.props.onSelectSortCook}>Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item eventKey="LongFirst" onSelect={this.props.onSelectSortCook}>Longest to Shortest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by Servings:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title={this.showServingsTitle(this.props.servingSize)} id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="Select" onSelect={this.props.onSelectSortServings}>Select</NavDropdown.Item>
              <NavDropdown.Item eventKey="FewFirst" onSelect={this.props.onSelectSortServings}>Fewest to Greatest</NavDropdown.Item>
              <NavDropdown.Item eventKey="MoreFirst" onSelect={this.props.onSelectSortServings}>Greatest to Fewest</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>   
    );
  }
}

export default TopBar;