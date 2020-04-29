import React, { Component } from 'react'
import './AddRecipe.css'
import AddIngredient from './AddIngredient'
import AddDirection from './AddDirection'

class AddRecipe extends Component {
    render() {
        return(
            <div className="add-recipe-form">
                <input type="text" placeholder="Recipe Name" onChange={e => this.props.handleNewRecipeState('title', e.target.value)} />
                <div className="proc-preview">
                    <input className="proc-preview-input" type="number" onChange={e => this.props.handleNewRecipeState('prepTime', e.target.value)} placeholder="Prep Time (Minutes)" />
                    <input className="proc-preview-input" type="number" onChange={e => this.props.handleNewRecipeState('cookTime', e.target.value)} placeholder="Cook Time (Minutes)" />
                    <input className="proc-preview-input" type="number" onChange={e => this.props.handleNewRecipeState('servings', e.target.value)} placeholder="# of Servings" />
                </div>
                <input type="text" onChange={e => this.props.handleNewRecipeState('description', e.target.value)} placeholder="Short Description" />
                <div className="build-recipe">
                    <div className="add-ingredients">
                        Ingredients:<br/>
                        <AddIngredient 
                            addIngredient={this.props.addIngredient} 
                            editIngredient={this.props.editIngredient}
                            newRecipeIngredients={this.props.appState.ingredients} />
                    </div>
                    <div className="add-directions">
                        Directions:<br/>
                        <AddDirection 
                            addDirection={this.props.addDirection} 
                            newRecipeDirections={this.props.appState.directions} />
                    </div>
                </div>

            </div>
        )
    }
}

export default AddRecipe