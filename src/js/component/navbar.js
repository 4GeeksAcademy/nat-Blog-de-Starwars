import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FavoriteCharacters } from "./Favorites";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<FavoriteCharacters/>
			</div>
		</nav>
	);
};
