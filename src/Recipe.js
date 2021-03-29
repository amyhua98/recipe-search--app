import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, time, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3> Total Time : {time}</h3>
            <img src={image} alt=""/>
        </div>
    );
}


export default Recipe;