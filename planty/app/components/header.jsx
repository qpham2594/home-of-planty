import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href="/common-plants"> Common Plants </Link>
            <Link href="/search-page">  Find Your Plant </Link>
        </header>
    )
}