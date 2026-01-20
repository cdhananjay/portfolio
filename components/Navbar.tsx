import {ModeToggle} from "@/components/toggleButton";
import Link from "next/link";

const pages : {name: string, link: string}[] = [
    {
        name: "home",
        link: "/"
    },
    {
        name: "projects",
        link: "/projects"
    },
    {
        name: "posts",
        link: "/posts"
    }
]

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center sticky top-0 z-50 bg-background/50 backdrop-blur-md" >
            <div className="flex space-between items-center">
                {pages.map((page) => (
                    <Link key={page.name} href={`/${page.link}`} className="mx-2 hover:font-bold" >{page.name}</Link>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;