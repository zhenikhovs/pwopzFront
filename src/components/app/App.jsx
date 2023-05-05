import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import TestPage from "../test/testPage";
import TestPage2 from "../test/testPage2";
import LoginPage from "../pages/loginPage";
import RootApp from "../rootApp/rootApp";
import TestPage3 from "../test/testPage3";
import ErrorPage from "../pages/errorPage";

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
                    path: "login",
                    element: <LoginPage />,
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



    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
