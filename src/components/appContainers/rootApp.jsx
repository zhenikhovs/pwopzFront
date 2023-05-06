import {Outlet, useLoaderData} from "react-router-dom";
import AppHeader from "../header/appHeader";
import RequireAuth from "../requireAuth/requireAuth";
import {useEffect} from "react";
import {setCurrentUser} from "../../store/users/slice";
import useUserService from "../../services/UserService";
import {useDispatch} from "react-redux";

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