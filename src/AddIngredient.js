import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class AddIngredient extends Component {
    render() {
        return(
            <>
            {this.props.newRecipeIngredients.map((ingredient, idx) => {
                return(
                    <input 
                        key={idx}
                        id={idx} 
                        type="text" 
                        onChange={e => this.props.editIngredient(e.target.id, 'name', e.target.value)} 
                        placeholder="Add Ingredient" />
                )
            })}
            <button onClick={e => this.props.addIngredient()}>+Add Ingredient</button>
            </>
        )
    }
}

export default AddIngredient