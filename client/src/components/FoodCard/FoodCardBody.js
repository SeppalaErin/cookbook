import React from "react";
import "./FoodCardContainer.css";
import Favorite from "../Favorite/favorite";


function FoodCardBody(props) {
  return (  
    <div className={props.itemColClass}>
    <Favorite user={props.user} recipeId={props.recipeId} />
    <div  onClick={(e) => props.onRecipeClick(e, props.recipe)}>
       {/* <Favorite id={props.id} /> */}
     
      <div className="card border-0" >
        <img
          src={props.img?props.img:'/assets/pexels-karolina-grabowska-4033296.jpg' }
          className="card-img-top"
          alt={props.name}>
          </img>
      </div>
      <div className="card-body" >
        <a href={props.name}>
          <h5 className="card-title">{props.name}</h5>
        </a>
      </div>
    </div>
    </div>
  );
}

export default FoodCardBody;
