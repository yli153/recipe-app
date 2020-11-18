import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from './FilteredList';

const productList=[
  {name: "Summer Mixed Berries Tart", prep: 30, cook: 20, diet: "Normal", type: "Tart", flavor: "Fruits", servings: 8, img: 'recipes/berries_tart.jpg'},
  {name: "Carrot Cake with Cream Cheese", prep: 20, cook: 45, diet: "Normal", type: "Cake", flavor: "Vegetables", servings: 16, img: 'recipes/carrot_cake.jpg'},
  {name: "French Apple Tart", prep: 25, cook: 70, diet: "Normal", type: "Tart", flavor: "Fruits", servings: 10, img: 'recipes/apple_tart.jpg'}, 
  {name: "Strawberry Oatmeal Cookies", prep: 15, cook: 15, diet: "Normal", type: "Cookie", flavor: "Fruits", servings: 24, img: 'recipes/oatmeal_cookies.jpg'},
  {name: "Old-Fashioned Peach Pie", prep: 45, cook: 60, diet: "Normal", type: "Pie", flavor: "Fruits", servings: 8, img: 'recipes/peach_pie.jpg'},
  {name: "Red Velvet White Chocolate Chip Cookies", prep: 30, cook: 21, diet: "Normal", type: "Cookie", flavor: "Chocolate", servings: 22, img: 'recipes/velvet_cookies.jpg'},
  {name: "Strawberry Coconut-Crust Cheesecake", prep: 40, cook: 60, diet: "Gluten-Free", type: "Cake", flavor: "Fruits", servings: 12, img: 'recipes/gf_cheesecake.jpg'},
  {name: "Chocolate Ganache Tart", prep: 15, cook: 15, diet: "Gluten-Free", type: "Tart", flavor: "Chocolate", servings: 8, img: 'recipes/gf_choco_tart.jpg'},
  {name: "Lime Tart", prep: 30, cook: 20, diet: "Gluten-Free", type: "Tart", flavor: "Fruits", servings: 12, img: 'recipes/gf_lime_tart.jpg'}, 
  {name: "Chocolate Chip Cookies", prep: 15, cook: 20, diet: "Vegan", type: "Cookie", flavor: "Chocolate", servings: 24, img: 'recipes/vegan_choco_cookie.jpg'},
  {name: "Cinnamon Apple Cake", prep: 20, cook: 45, diet: "Vegan", type: "Cake", flavor: "Fruits", servings: 12, img: 'recipes/vegan_apple_cake.PNG'},
  {name: "Banana Cream Pie", prep: 60, cook: 40, diet: "Vegan", type: "Pie", flavor: "Fruits", servings: 8, img: 'recipes/vegan_banana_pie.jpg'},
  {name: "Chocolate Lava Cake", prep: 15, cook: 40, diet: "Keto", type: "Cake", flavor: "Chocolate", servings: 12, img: 'recipes/keto_choco_cake.jpg'},
  {name: "Pumpkin Cheesecake", prep: 20, cook: 80, diet: "Keto", type: "Cake", flavor: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_cheesecake.jpg'},
  {name: "Pumpkin Pie", prep: 15, cook: 45, diet: "Keto", type: "Pie", flavor: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_pie.jpg'}
]

function App() {
  return (
    <main>
    <h1 class="mb-4 heading">Quarantine Baking Recipes</h1>
    <Row>
      <Col xs={8}>
        <FilteredList list={productList}></FilteredList>
      </Col>
      <Col xs={4}>
        <h4 class="favorite-header"><b>Favorite Recipes &hearts;</b></h4>
        </Col>
  </Row>
  </main>
  );
}

export default App;
