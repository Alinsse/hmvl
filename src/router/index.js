import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Result } from "../pages/result";
import Card from "../pages/card";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>} />
                <Route path="/result" element={<Result/>} />
                <Route path="/card/:id" element={<Card />} />
               
            </Routes>
        </BrowserRouter>
    )
}

export default Router;