import React from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //Converting an Object to array
    let transfromedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            //console.log(igKey);
           // console.log(props.ingredients[igKey]);
            return [...Array(props.ingredients[igKey])].map( (_, i) => {
                //console.log(i);
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        }).reduce( (prevValue, currentValue) => { //flatten the array
            return prevValue.concat(currentValue);
        }, []);

        //console.log(transfromedIngredients);
        if(transfromedIngredients.length === 0){
            transfromedIngredients = <p>Please start adding ingredients!</p>
        }
   
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transfromedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );

}
export default burger; 