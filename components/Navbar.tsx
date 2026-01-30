import { ModeToggle } from '@/components/toggleButton';
import Link from 'next/link';

const pages: { name: string; link: string }[] = [
    {
        name: 'home',
        link: '/',
    },
    {
        name: 'projects',
        link: '/projects',
    },
    // {
    //     name: "posts",
    //     link: "/posts"
    // },
    // {
    //     name: "pics",
    //     link: "/pics"
    // },
    // {
    //     name: "poems",
    //     link: "/poems"
    // }
];

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center sticky top-0 z-50 bg-background/75 backdrop-blur-lg">
            <div className="flex space-between items-center gap-2">
                {pages.map((page) => (
                    <Link
                        key={page.name}
                        href={`${page.link}`}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        {page.name}
                    </Link>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
