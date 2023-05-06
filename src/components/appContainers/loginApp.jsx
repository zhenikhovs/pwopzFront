import {Navigate, Outlet} from "react-router-dom";
import AppHeader from "../header/appHeader";
import {useSelector} from "react-redux";
import {getCurrentUser} from "../../store/users/selectors";

const LoginApp = () => {
    const user = useSelector(getCurrentUser);
    return(

            !user ?
                <>
                    <AppHeader/>
                    <main>
                        <Outlet/>
                    </main>
                </>
                : <Navigate to='/'/>

    );
}

export default LoginApp;