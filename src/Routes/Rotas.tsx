import { Routes, Route } from "react-router-dom";
import { Index } from "../Pages/Index";
import { Login } from "../Pages/Login/Login";
import { Cadastro } from "../Pages/Cadastro/Cadastro";
import { Home } from "../Pages/Home/Home";

export function Rotas() {
    return (
        <Routes>
            {/* Rota para a página de login */}
            <Route path="/">
                <Route index element={<Login/>}/>
            </Route>

            {/* Rota para a página home */}
            <Route path="/home" element={<Index/>}>
                <Route index element={<Home/>}/>
            </Route>

            {/* Rota para a página de cadastro */}
            <Route path="/cadastro">
                <Route index element={<Cadastro/>}/>
            </Route>
        </Routes>
    );
}