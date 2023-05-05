import AppHeader from "../header/appHeader";
import {Outlet} from "react-router-dom";

const RootPage = () => {
    return(
        <>
            <AppHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default RootPage;