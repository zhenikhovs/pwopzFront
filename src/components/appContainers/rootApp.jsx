import {Outlet, useLoaderData} from "react-router-dom";
import AppHeader from "../header/appHeader";
import RequireAuth from "../requireAuth/requireAuth";

const RootApp = () => {
    const { user } = useLoaderData();

    return(
        <>
            <AppHeader/>

            <RequireAuth user={user}>
                <main className="px-2 py-8 sm:px-4">
                    <Outlet/>
                </main>
            </RequireAuth>
        </>
    );
}

export default RootApp;