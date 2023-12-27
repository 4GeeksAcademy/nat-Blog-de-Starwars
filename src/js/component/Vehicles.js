import React, { useState, useEffect, useContext }  from "react";
import { Context } from "../store/appContext";


import Slider from "react-slick";


export const Vehicles = () =>{
    const { store, actions } = useContext(Context);


    return (
        <div>
            <h1>
                vehicles
            </h1>
            <fieldset className="row flex-row flex-nowrap overflow-auto mb-3" >

            {store.vehicles.map((vehicle, index) => (
                
                <div className="card  border-dark m-3 " style={{ width: '18rem' }} key={index}>
                    <img src="#" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <p className="card-text">{`Model: ${vehicle.model}`}</p>
                        <p className="card-text">{`Class: ${vehicle.vehicle_class}`}</p>
                        <a href="#" className="btn btn-primary">More information</a>
                        <button onClick={() => actions.toggleFavorite(vehicle)} className="btn justify-content-md-end">
                        {store.favorites.some(fav => fav.name === vehicle.name) ? "❤️" : "🤍"}
                        </button>
                    </div>
                </div>
            ))}
            </fieldset>

        </div>
    )
   
}