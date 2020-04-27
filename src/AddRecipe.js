import React, { Component } from 'react'
import './AddRecipe.css'
import AddIngredient from './AddIngredient'

class AddRecipe extends Component {
    render() {
        return(
            <div className="add-recipe-form">
                <input type="text" onChange={this.props.addRecipe} placeholder="Recipe Name" />
                <div className="proc-preview">
                    <input className="proc-preview-input" type="number" onChange={this.props.addRecipe} placeholder="Prep Time" />
                    <input className="proc-preview-input" type="number" onChange={this.props.addRecipe} placeholder="Cook Time" />
                    <input className="proc-preview-input" type="number" onChange={this.props.addRecipe} placeholder="# of Servings" />
                </div>
                <input type="text" onChange={this.props.addRecipe} placeholder="Short Description" />
                <div className="build-recipe">
                    <div className="add-ingredients">
                        Ingredients:<br/>
                        <AddIngredient />
                    </div>
                    <div className="add-directions">
                        Directions:<br/>
                        <input type="text" onChange={this.props.addRecipe} placeholder="Instructions - Step 1:" />
                        <button>+Add Direction</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default AddRecipe