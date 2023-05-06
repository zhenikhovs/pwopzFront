import {Outlet} from "react-router-dom";
import AppHeader from "../header/appHeader";
import RequireAuth from "../requireAuth/requireAuth";
import {useEffect} from "react";

const RootApp = () => {
    return(
        <>
            <AppHeader/>
            <main>
                <RequireAuth>
                    <Outlet/>
                </RequireAuth>
            </main>
        </>
    );
}

export default RootApp;