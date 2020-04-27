import React, { Component } from 'react'

class AddIngredient extends Component {
    render() {
        return(
            <>
            <input type="text" onChange={this.props.addRecipe} placeholder="First Ingredient" />
            <button>+Add Ingredient</button>
            </>
        )
    }
}

export default AddIngredient