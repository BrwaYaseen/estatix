import { LocateIcon, MailIcon, PhoneIcon, X } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline" prefetch={false}>
                Buy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline" prefetch={false}>
                Rent
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline" prefetch={false}>
                Sell
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline" prefetch={false}>
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <PhoneIcon className="w-4 h-4 inline-block mr-2" />
              (123) 456-7890
            </li>
            <li>
              <MailIcon className="w-4 h-4 inline-block mr-2" />
              info@realestate.com
            </li>
            <li>
              <LocateIcon className="w-4 h-4 inline-block mr-2" />
              123 Main St, San Francisco, CA 94101
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-primary-foreground hover:text-accent"
              prefetch={false}
            >
              <h1 className="w-6 h-6">Facebook</h1>
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-accent"
              prefetch={false}
            >
              <h1 className="w-6 h-6">X</h1>
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-accent"
              prefetch={false}
            >
              <h1 className="w-6 h-6">Email</h1>
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-accent"
              prefetch={false}
            >
              <h1 className="w-6 h-6">LinkedIn</h1>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to our newsletter to stay up-to-date with the latest real
            estate news and listings.
          </p>
          <form className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; 2024 Real Estatix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
