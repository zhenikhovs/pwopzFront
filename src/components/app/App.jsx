import {
    createBrowserRouter, Link,
    RouterProvider,
} from "react-router-dom";

import TestPage from "../Test/testPage";
import TestPage2 from "../Test/testPage2";
import LoginPage from "../pages/loginPage";
import RootPage from "../pages/rootPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootPage />,
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
            ]
        },


    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
