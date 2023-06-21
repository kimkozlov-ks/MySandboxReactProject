import React from 'react';
import './styles/index.scss'
import {useTheme} from "shared/libs/Theme";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={formatClassNames(['app', theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
}

export default App;
