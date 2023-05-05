import AppHeader from "../header/appHeader";
import {Outlet} from "react-router-dom";

const RootApp = () => {
    return(
        <>
            <AppHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default RootApp;