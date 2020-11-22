import React, {Component} from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from './FilteredList';
import FavoriteSection from './FavoriteSection';

/** Main component App.js which renders all the sub-components */ 
class App extends Component {
  constructor() {
    super();
    this.state = {
      /** A list of recipes with values for id, name, prep time, cook time, dietary instruction, type of dessert, flavor, number of servings and image */
      recipeList: [
        {id: "a", name: "Summer Mixed Berries Tart", prep: 30, cook: 20, diet: "Normal", type: "Tart", flavor: "Fruits", servings: 8, img: 'recipes/berries_tart.jpg'},
        {id: "b", name: "Carrot Cake with Cream Cheese", prep: 20, cook: 45, diet: "Normal", type: "Cake", flavor: "Vegetables", servings: 16, img: 'recipes/carrot_cake.jpg'},
        {id: "c", name: "French Apple Tart", prep: 25, cook: 70, diet: "Normal", type: "Tart", flavor: "Fruits", servings: 10, img: 'recipes/apple_tart.jpg'}, 
        {id: "d", name: "Strawberry Oatmeal Cookies", prep: 15, cook: 15, diet: "Normal", type: "Cookie", flavor: "Fruits", servings: 24, img: 'recipes/oatmeal_cookies.jpg'},
        {id: "e", name: "Old-Fashioned Peach Pie", prep: 45, cook: 60, diet: "Normal", type: "Pie", flavor: "Fruits", servings: 8, img: 'recipes/peach_pie.jpg'},
        {id: "f", name: "Red Velvet White Chocolate Chip Cookies", prep: 30, cook: 25, diet: "Normal", type: "Cookie", flavor: "Chocolate", servings: 22, img: 'recipes/velvet_cookies.jpg'},
        {id: "g", name: "Strawberry Coconut-Crust Cheesecake", prep: 40, cook: 60, diet: "Gluten-Free", type: "Cake", flavor: "Fruits", servings: 12, img: 'recipes/gf_cheesecake.jpg'},
        {id: "h", name: "Chocolate Ganache Tart", prep: 15, cook: 15, diet: "Gluten-Free", type: "Tart", flavor: "Chocolate", servings: 8, img: 'recipes/gf_choco_tart.jpg'},
        {id: "i", name: "Lime Tart", prep: 30, cook: 20, diet: "Gluten-Free", type: "Tart", flavor: "Fruits", servings: 12, img: 'recipes/gf_lime_tart.jpg'}, 
        {id: "j", name: "Chocolate Chip Cookies", prep: 15, cook: 20, diet: "Vegan", type: "Cookie", flavor: "Chocolate", servings: 24, img: 'recipes/vegan_choco_cookie.jpg'},
        {id: "k", name: "Cinnamon Apple Cake", prep: 20, cook: 45, diet: "Vegan", type: "Cake", flavor: "Fruits", servings: 12, img: 'recipes/vegan_apple_cake.PNG'},
        {id: "l", name: "Banana Cream Pie", prep: 60, cook: 40, diet: "Vegan", type: "Pie", flavor: "Fruits", servings: 8, img: 'recipes/vegan_banana_pie.jpg'},
        {id: "m", name: "Chocolate Lava Cake", prep: 15, cook: 40, diet: "Keto", type: "Cake", flavor: "Chocolate", servings: 12, img: 'recipes/keto_choco_cake.jpg'},
        {id: "n", name: "Pumpkin Cheesecake", prep: 20, cook: 80, diet: "Keto", type: "Cake", flavor: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_cheesecake.jpg'},
        {id: "o", name: "Pumpkin Pie", prep: 15, cook: 45, diet: "Keto", type: "Pie", flavor: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_pie.jpg'}
      ],
      /** A list to hold recipes added to the Favorite Section */
      favoriteList:[]
    };
  }

  /** Function addFavorite which takes in the id of the newly added recipe, checks whether it is already in the favoriteList and adds it to the favoriteList if not previously added */
  addFavorite = id => {
    let isAdded = this.state.favoriteList.some(item => item.id === id);
    if (!isAdded) {
      const newFavorite = this.state.recipeList.filter(item => item.id === id)[0];
      const favoriteList = [...this.state.favoriteList, newFavorite];
      this.setState({favoriteList});
    }
  };
  
  /** Function removeFavorite which takes in the id of the recipe to be removed and removes it from the favoriteList */
  removeFavorite = id => {
    const favoriteList = this.state.favoriteList.filter(item => item.id != id);
    this.setState({favoriteList});
  };

  render() {
    return (
      /** Rendering all the components on the page and passing down props to different components accordingly */
      /** Passing the list of all recipes and addFavorite Function to FilteredList */
      /** Passing the list of recipes added to favorite and removeFavorite Function to FavoriteSection */
      <main>
      <h1 class="mb-4 heading">Quarantine Baking Recipes</h1>
      <Row>
        <Col xs={8} class="recipe-cards">
          <FilteredList list={this.state.recipeList} addFavorite={this.addFavorite}></FilteredList>
        </Col>
        <Col xs={4} className="favorite-section">
          <h3 class="favorite-header"><b>Favorite Recipes &hearts;</b></h3>
          <FavoriteSection list={this.state.favoriteList} removeFavorite={this.removeFavorite}></FavoriteSection>
          </Col>
    </Row>
    </main>
    );
  }
}
export default App;


