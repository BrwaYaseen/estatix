import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle-button";

const Navbar = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="text-xl font-bold text-foreground"
          prefetch={false}
        >
          Estatix
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/buy"
            className="text-foreground hover:text-foreground/80"
            prefetch={false}
          >
            Buy
          </Link>
          <Link
            href="/rent"
            className="text-foreground hover:text-foreground/80"
            prefetch={false}
          >
            Rent
          </Link>
          <Link
            href="/apartment"
            className="text-foreground hover:text-foreground/80"
            prefetch={false}
          >
            Apartment
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-foreground/80"
            prefetch={false}
          >
            About
          </Link>
          <ModeToggle />
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
