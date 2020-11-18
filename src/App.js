import React from 'react';
import './App.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from './FilteredList';
import DisplayList from './DisplayList';
import PastryCard from './PastryCard';

const productList=[
  {name: "Mixed Berries Tart", prep: 30, cook: 20, diet: "Normal", type: "Tart", ingredient: "Fruits", servings: 8, img: 'recipes/berries_tart.jpg'},
  {name: "Carrot Cake", prep: 20, cook: 45, diet: "Normal", type: "Cake", ingredient: "Vegetables", servings: 16, img: 'recipes/carrot_cake.jpg'},
  {name: "French Apple Tart", prep: 25, cook: 70, diet: "Normal", type: "Tart", ingredient: "Fruits", servings: 10, img: 'recipes/apple_tart.jpg'}, 
  {name: "Strawberry Oatmeal Cookies", prep: 15, cook: 15, diet: "Normal", type: "Cookie", ingredient: "Fruits", servings: 24, img: 'recipes/oatmeal_cookies.jpg'},
  {name: "Old-Fashioned Peach Pie", prep: 45, cook: 60, diet: "Normal", type: "Pie", ingredient: "Fruits", servings: 8, img: 'recipes/peach_pie.jpg'},
  {name: "White Chocolate Chip & Red Velvet Cookies", prep: 30, cook: 21, diet: "Normal", type: "Cookies", ingredient: "Chocolate", servings: 22, img: 'recipes/velvet_cookies.jpg'},
  {name: "Strawberry Coconut-Crust Cheesecake", prep: 30, cook: 60, diet: "Gluten-Free", type: "Cake", ingredient: "Fruits", servings: 12, img: 'recipes/gf_cheesecake.jpg'},
  {name: "Chocolate Ganache Tart", prep: 15, cook: 15, diet: "Gluten-Free", type: "Tart", ingredient: "Chocolate", servings: 8, img: 'recipes/gf_choco_tart.jpg'},
  {name: "Lime Tart", prep: 15, cook: 20, diet: "Gluten-Free", type: "Tart", ingredient: "Fruits", servings: 12, img: 'recipes/gf_lime_tart.jpg'}, 
  {name: "Chocolate Chip Cookies", prep: 15, cook: 20, diet: "Vegan", type: "Cookie", ingredient: "Chocolate", servings: 24, img: 'recipes/vegan_choco_cookie.jpg'},
  {name: "Cinnamon Apple Cake", prep: 20, cook: 45, diet: "Vegan", type: "Cake", ingredient: "Fruits", servings: 12, img: 'recipes/vegan_apple_cake.PNG'},
  {name: "Banana Cream Pie", prep: 440, cook: 40, diet: "Vegan", type: "Pie", ingredient: "Fruits", servings: 8, img: 'recipes/vegan_banana_pie.jpg'},
  {name: "Chocolate Cake", prep: 15, cook: 40, diet: "Keto", type: "Cake", ingredient: "Chocolate", servings: 12, img: 'recipes/keto_choco_cake.jpg'},
  {name: "Pumpkin Cheesecake", prep: 10, cook: 80, diet: "Keto", type: "Cake", ingredient: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_cheesecake.jpg'},
  {name: "Pumpkin Pie", prep: 15, cook: 45, diet: "Keto", type: "Pie", ingredient: "Vegetables", servings: 16, img: 'recipes/keto_pumpkin_pie.jpg'}
]

function App() {
  let pastryCards = productList.map(item => <PastryCard item={item}/>) 
  return (
    <main>
    <h1>Quarantine Baking Recipes</h1>
    <Row>
      <Col xs={8}>
        <CardDeck>{pastryCards}</CardDeck>
      </Col>
      <Col xs={4}>
        <h4>Favorite Recipes</h4>
        </Col>
  </Row>
  </main>
  );
}

export default App;
