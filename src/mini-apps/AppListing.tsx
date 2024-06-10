import { ROUTE_PATHS } from "@/app/router/route-config";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const AppListing = () => {
    return (
        <div
            className={cn(
                "my-2.5",
                "grid grid-cols-[repeat(auto-fill,minmax(max(250px,calc(100%-calc(calc(6-1)*10px))/6),1fr))] gap-2.5",
            )}
        >
            {ROUTE_PATHS.filter((route) => route.list).map((route) => (
                <div key={route.title} className="rounded border">
                    <Link className="block p-4" to={route.path}>
                        <p>{route.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AppListing;
