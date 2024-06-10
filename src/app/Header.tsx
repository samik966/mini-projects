import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <div>
                    <span>Mini</span>
                    <span className="font-bold">Tool</span>
                </div>
                <div className="flex gap-2">
                    <AppSearch />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

const AppSearch = () => {
    return (
        <div className="flex items-center rounded-md border px-2 ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1">
            <Input
                className="border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search..."
            />
            <SearchIcon size={18} className="text-muted" />
        </div>
    );
};

export default Header;
