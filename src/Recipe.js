import React, { Component } from 'react'
import './Recipe.css'
import Ingredient from './Ingredient'

class Recipe extends Component {

    displayRecipe() {
        document.getElementById('recipe-detail-'+this.props.recipe.uuid).classList.toggle('recipe-detail')
    }

    render() {

        let recipeDetailContainer = 'recipe-detail-'+this.props.recipe.uuid
        let id = this.props.recipe.uuid

        return(
            <div className='recipe'>
                <div className='recipe-header'>
                    <div className='postDate'>{this.props.recipe.postDate}</div>
                    <div className='recipe-title'><h3>{this.props.recipe.title}</h3></div>
                </div>
                <div className='recipe-headline'>
                    <div className='recipe-description'>
                        <h4>{this.props.recipe.description}</h4>
                        <button 
                            id={this.props.recipe.uuid} 
                            className='view-recipe'
                            onClick={() => this.displayRecipe()}>TRY IT</button>
                    </div>
                    <div className='recipe-image'><img src={this.props.recipe.images.small} /></div>
                </div>
                <div className='recipe-details-prev'>
                    <div className='servings'>{this.props.recipe.servings} servings /</div>
                    <div className='prepTime'>/ Prep Time: {this.props.recipe.prepTime} minutes /</div>
                    <div className='cookTime'>/ Cook Time: {this.props.recipe.cookTime} minutes</div>
                </div>
                <div id='recipe-detail'> 
                    <div 
                        id={recipeDetailContainer} 
                        className='recipe-detail-hidden'>
                            <b><i>INGREDIENTS:</i></b><br/>

                            {this.props.recipe.ingredients.map(ingredient => {
                                
                                return(
                                    <Ingredient 
                                        specials={this.props.specials}
                                        ingredient={ingredient}/>
                                )

                            })}

                            <div className="directions-header"><b><i>DIRECTIONS:</i></b><br/></div>

                            <div className="directions">
                                {this.props.recipe.directions.map(direction => {
                                    if (!direction.optional) {
                                        return(<div className="direction">{direction.instructions}</div>)
                                    }
                                    if (direction.optional) {
                                        return(<div className="direction"><b>(optional) </b>{direction.instructions}</div>)
                                    }
                                })}
                            </div>

                    </div>
                </div>
                <div className='last-edited'>Last Edited: {this.props.recipe.editDate}</div>
            </div>
        )
    }
}

export default Recipe