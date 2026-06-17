import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="Stocks icon"
                        width={28}
                        height={30}
                        className="h-8 w-auto"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-white font-bold text-base">Stonks</span>
                        <span className="text-gray-400 text-xs">bleh bleh</span>
                    </div>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown />
            </div>
        </header>
    )
}
export default Header