import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "shared/libs/Theme";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={formatClassNames(['app', theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>} />
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
