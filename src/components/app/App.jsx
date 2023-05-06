import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";

import TestPage from "../test/testPage";
import TestPage2 from "../test/testPage2";
import LoginPage from "../pages/loginPage";
import RootApp from "../appContainers/rootApp";
import TestPage3 from "../test/testPage3";
import ErrorPage from "../pages/errorPage";
import LoginApp from "../appContainers/loginApp";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import useUserService from "../../services/UserService";
import {setCurrentUser} from "../../store/users/slice";
import AppHeader from "../header/appHeader";
import RequireAuth from "../requireAuth/requireAuth";

function App() {
    const {getUser}  = useUserService();

    const dispatch = useDispatch();

    useEffect( () => {
        console.log('main')
        getUser().then(res => dispatch(setCurrentUser(res.user?res.user:null)))
            .catch(res => console.log(res));
    }, [])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootApp />,
            children: [
                {
                    path: "",
                    element: <>Hello< />,
                },
                {
                    path: "test",
                    element: <TestPage />,
                },
                {
                    path: "test2",
                    element: <TestPage2 />,
                },
                {
                    path: "test3",
                    element: <TestPage3 />,
                },
                {
                    path: '*',
                    element: <ErrorPage/>,
                }
            ],
        },
        {
            path: "login",
            element: <LoginApp />,
            children: [
                {
                    path: "",
                    element: <LoginPage/>,
                },
            ]
        },



    ]);

    return (
        <RouterProvider router={router}>
            <AppHeader/>
                <RequireAuth>
                    <Outlet/>
                </RequireAuth>
        </RouterProvider>

    );
}

export default App;
