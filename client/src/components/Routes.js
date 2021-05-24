import React, { useEffect, useRef, useState, useContext } from "react";
import { Route, Switch, BrowserRouter, useLocation } from "react-router-dom";
import Movies from "./Movies"
import TVShows from "./TVShows"
import Music from "./Music"
import Header from "./Header"
import Footer from "./Footer"

import PlayerContext from "./Player/context"
import SearchContext from "./Search/context"
import { useSearch } from "../hooks/useSearch"


const Routes = () => {

    const searchText = useSearch()
    const location = useLocation()
    const [playerItem, setPlayerItem] = useState(null)

    return (
        <React.Fragment>
        <SearchContext.Provider value={searchText}>
        <PlayerContext.Provider value={{ playerItem, setPlayerItem }}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route component={Movies} exact path="/movies" />
                    <Route component={TVShows} exact path="/tv" />
                    <Route component={Music} exact path="/music" />
                </Switch>
            </BrowserRouter>
        </PlayerContext.Provider>
        </SearchContext.Provider>
        </React.Fragment>
    )
}


export default Routes;