const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			addToFavorites: (character) => {
                const { favorites } = getStore();
                setStore({ favorites: [...favorites, character] });
            },
			removeFromFavorites: (characterId) => {
                const { favorites } = getStore();
                const updatedFavorites = favorites.filter((char) => char.id !== characterId);
                setStore({ favorites: updatedFavorites });
            },
			
		
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
