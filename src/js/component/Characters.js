import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Characters = () => {

    const { store, actions } = useContext(Context);



    return (
        <div >
            <h1 className="p-1 m-1">Characters</h1>

            <fieldset className="row flex-row flex-nowrap overflow-auto mb-3" >
            
                {store.characters.map((characters, index) => (

                    <div className="card  border-dark m-3" style={{ width: '18rem' }} key={index}>
                        <img src="#" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{characters.name}</h5>
                            <p className="card-text">{`Height: ${characters.height}`}</p>
                            <p className="card-text">{`Birth year: ${characters.birth_year}`}</p>

                            <button className="btn btn-primary">
                                <Link to={"/about/" + characters.id}>Learn More ★</Link>
                            </button>

                            <button onClick={() => actions.toggleFavorite(characters)} className="btn justify-content-md-end p-2 m-2">
                                {store.favorites.some(fav => fav.name === characters.name) ? "❤️" : "🤍"}
                            </button>
                        </div>
                    </div>
                ))}
                </fieldset>

        </div>
    );
};