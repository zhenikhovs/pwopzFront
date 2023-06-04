import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import TestPage2 from "../test/testPage2";
import LoginPage from "../pages/loginPage";
import RootApp from "../appContainers/rootApp";
import TestPage3 from "../test/testPage3";
import ErrorPage from "../pages/errorPage";
import LoginApp from "../appContainers/loginApp";
import {RootLoader} from "../routerLoaders/rootLoader";
import ProfilePage from "../pages/profilePage";
import ProfileStatistics from "../pages/statisticPage";
import ProfileContainer from "../appContainers/profileContainer";
import CoursesPage from "../pages/coursesPage";
import {CoursesLoader} from "../routerLoaders/coursesLoader";
import {CourseLoader} from "../routerLoaders/courseLoader";
import CoursePage from "../pages/coursePage";
import ModulePage from "../pages/modulePage";
import {ModuleLoader} from "../routerLoaders/moduleLoader";
import TestsPage from "../pages/testsPage";
import TestPage from "../pages/testPage";
import {TestsLoader} from "../routerLoaders/testsLoader";
import {TestLoader} from "../routerLoaders/testLoader";
import RegistrationPage from "../pages/registrationPage";
import HomePage from "../pages/homePage";
import {StatisticsLoader} from "../routerLoaders/statisticsLoader";
import StatisticsContainer from "../appContainers/statisticsContainer";
import StatisticsCoursesPage from "../pages/statisticsCoursesPage";
import {StatisticsCoursesLoader} from "../routerLoaders/statisticsCoursesLoader";
import {StatisticsGroupsLoader} from "../routerLoaders/statisticsGroupsLoader";
import StatisticsGroupsPage from "../pages/statisticsGroupsPage";
import {StatisticsUsersLoader} from "../routerLoaders/statisticsUsersLoader";
import StatisticsUsersPage from "../pages/statisticsUsersPage";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootApp />,
            children: [
                {
                    path: "",
                    element: <HomePage />,
                },
                {
                    path: "courses",
                    element: <CoursesPage />,
                    loader: CoursesLoader
                },
                {
                    path: "courses/:id",
                    element: <CoursePage />,
                    loader: CourseLoader
                },
                {
                    path: "courses/:id/:module_id",
                    element: <ModulePage />,
                    loader: ModuleLoader
                },
                {
                    path: "tests",
                    element: <TestsPage />,
                    loader: TestsLoader
                },
                {
                    path: "tests/:id/:course_id",
                    element: <TestPage />,
                    loader: TestLoader
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
                            path: 'statistics',
                            element: <ProfileStatistics />,
                            loader: StatisticsLoader
                        },
                    ]
                },
                {
                    path: 'statistics',
                    element: <StatisticsContainer />,
                    children: [
                        {
                            path: '',
                            element: <div>Страница статистики.</div>,
                        },
                        {
                            path: 'courses',
                            element: <StatisticsCoursesPage />,
                            loader: StatisticsCoursesLoader
                        },
                        {
                            path: 'users',
                            element: <StatisticsUsersPage />,
                            loader: StatisticsUsersLoader
                        },
                        {
                            path: 'groups',
                            element: <StatisticsGroupsPage />,
                            loader: StatisticsGroupsLoader
                        }
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
        {
            path: "registration",
            element: <LoginApp />,
            children: [
                {
                    path: "",
                    element: <RegistrationPage/>,
                },
            ]
        },



    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
