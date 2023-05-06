import {Outlet} from "react-router-dom";
import AppHeader from "../header/appHeader";

const LoginApp = () => {
    return(
        <>
            <AppHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default LoginApp;