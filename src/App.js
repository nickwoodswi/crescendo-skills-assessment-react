import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Recipe from './Recipe'
import AddRecipe from './AddRecipe'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      specials: [],
      new_recipes: []
    }
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

  viewRecipe(uuid) {
    console.log(uuid)
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
          {this.state.recipes.map(recipe => {
            return(
              <Recipe 
                recipe={recipe}
                viewRecipe={this.viewRecipe}
                specials={this.state.specials}/>
            )
          })}
        </Route>
        <Route path='/add-recipes'>
          <AddRecipe />
        </Route>
      </main>
      </>
    );
  }
}

export default App;