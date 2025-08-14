import { Outlet } from "react-router-dom";
import { Cabecalho } from "../Components/Cabeçalho/Cabecalho";
import { Rodape } from "../Components/Rodapé/Rodape";

export function Index() {
    return (
        <>
            <Cabecalho/>
            <Outlet/>
            <Rodape/>
        </>
    );
}