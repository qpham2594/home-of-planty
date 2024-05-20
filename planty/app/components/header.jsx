import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <span className="sr-only">Home</span>
                <Link href="/">
                    <img src='/fav-32.png' alt="Logo" />
                </Link>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-md">
                        <Link href="/" className="text-gray-100 transition hover:text-blue-300/75"> Home </Link>
                        <Link href="/search-page" className="text-gray-900 transition hover:text-black-800/75"> Find Your Plant </Link>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}

