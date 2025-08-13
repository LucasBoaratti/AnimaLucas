import { Routes, Route } from "react-router-dom";
import { Index } from "../Pages/Index";
import { Home } from "../Pages/Home/Home";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}