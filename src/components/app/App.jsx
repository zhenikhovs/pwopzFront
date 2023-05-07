import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import TestPage from "../test/testPage";
import TestPage2 from "../test/testPage2";
import LoginPage from "../pages/loginPage";
import RootApp from "../appContainers/rootApp";
import TestPage3 from "../test/testPage3";
import ErrorPage from "../pages/errorPage";
import LoginApp from "../appContainers/loginApp";
import {RootLoader} from "../routerLoaders/rootLoader";
import ProfilePage from "../pages/profilePage";
import ProfileStatistics from "../pages/profileStatisticPage";
import ProfileContainer from "../appContainers/profileContainer";

function App() {

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
                    path: 'profile',
                    element: <ProfileContainer />,
                    children: [
                        {
                            path: "",
                            element: <ProfilePage />,
                        },
                        {
                            path: "statistics",
                            element: <ProfileStatistics />,
                        },
                    ]
                },

                {
                    path: '*',
                    element: <ErrorPage/>,
                }
            ],
            loader: RootLoader
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
        <RouterProvider router={router}/>
    );
}

export default App;
