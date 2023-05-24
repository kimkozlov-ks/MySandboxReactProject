import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "shared/libs/Theme";
import App from "app/App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
