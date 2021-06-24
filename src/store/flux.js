const getState = ({ getStore, getActions, setStore }) => {
    return {

        store: {
            characters: null,
            people: null,
            planets: null,
            starships: null,
            favorite: []


        },

        actions: {
            getCharacters: (url) => {
                let starWarsCharacters = []
                fetch(url)
                .then( (res) => res.json() )
                .then( (json) => {
                    setStore({
                        people: json
                    })
                    json.results.forEach( (el) => {
                        fetch(el.url)
                        .then( (res) => res.json() )
                        .then( (json) => {
                            let character = {
                                id: json.result.uid,
                                name: json.result.properties.name,
                                birth: json.result.properties.birth_year,
                                eyes: json.result.properties.eye_color,
                                gender: json.result.properties.gender,
                                height: json.result.properties.height,                                
                            }

                            starWarsCharacters = [...starWarsCharacters, character];

                            setStore({
                                characters: starWarsCharacters
                            })
                        } )
                    } )
                } )
                
            },


            getPlanets: (url) => {
                let starWarsPlanets = []
                fetch(url)
                .then( (res) => res.json() )
                .then(  (json) => {
                    json.results.forEach( (el => {
                        fetch(el.url)
                        .then( (res) => res.json() )
                        .then( (json)  => {
                            let planet = {
                                id: json.result.uid,
                                name: json.result.properties.name,
                                pop: json.result.properties.population,
                                terrain: json.result.properties.terrain,
                                climate: json.result.properties.climate
                            }
                            starWarsPlanets = [...starWarsPlanets,planet];

                            setStore({
                                planets: starWarsPlanets
                            });

                        })
                    }) )
                }  )
            },

            getStarships: (url) => {
                let starWarsStarships = [];
                fetch(url)
                .then( (res) => res.json() )
                .then( (json) => {
                    json.results.forEach( el => {
                        fetch(el.url)
                        .then( (res) => res.json() )
                        .then( json => {
                            let starship = {
                                id: json.result.uid,
                                name: json.result.properties.name,
                                passangers: json.result.properties.passengers,
                                company: json.result.properties.manufacturer,
                                speed: json.result.properties.max_atmosphering_speed,
                            }
                            starWarsStarships = [...starWarsStarships, starship];
                            setStore({
                                starships : starWarsStarships
                            })
                        })
                    } )
                } )
            },
            getFav: (fav) => {
                
                setStore({
                    // favorite: getStore().favorite.concat(fav)
                    favorite: [...getStore().favorite, fav]
                })
             
            }
        }
    }
}

export default getState;