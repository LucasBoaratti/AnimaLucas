import { Outlet } from "react-router-dom";
import { Cabecalho } from "../Components/Cabeçalho/Cabecalho";

export function Index() {
    return (
        <>
            <Cabecalho/>
            <Outlet/>
        </>
    );
}