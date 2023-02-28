import { createBrowserRouter } from "react-router-dom";
import ProjectDetailsPage from "../ProjectDetailsPage/ProjectDetailsPage";
import Layout from "../Layout/Layout";
import HomePage from '../HomePage/HomePage.jsx'
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/projectDetails",
            element: <ProjectDetailsPage/>,
        },
    ]
 }
]);
export default Router;
