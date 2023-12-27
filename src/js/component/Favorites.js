import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const FavoriteCharacters = () => {
    const { store } = useContext(Context);
    const { favorites } = store;

    return (
        <div className="dropdown ml-auto">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                //aria-haspopup="true"
                aria-expanded="false"
            >
                Favorites ({favorites.length})
            </button>
            <ul className="dropdown-menu">
            {store.favorites.map((item, i) => (
							<li key={i} className="px-1 dropdown-item container-favoritos-dropdown">

								<div className="nombre-favoritos">
									<strong>{item.name}</strong>
								</div>

								<div className="eliminar-favoritos" onClick={() => actions.toggleFavorite(item)}>
									<i className="fa-solid fa-trash-can"></i>
								</div>

							</li>
						))}

            </ul>
           {/*  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                {favorites.map((character, index) => (
                    <ul className="dropdown-item" key={index}>
                        {character.name}
                    </ul>
                ))}
            </div> */}
        </div>
        
    );
};
