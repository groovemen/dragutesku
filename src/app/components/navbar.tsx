"use client";
import React, { useState, useEffect } from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <nav
        className={`${
          isScrolled ? "bg-[#000]" : "bg-[#000] bg-opacity-30 backdrop-filter backdrop-blur-lg"
        } fixed top-0 w-full z-50 transition-colors duration-300`}
      >
        <div className="mx-auto md:max-w-7xl 2xl:max-w-[100rem] sm:py-2 px-4 md:px-0">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
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
                    className="block h-8 w-8"
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
                    className="block h-8 w-8"
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
                <Image className="h-10 md:h-12 w-auto" width={200} height={100} src="/logo.png" alt="DrgMastering Logo" />
              </div>
              <div className="hidden sm:ml-12 md:block my-auto">
                <div className="flex space-x-2 lg:space-x-4">
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
                    href="#order"
                    className="px-3 py-2 text-base uppercase font-medium text-gray-300 hover:border-b hover:text-white hover:font-semibold transition-colors duration-200 ease-out hover:ease-in"
                  >
                    Order
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
            <div className="absolute inset-y-0 gap-3 !right-10 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <div className="flex gap-2 md:gap-4 lg:gap-8 sm:justify-center mr-4">
                <IconButton
                  as="a"
                  href="https://wa.me/+40761423156?text=I'm%20interested%20in%20your%20services"
                  color="secondary"
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  className="rounded-xl border-gray-50"
                >
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.7469 4.82916C5.89595 5.68013 5.69139 6.63992 5.88613 7.59808C6.08578 8.57914 6.71253 9.57657 7.55857 10.4202C8.42015 11.2793 9.4102 11.9126 10.3847 12.1139C11.3322 12.3095 12.2911 12.1041 13.1707 11.2294C13.1724 11.2261 13.2108 11.1582 13.1413 10.9512C13.0676 10.7311 12.8991 10.4554 12.6364 10.1943C12.3746 9.93251 12.0972 9.76395 11.8771 9.69031C11.6644 9.61994 11.5965 9.66085 11.5948 9.66085C11.2103 10.0454 10.9951 10.3891 10.9648 10.6935C10.9583 10.7573 10.9368 10.8187 10.9021 10.8728C10.8674 10.9268 10.8205 10.9719 10.7652 11.0044C10.5025 11.1599 10.1384 11.2204 9.67857 11.0666C9.23592 10.9177 8.70571 10.5715 8.0585 9.92596C7.41047 9.27955 7.06273 8.75179 6.91299 8.30994C6.75835 7.85091 6.81972 7.4868 6.97518 7.22414C7.0078 7.16896 7.05294 7.12221 7.10695 7.08767C7.16095 7.05314 7.22232 7.03177 7.2861 7.02531C7.59211 6.99504 7.93904 6.77984 8.3236 6.39772C8.3236 6.39363 8.36288 6.32654 8.29333 6.11952C8.21969 5.89942 8.05114 5.62367 7.78849 5.36265C7.52666 5.10082 7.24928 4.93226 7.02918 4.85862C6.81644 4.78825 6.74853 4.82916 6.7469 4.82916ZM7.28692 4.08211C7.65184 4.20321 8.03395 4.45032 8.36697 4.78252C8.69916 5.11473 8.9479 5.49521 9.06982 5.85932C9.18273 6.19725 9.22282 6.65629 8.90535 6.97213C8.55107 7.32642 8.12559 7.65781 7.64203 7.78873C7.64185 7.87729 7.65765 7.96515 7.68866 8.04811C7.78112 8.3214 8.03232 8.74443 8.63616 9.34583C9.23919 9.94805 9.66384 10.1984 9.93876 10.2909C10.0525 10.3285 10.1376 10.34 10.2014 10.3375C10.3331 9.85477 10.6662 9.43093 11.0204 9.07745C11.3379 8.76161 11.7961 8.8017 12.1349 8.9138C12.499 9.0349 12.8811 9.28283 13.2141 9.61503C13.5471 9.94723 13.795 10.3269 13.9178 10.691C14.0299 11.0289 14.0708 11.488 13.7525 11.8046C12.6716 12.8822 11.4296 13.1654 10.2194 12.915C9.03381 12.6703 7.90795 11.9241 6.98091 11.0003C6.06205 10.0839 5.32647 8.94899 5.08428 7.76091C4.83799 6.54992 5.11128 5.30374 6.17251 4.24576C6.48998 3.92992 6.949 3.97001 7.28692 4.08211Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.0002 1.17807C7.56599 1.17788 6.15933 1.57201 4.93402 2.31738C3.7087 3.06275 2.71191 4.13066 2.05261 5.40435C1.39331 6.67805 1.09689 8.10849 1.19576 9.53929C1.29463 10.9701 1.78498 12.3462 2.6132 13.5171C2.66275 13.5871 2.69347 13.6686 2.7024 13.7539C2.71133 13.8392 2.69818 13.9253 2.6642 14.0041L1.3802 16.9741L5.0372 15.9131C5.16058 15.8771 5.29308 15.89 5.4072 15.9491C6.45934 16.4928 7.6212 16.7905 8.80516 16.8197C9.98911 16.8489 11.1642 16.6089 12.2419 16.1178C13.3196 15.6266 14.2717 14.8972 15.0264 13.9845C15.7811 13.0718 16.3186 11.9996 16.5986 10.8488C16.8785 9.69808 16.8934 8.49878 16.6423 7.3414C16.3912 6.18402 15.8805 5.09877 15.1488 4.16752C14.4171 3.23626 13.4835 2.48331 12.4184 1.96546C11.3533 1.44761 10.1845 1.17838 9.0002 1.17807ZM0.178202 9.00007C0.178553 7.0842 0.802584 5.22051 1.95597 3.69072C3.10935 2.16092 4.72939 1.04817 6.57122 0.520668C8.41304 -0.00683457 10.3765 0.079582 12.1649 0.766856C13.9532 1.45413 15.4693 2.7049 16.4838 4.33011C17.4983 5.95532 17.9562 7.86663 17.7882 9.77512C17.6203 11.6836 16.8356 13.4856 15.5528 14.9086C14.27 16.3316 12.5588 17.2984 10.6779 17.6627C8.79697 18.027 6.84858 17.7692 5.1272 16.9281L0.639202 18.2301C0.548197 18.2564 0.451599 18.2562 0.360655 18.2297C0.269711 18.2033 0.188162 18.1515 0.125505 18.0804C0.0628475 18.0094 0.0216587 17.922 0.00673393 17.8285C-0.00819084 17.7349 0.00376241 17.6391 0.0412023 17.5521L1.6372 13.8601C0.684223 12.4185 0.17679 10.7282 0.178202 9.00007Z" fill="white"/>
                  </svg>
                </IconButton>
                <IconButton
                  as="a"
                  href="https://www.instagram.com/drgmastering?igsh=MWl5N25jMGMybjEyZg=="
                  color="secondary"
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  className="rounded-xl border-gray-50"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.437 20.937H5.56299C4.89995 20.937 4.26406 20.6736 3.79522 20.2048C3.32638 19.7359 3.06299 19.1 3.06299 18.437V5.56299C3.06299 4.89995 3.26685 4.3236 3.79522 3.79522C4.3236 3.26685 4.89995 3.06299 5.56299 3.06299H18.437C19.1 3.06299 19.7359 3.32638 20.2048 3.79522C20.6736 4.26406 20.937 4.89995 20.937 5.56299V18.437C20.937 19.1 20.6736 19.7359 20.2048 20.2048C19.7359 20.6736 19.1 20.937 18.437 20.937ZM5.56299 4.06299C5.16516 4.06299 4.78363 4.22102 4.50233 4.50233C4.22102 4.78363 4.06299 5.16516 4.06299 5.56299V18.437C4.06299 18.8348 4.22102 19.2163 4.50233 19.4976C4.78363 19.779 5.16516 19.937 5.56299 19.937H18.437C18.8348 19.937 19.2163 19.779 19.4976 19.4976C19.779 19.2163 19.937 18.8348 19.937 18.437V5.56299C19.937 5.16516 19.779 4.78363 19.4976 4.50233C19.2163 4.22102 18.8348 4.06299 18.437 4.06299H5.56299Z" fill="white"/>
                    <path d="M12.0002 16.5938C11.0915 16.5928 10.2036 16.3225 9.44857 15.8169C8.69357 15.3114 8.10539 14.5933 7.7584 13.7535C7.41141 12.9138 7.32119 11.99 7.49913 11.0989C7.67708 10.2079 8.1152 9.38962 8.75812 8.74754C9.40104 8.10545 10.2199 7.6684 11.1112 7.49162C12.0024 7.31483 12.9261 7.40627 13.7654 7.75435C14.6048 8.10243 15.322 8.69154 15.8266 9.44721C16.3312 10.2029 16.6004 11.0912 16.6002 11.9998C16.5986 13.2188 16.1132 14.3873 15.2507 15.2486C14.3882 16.11 13.2191 16.5938 12.0002 16.5938ZM12.0002 8.39981C11.2896 8.4008 10.5952 8.61235 10.0048 9.00776C9.41434 9.40316 8.95434 9.96467 8.68286 10.6214C8.41138 11.2781 8.34061 12.0005 8.47948 12.6974C8.61836 13.3943 8.96064 14.0344 9.46311 14.5369C9.96558 15.0393 10.6057 15.3816 11.3026 15.5205C11.9995 15.6594 12.7219 15.5886 13.3786 15.3171C14.0353 15.0456 14.5968 14.5856 14.9922 13.9952C15.3876 13.4048 15.5992 12.7104 15.6002 11.9998C15.6002 11.045 15.2209 10.1294 14.5457 9.45422C13.8706 8.77909 12.9549 8.39981 12.0002 8.39981Z" fill="white"/>
                    <path d="M17.2 7.90488C17.7937 7.90488 18.275 7.42359 18.275 6.82988C18.275 6.23618 17.7937 5.75488 17.2 5.75488C16.6063 5.75488 16.125 6.23618 16.125 6.82988C16.125 7.42359 16.6063 7.90488 17.2 7.90488Z" fill="white"/>
                  </svg>
                </IconButton>
                <IconButton
                  as="a"
                  href="https://m.facebook.com/drgmastering/"
                  color="secondary"
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  className="rounded-xl border-gray-50"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9898 1.59607C16.981 1.48909 15.9672 1.43702 14.9528 1.44007C11.5898 1.44007 9.4998 3.58207 9.4998 7.03007V9.37107H6.6748C6.5422 9.37107 6.41502 9.42375 6.32125 9.51751C6.22748 9.61128 6.1748 9.73846 6.1748 9.87107V13.7211C6.1748 13.8537 6.22748 13.9809 6.32125 14.0746C6.41502 14.1684 6.5422 14.2211 6.6748 14.2211H9.4998V21.9411C9.4998 22.0737 9.55248 22.2009 9.64625 22.2946C9.74002 22.3884 9.8672 22.4411 9.9998 22.4411H13.9778C14.1104 22.4411 14.2376 22.3884 14.3314 22.2946C14.4251 22.2009 14.4778 22.0737 14.4778 21.9411V14.2211H17.2938C17.4152 14.2211 17.5325 14.177 17.6237 14.097C17.715 14.0169 17.774 13.9064 17.7898 13.7861L18.2868 9.93607C18.2961 9.8655 18.2901 9.79377 18.2694 9.72568C18.2487 9.65758 18.2138 9.59469 18.1668 9.5412C18.1198 9.48772 18.062 9.44487 17.9972 9.41553C17.9323 9.38619 17.862 9.37103 17.7908 9.37107H14.4778V7.41207C14.4778 6.44207 14.6728 6.03707 15.8858 6.03707H17.9248C18.0574 6.03707 18.1846 5.98439 18.2784 5.89062C18.3721 5.79685 18.4248 5.66968 18.4248 5.53707V2.09207C18.4249 1.97068 18.3808 1.85341 18.3007 1.76214C18.2207 1.67088 18.1102 1.61185 17.9898 1.59607ZM17.4248 5.03607L15.8848 5.03707C13.7278 5.03707 13.4778 6.39307 13.4778 7.41207V9.87207C13.4778 10.0045 13.5303 10.1315 13.6239 10.2253C13.7174 10.319 13.8444 10.3718 13.9768 10.3721H17.2228L16.8538 13.2221H13.9778C13.8452 13.2221 13.718 13.2747 13.6243 13.3685C13.5305 13.4623 13.4778 13.5895 13.4778 13.7221V21.4401H10.4998V13.7221C10.4998 13.5895 10.4471 13.4623 10.3534 13.3685C10.2596 13.2747 10.1324 13.2221 9.9998 13.2221H7.1758V10.3721H9.9998C10.1324 10.3721 10.2596 10.3194 10.3534 10.2256C10.4471 10.1319 10.4998 10.0047 10.4998 9.87207V7.03007C10.4998 4.15607 12.1648 2.44007 14.9528 2.44007C15.9618 2.44007 16.8728 2.49507 17.4248 2.54307V5.03607Z" fill="white"/>
                  </svg>
                </IconButton>
              </div>
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
                onClick={() => setMobileMenuOpen(false)}
              >
                Studio
              </Link>
              <Link
                href="#services"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit text-gray-300 hover:text-white hover:font-semibold rounded-none hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#references"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit text-gray-300 hover:text-white hover:font-semibold rounded-none hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                References
              </Link>
              <Link
                href="#order"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit text-gray-300 hover:text-white hover:font-semibold rounded-none hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order
              </Link>
              <Link
                href="#contact"
                className="rounded-md px-3 py-2 text-base uppercase font-medium w-fit text-gray-300 hover:text-white hover:font-semibold rounded-none hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
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
