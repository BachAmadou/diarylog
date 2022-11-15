import React from "react";
import { useEffect, useState } from "react";


export default function Cocktail() {

    const[data, setData] = useState([]);

    const getData = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then((data) => {
            console.log(data.response);
            setData(data.drinks);
        });
    };

    useEffect(() => {
        getData();
    }, [])

    return(
        <div className="drinks">
            <h2 className="cocktail-title">Check your favorite Drinks</h2>
            <div className="cocktails">

                {data.map(drink => {
                    return(
                        <>
                            <p key={drink.idDrink} className="drink-items">
                            <img src={drink.strDrinkThumb} alt="img" className="drink-img" />
                            <p className="text">{drink.strDrink}</p> 
                            <p className="text">{drink.strCategory}</p>
                            </p>
                        </>
                    )
                })}
            </div>

            <button 
            type="submit" 
            className="btn-cocktail"
            onClick={getData}>Get a cocktail</button>
        </div>
    )
}