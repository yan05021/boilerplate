import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";

function Router() {
    return (
        <Routes>
            <Route
                path="/co2-data-update/form"
                element={<ContactPage />}
            ></Route>
        </Routes>
    );
}

export default Router;
