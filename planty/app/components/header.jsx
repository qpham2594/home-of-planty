import Link from "next/link";

export default function Header() {
    return (
        <header className="header hover:bg-green-900 transition-colors duration-300">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <span className="sr-only">Home</span>
                <Link href="/">
                    <img src='/fav-32.png' alt="Logo" />
                </Link>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-md">
                        <Link href="/" className="text-orange-500 transition hover:text-white duration-300"> Home </Link>
                        <Link href="/search-page" className="text-orange-500 transition hover:text-white duration-300"> Find Your Plant </Link>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}

