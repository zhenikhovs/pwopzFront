import {Outlet, useLoaderData} from "react-router-dom";
import AppHeader from "../header/appHeader";
import RequireAuth from "../requireAuth/requireAuth";

const RootApp = () => {
    const { user } = useLoaderData();

    return(
        <>
            <AppHeader/>
            <RequireAuth user={user}>
                <Outlet/>
            </RequireAuth>
        </>
    );
}

export default RootApp;