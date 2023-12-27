import React, { useState, useEffect, useContext }  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Planets = () =>{
    const { store, actions } = useContext(Context);


    return (
        <div >
            <h1>
                Planets
            </h1>
            <fieldset className="row flex-row flex-nowrap overflow-auto mb-3" >

            {store.planets.map((planet, index) => (
                
                <div className="card  border-dark m-3 " style={{ width: '18rem' }} key={index}>
                    <img src="#" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">{`Population: ${planet.population}`}</p>
                        <p className="card-text">{`Climate: ${planet.climate}`}</p>

                        <a href={`/about/${planet.id}`} className="btn btn-primary">More information</a>


                        <button onClick={() => actions.toggleFavorite(planet)} className="btn justify-content-md-end">
                        {store.favorites.some(fav => fav.name === planet.name) ? "❤️" : "🤍"}
                        </button>
                    </div>
                </div>
            ))}
            </fieldset>
        </div>
    )
   
}