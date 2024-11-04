"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <React.Fragment>
      <nav className="absolute w-full bg-gray-950 bg-opacity-30 backdrop-filter backdrop-blur-lg z-50">
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#2b2b2b] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image className="h-8 w-auto" width={32} height={32} src="/logo.png" alt="DrgMastering Logo" />
              </div>
              <div className="hidden sm:ml-12 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="#studio"
                    className="px-3 py-2 text-base uppercase font-medium text-gray-300 hover:border-b hover:text-white hover:font-semibold transition-colors duration-200 ease-out hover:ease-in"
                    aria-current="page"
                  >
                    Studio
                  </Link>
                  <Link
                    href="#services"
                    className="px-3 py-2 text-base uppercase font-medium text-gray-300 hover:border-b hover:text-white hover:font-semibold transition-colors duration-200 ease-out hover:ease-in"
                  >
                    Services
                  </Link>
                  <Link
                    href="#references"
                    className="px-3 py-2 text-base uppercase font-medium text-gray-300 hover:border-b hover:text-white hover:font-semibold transition-colors duration-200 ease-out hover:ease-in"
                  >
                    References
                  </Link>
                  <Link
                    href="#contact"
                    className="px-3 py-2 text-base uppercase font-medium text-gray-300 hover:border-b hover:text-white hover:font-semibold transition-colors duration-200 ease-out hover:ease-in"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 gap-3 !right-10 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full !bg-[#2b2b2b] p-2 text-gray-800 hover:!font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Instagram</span>
                <img src="/instagram.svg" className="w-5" alt="instagram" />
              </button>
              <button
                type="button"
                className="relative rounded-full !bg-[#2b2b2b] p-2 text-gray-800 hover:!font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Whatsapp</span>
                <img src="/whatsapp.svg" className="w-5" alt="whatsapp" />

              </button>
              <button
                type="button"
                className="relative rounded-full !bg-[#2b2b2b] p-2 text-gray-800 hover:!font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Facebook</span>
                <img src="/facebook.svg" className="w-5 h-5" alt="facebook" />
                
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="flex items-center flex-col space-y-2 px-2 pb-3 pt-2">
              <Link
                href="#studio"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit hover:text-white hover:text-white hover:font-semibold rounded-none"
                aria-current="page"
              >
                Studio
              </Link>
              <Link
                href="#services"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit text-gray-300 hover:text-white hover:font-semibold rounded-none hover:text-white"
              >
                Services
              </Link>
              <Link
                href="#references"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit text-gray-300 hover:text-white hover:font-semibold rounded-none hover:text-white"
              >
                References
              </Link>
              <Link
                href="#contact"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit text-gray-300 hover:text-white hover:font-semibold rounded-none hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
