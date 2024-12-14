import { BrowserRouter, Routes, Route } from "react-router";

import { useEffect, useState } from "react";

const [autorizado, setAutorizado] = useState();
useEffect({

},[])

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<h1> pagina inicial </h1>} />
                <Route path="contato" element={<h1> contato </h1>} />
                <Route path="sobre" element={<h1> sobre </h1>} />
                <Route path="*" element={<h1> 404 not found </h1>} />

            </Routes>

        </BrowserRouter>
    )
}