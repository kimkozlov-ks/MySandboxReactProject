import React from 'react';
import './styles/index.scss'
import {useTheme} from "shared/libs/Theme";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={formatClassNames(['app', theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
}

export default App;
