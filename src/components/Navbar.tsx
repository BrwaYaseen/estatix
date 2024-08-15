import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle-button";

const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
      <Link href="#" className="text-xl font-bold" prefetch={false}>
        Estatix
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/buy" className="hover:underline" prefetch={false}>
          Buy
        </Link>
        <Link href="/rent" className="hover:underline" prefetch={false}>
          Rent
        </Link>
        <Link href="/apartment" className="hover:underline" prefetch={false}>
          Apartment
        </Link>
        <Link href="/about" className="hover:underline" prefetch={false}>
          About
        </Link>
        <div className="hover:underline">
          <ModeToggle />
        </div>
      </nav>
      <Button variant="outline" size="sm" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
    </header>
  );
};

export default Navbar;
