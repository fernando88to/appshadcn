import {ThemeToggle} from "@/app/dashboard/components/layout/theme-toggle";
import {cn} from "@/lib/utils";
import {MobileSidebar} from "@/app/dashboard/components/layout/mobile-sidebar";
import Link from "next/link";
import {Boxes} from "lucide-react";
import {UserNav} from "@/app/dashboard/components/layout/user-nav";
import TeamSwitcher from "@/app/dashboard/components/layout/team-switcher";

export default function Header() {

    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <Link
                    href={"/"}
                    className="hidden items-center justify-between gap-2 md:flex"
                >
                    <Boxes className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">T3 app template</h1>
                </Link>
                <div className={cn("block md:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">

                    <TeamSwitcher/>
                    <UserNav />
                    <ThemeToggle />

                    {/*{sessionData?.user ? (
                        <UserNav2 use´[r={sessionData.user} />
                    ) : (
                        <Button size="sm"
                            onClick={() => {
                                void signIn();
                            }}
                        >
                            Sign In
                        </Button>
                    )}*/}
                </div>
            </nav>
        </div>
    );
}