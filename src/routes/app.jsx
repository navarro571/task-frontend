import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "@pages/home.jsx";
import NotFound from "@pages/NotFound.jsx";
import AppContext from "@context/AppContext";

const App = () => {
    const [taskgroups, setTaskGroups] = useState(new Map([
        ["TASK", []],
        ["DOING", []],
        ["DONE", []]
    ]));
    return (
        <BrowserRouter>
            <AppContext.Provider value={ {taskgroups: taskgroups, setTaskGroups: setTaskGroups } }>
                <Routes>
                    <Route exact path="/task-frontend/" element={<Home/>}/>
                    {/*<Route path="/task-frontend/*" element={<NotFound/>}/>*/}
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    );
}

export default App;