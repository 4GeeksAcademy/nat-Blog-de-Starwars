import React, { useContext } from "react";
import { Context } from "../store/appContext";


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
                aria-haspopup="true"
                aria-expanded="false"
            >
                Favorites ({favorites.length})
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                {favorites.map((character, index) => (
                    <a className="dropdown-item" href="#" key={index}>
                        {character.name}
                    </a>
                ))}
            </div>
        </div>
    );
};
