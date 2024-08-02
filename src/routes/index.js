import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
import { isAuthenticated } from "./helpers";
import Protected from "./protected";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Protected />}>
                <Route index element={<Home />} />
                <Route path="dash" element={<Dashboard />} />
                {/* All other routes that you want to protect will go inside here */}
            </Route>
            <Route
                path="signIn"
                element={<SignIn />}
                loader={async () => await isAuthenticated()}
            />
            <Route
                path="signup"
                element={<Signup />}
                loader={async () => await isAuthenticated()}
            />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
    )
);

const Index = () => {
    return <RouterProvider router={router} />;
};

export default Index;