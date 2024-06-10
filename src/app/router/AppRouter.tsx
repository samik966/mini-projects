import { ROUTE_PATHS } from "@/app/router/route-config";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <div className="container">
            <Routes>
                {ROUTE_PATHS.map((route) => {
                    const { path, element } = route;
                    const Component = element;
                    return <Route key={path} path={path} element={<Component />} />;
                })}
            </Routes>
        </div>
    );
};

export default AppRouter;
