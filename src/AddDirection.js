import React, { Component } from 'react'

class AddDirection extends Component {
    render() {
        return(
            <>
            {this.props.newRecipeDirections.map((direction, idx) => {
                return(
                    <textarea 
                        key={idx}
                        onChange={this.props.addRecipe} 
                        placeholder="Add Direction" />
                )
            })}
            <button onClick={e => this.props.addDirection()}>+Add Direction</button>
            </>
        )
    }
}

export default AddDirection