import React, { Component } from 'react'

class Ingredient extends Component {

    createMarkup() { return {__html: 'First &middot; Second'}; }
    render() {
        return(
            <>
            <div 
                id={this.props.ingredient.uuid} 
                className="ingredient">
                    {this.props.ingredient.amount} {this.props.ingredient.measurement} {this.props.ingredient.name}
                    {this.props.specials.map(special => {
                        if (special.ingredientId === this.props.ingredient.uuid) {
                            return (
                                <>
                                <div class="special">
                                    <b>{special.title}</b> ({special.type}): {special.text} />
                                </div>  
                                </>
                            )
                        } else { return (<></>) } 
                    })}
            </div>
            </>
        )
    }

}

export default Ingredient