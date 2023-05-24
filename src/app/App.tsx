import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "shared/libs/Theme";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import {AppRouter} from "app/router";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={formatClassNames(['app', theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <AppRouter />
        </div>
    );
}

export default App;
