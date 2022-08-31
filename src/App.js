import React from "react";
import { AuthProvider } from "./context/auth";
import { RoutesApp } from "./Routes";
import { GlobalStyle } from "./styles/global";

export const App = () => {
    return(
        <AuthProvider>
            <RoutesApp />
            <GlobalStyle />
        </AuthProvider>
    )
}