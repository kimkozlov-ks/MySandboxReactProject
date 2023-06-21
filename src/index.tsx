import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "shared/libs/Theme";
import App from "app/App";
import './shared/libs/Language/config/i18n'

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
