import "./App.css"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./paginas/Home";
import Pagina2 from "./paginas/Pagina2";
import Pagina3 from "./paginas/Pagina3";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/pagina2" element={<Layout><Pagina2 /></Layout>} />
                <Route path="/pagina3" element={<Layout><Pagina3 /></Layout>} />
            </Routes>
        </div>
    );
}

export default App;