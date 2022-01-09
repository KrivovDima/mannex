import './App.css';
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {GlobalStyles} from "./styles/global";
import {Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home/Home";
import {Order} from "./pages/Order/Order";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="order" element={<Order/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
