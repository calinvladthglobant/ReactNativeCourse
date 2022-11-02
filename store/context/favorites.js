import {createContext, useState} from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => {
    },
    removeFavorites: (id) => {
    }
})

function FavoritesContextProvider({children}) {
    const [ids, setIds] = useState([])

    function addFavorites(id) {
        setIds(currentIds => [...currentIds, id])
    }

    function removeFavorites(id) {
        setIds(currentIds => currentIds.filter(o => o !== id))
    }

    const value = {
        ids: ids,
        addFavorites: addFavorites,
        removeFavorites: removeFavorites
    }


    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider