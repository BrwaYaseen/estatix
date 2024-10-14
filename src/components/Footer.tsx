import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-6">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                prefetch={false}
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                prefetch={false}
              >
                Rent
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                prefetch={false}
              >
                Sell
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                prefetch={false}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                prefetch={false}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <MailIcon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">info@realestate.com</span>
            </li>
            <li className="flex items-start">
              <LocateIcon className="w-5 h-5 mr-2 mt-1 text-muted-foreground" />
              <span className="text-muted-foreground">
                123 Main St, San Francisco, CA 94101
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Real Estatix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
