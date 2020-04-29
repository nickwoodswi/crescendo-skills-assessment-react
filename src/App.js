import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Recipe from './Recipe'
import AddRecipe from './AddRecipe'
import './App.css'
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      specials: [],
      uuid: uuidv4(),
      title: '',
      description: '',
      servings: '',
      prepTime: '',
      cookTime: '',
      editDate: new Date(),
      ingredients: [],
      directions: []
    }
    this.handleNewRecipeState = this.handleNewRecipeState.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.editIngredient = this.editIngredient.bind(this)
    this.addDirection = this.addDirection.bind(this)
  }

  componentDidMount() {

    fetch(`http://localhost:3001/recipes`, {
        method: 'GET',
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        recipes: data
      })
    })

    fetch(`http://localhost:3001/specials`, {
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      }
  })
  .then(response => response.json())
  .then(data => {
    this.setState({
      specials: data
    })
  })
  }

  handleNewRecipeState(recipeProp, value) {

    this.setState({
     [recipeProp]: value
    })
  }

  addIngredient() {
    let ingredientObject = {
      uuid: uuidv4(),
      amount: '',
      measurement: '',
      name: ''
    }
    this.setState({
      ingredients: [...this.state.ingredients, ingredientObject]
    })
  }

  editIngredient(ingredientId, propName, value) {
    let updatingIngredientProp = this.state.ingredients[ingredientId]
    console.log(propName, value)
    //console.log(updatingIngredientProp.propName)
    // this.setState({
    //   [updatingIngredientProp]: value
    // })
  }

  addDirection() {
    let directionObject = {
      instructions: '',
      optional: false
    }
    this.setState({
      directions: [...this.state.directions, directionObject]
    })
  }

  render() {
    return (
      <>
      <header>
        <div className="header"><h1>CRESCENDO RECIPES</h1></div>
      </header>

      <nav>
        <div className="nav-container">
          <NavLink to='/recipes'><div id="view-recipes-nav" className="nav-button">+VIEW RECIPES</div></NavLink>
          <NavLink to='/add-recipes'><div id="add-recipes-nav" className="nav-button">+ADD RECIPES</div></NavLink>
        </div>
      </nav>

      <main className='App'>
        <Route path='/recipes'>
          {this.state.recipes.map((recipe, idx) => {
            return(
              <Recipe 
                key={idx}
                recipe={recipe}
                viewRecipe={this.viewRecipe}
                specials={this.state.specials}/>
            )
          })}
        </Route>
        <Route path='/add-recipes'>
          <AddRecipe 
            handleNewRecipeState={this.handleNewRecipeState}
            addIngredient={this.addIngredient} 
            editIngredient={this.editIngredient}
            addDirection={this.addDirection}
            appState={this.state}
            />
        </Route>
      </main>
      </>
    );
  }
}

export default App;