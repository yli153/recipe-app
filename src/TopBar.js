import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

/** Component TopBar to render the navigation bar with filtering and sorting functionalities */

class TopBar extends Component {
  /** Props inherited from FilteredList: onSelectFilterDiet, onSelectFilterType, onSelectFilterFlavor and onSelectSort 
   *  functions and sortTitle state */
  constructor(props) {
    super(props);
  }

  /** Function to return the current sorting criteria based on the state inherited from FilteredList.js  */
  showSortTitle = (state) => {
    if (state === "Select") {
      return "Select";
    } else if (state === "PrepAscending") {
      return "Prep Time: Shortest to Longest";
    } else if (state === "PrepDescending") {
      return "Prep Time: Longest to Shortest";
    } else if (state === "CookAscending") {
      return "Cook Time: Shortest to Longest";
    } else if (state === "CookDescending") {
      return "Cook Time: Longest to Shortest";
    } else if (state === "ServingsAscending") {
      return "Servings: Less to More";
    } else {
      return "Servings: More to Less";
    }
  }
  
  render() {  
    /** Rendering the navigation bar and setting the onSelect behavior of all nav links to the functions inherited from FilteredList.js */
    return (
      <div class="mb-4">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <span class="category-color"><b>Diet:</b></span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.onSelectFilterDiet}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Normal" onSelect={this.props.onSelectFilterDiet}>Normal</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Gluten-Free" onSelect={this.props.onSelectFilterDiet}>Gluten-Free</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Vegan" onSelect={this.props.onSelectFilterDiet}>Vegan</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Keto" onSelect={this.props.onSelectFilterDiet}>Keto</Nav.Link></Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <span class="category-color"><b>Type:</b></span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.onSelectFilterType}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Cake" onSelect={this.props.onSelectFilterType}>Cake</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Cookie" onSelect={this.props.onSelectFilterType}>Cookie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Pie" onSelect={this.props.onSelectFilterType}>Pie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Tart" onSelect={this.props.onSelectFilterType}>Tart</Nav.Link></Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <span class="category-color"><b>Flavor:</b></span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.onSelectFilterFlavor}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Chocolate" onSelect={this.props.onSelectFilterFlavor}>Chocolate</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Fruits" onSelect={this.props.onSelectFilterFlavor}>Fruits</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="Vegetables" onSelect={this.props.onSelectFilterFlavor}>Vegetables</Nav.Link></Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar bg="light" variant="light">
          <span class="category-color"><b>Sort by:</b></span>
          <Nav className="mr-auto">
            <NavDropdown title={this.showSortTitle(this.props.sortTitle)} id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="Select" onSelect={this.props.onSelectSort}>Select</NavDropdown.Item>
              <NavDropdown.Item eventKey="PrepAscending" onSelect={this.props.onSelectSort}>Prep Time: Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item eventKey="PrepDescending" onSelect={this.props.onSelectSort}>Prep Time: Longest to Shortest</NavDropdown.Item>
              <NavDropdown.Item eventKey="CookAscending" onSelect={this.props.onSelectSort}>Cook Time: Shortest to Longest</NavDropdown.Item>
              <NavDropdown.Item eventKey="CookDescending" onSelect={this.props.onSelectSort}>Cook Time: Longest to Shortest</NavDropdown.Item>
              <NavDropdown.Item eventKey="ServingsAscending" onSelect={this.props.onSelectSort}>Servings: Less to More</NavDropdown.Item>
              <NavDropdown.Item eventKey="ServingsDescending" onSelect={this.props.onSelectSort}>Servings: More to Less</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>   
    );
  }
}

export default TopBar;