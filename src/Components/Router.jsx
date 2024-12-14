import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { useEffect, useState } from "react";

export default function Router() {
    const [autorizado, setAutorizado] = useState(false);
    useEffect(() => {

        if (localStorage.getItem("access_token") != null) {
            setAutorizado(true);

        } else {
            setAutorizado(false);
        }

    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<h1> pagina inicial </h1>} />
                <Route path="contato" element={<h1> contato </h1>} />
                <Route path="sobre" element={<h1> sobre </h1>} />
                <Route path="*" element={<h1> 404 not found </h1>} />

                {autorizado ? <Route path="dashbord" element={<h1> dashbord </h1>} />

                    :

                    <Route path="login" element={<h1> login </h1>} />

                }

            </Routes>

        </BrowserRouter>
    )
}