import React, {Component} from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from './FilteredList';
import FavoriteSection from './FavoriteSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {id: "a", name: "Summer Mixed Berries Tart", prep: 30, cook: 20, diet: "Normal", type: "Tart", flavor: "Fruits", servings: 8, img: 'recipes/berries_tart.jpg', isFavorite: false},
        {id: "b", name: "Carrot Cake with Cream Cheese", prep: 20, cook: 45, diet: "Normal", type: "Cake", flavor: "Vegetables", servings: 16, img: 'recipes/carrot_cake.jpg', isFavorite: false},
        {id: "c", name: "French Apple Tart", prep: 25, cook: 70, diet: "Normal", type: "Tart", flavor: "Fruits", servings: 10, img: 'recipes/apple_tart.jpg', isFavorite: false}, 
        {id: "d", name: "Strawberry Oatmeal Cookies", prep: 15, cook: 15, diet: "Normal", type: "Cookie", flavor: "Fruits", servings: 24, img: 'recipes/oatmeal_cookies.jpg', isFavorite: false},
        {id: "e", name: "Old-Fashioned Peach Pie", prep: 45, cook: 60, diet: "Normal", type: "Pie", flavor: "Fruits", servings: 8, img: 'recipes/peach_pie.jpg', isFavorite: false},
        {id: "f", name: "Red Velvet White Chocolate Chip Cookies", prep: 30, cook: 25, diet: "Normal", type: "Cookie", flavor: "Chocolate", servings: 22, img: 'recipes/velvet_cookies.jpg', isFavorite: false},
        {id: "g", name: "Strawberry Coconut-Crust Cheesecake", prep: 40, cook: 60, diet: "Gluten-Free", type: "Cake", flavor: "Fruits", servings: 12, img: 'recipes/gf_cheesecake.jpg', isFavorite: false},
        {id: "h", name: "Chocolate Ganache Tart", prep: 15, cook: 15, diet: "Gluten-Free", type: "Tart", flavor: "Chocolate", servings: 8, img: 'recipes/gf_choco_tart.jpg', isFavorite: false},
        {id: "i", name: "Lime Tart", prep: 30, cook: 20, diet: "Gluten-Free", type: "Tart", flavor: "Fruits", servings: 12, img: 'recipes/gf_lime_tart.jpg', isFavorite: false}, 
        {id: "j", name: "Chocolate Chip Cookies", prep: 15, cook: 20, diet: "Vegan", type: "Cookie", flavor: "Chocolate", servings: 24, img: 'recipes/vegan_choco_cookie.jpg', isFavorite: false},
        {id: "k", name: "Cinnamon Apple Cake", prep: 20, cook: 45, diet: "Vegan", type: "Cake", flavor: "Fruits", servings: 12, img: 'recipes/vegan_apple_cake.PNG', isFavorite: false},
        {id: "l", name: "Banana Cream Pie", prep: 60, cook: 40, diet: "Vegan", type: "Pie", flavor: "Fruits", servings: 8, img: 'recipes/vegan_banana_pie.jpg', isFavorite: false},
        {id: "m", name: "Chocolate Lava Cake", prep: 15, cook: 40, diet: "Keto", type: "Cake", flavor: "Chocolate", servings: 12, img: 'recipes/keto_choco_cake.jpg', isFavorite: false},
        {id: "n", name: "Pumpkin Cheesecake", prep: 20, cook: 80, diet: "Keto", type: "Cake", flavor: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_cheesecake.jpg', isFavorite: false},
        {id: "o", name: "Pumpkin Pie", prep: 15, cook: 45, diet: "Keto", type: "Pie", flavor: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_pie.jpg', isFavorite: false}
      ],
    };
  }

  addFavorite = item => {
    item.isFavorite = true;
    
  };
  
  removeItem = item => {
    item.isFavorite = false;
  };

  render() {
    return (
      <main>
      <h1 class="mb-4 heading">Quarantine Baking Recipes</h1>
      <Row>
        <Col xs={8}>
          <FilteredList list={this.state.productList} addFavorite={this.addFavorite}></FilteredList>
        </Col>
        <Col xs={4}>
          <h3 class="favorite-header"><b>Favorite Recipes &hearts;</b></h3>
          <FavoriteSection list={this.state.productList.filter(item => item.isFavorite)}></FavoriteSection>
          </Col>
    </Row>
    </main>
    );
  }
}
export default App;


