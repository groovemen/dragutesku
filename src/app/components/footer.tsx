"use client";
import { Typography, IconButton } from "@material-tailwind/react";
import { Facebook, Instagram, WhatsApp, Dribbble } from "iconoir-react";
import Image from "next/image";

const LINKS = [
  {
    items: [
      {
        title: "HOME",
        href: "/#home",
      },
      {
        title: "STUDIO",
        href: "/#studio",
      },
      {
        title: "REFERENCES",
        href: "/#references",
      },
      {
        title: "SERVICES",
        href: "/#services",
      },
      {
        title: "ORDER",
        href: "/#order",
      },
    ],
  },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full py-8">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex">
          <div className="pr-24">
            <Image
              className="h-12 w-auto mb-4"
              width={100}
              height={100}
              src="/logo.png"
              alt="DrgMastering Logo"
            />
            <Typography
              className="max-w-lg"
            >
              Ready to transform your music? contact DRG MASTERING today!
              Whether you're seeking a free consultation or want to discuss your
              next project, we're prepared to assist you in creating your best
              music.
            </Typography>
          </div>
          <div className="grid justify-between">
            <div className="grid justify-between gap-x-6 gap-y-6">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  {items.map(({ title, href }) => (
                    <li key={title} className="py-2">
                      <Typography
                        as="a"
                        href={href}
                        className="uppercase hover:font-semibold"
                      >
                        {title}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div>
            <div className="flex gap-4 mb-4">
              <img className="w-24" src="/eq-small.png" alt="EQ" />
              <Typography className="uppercase" type="h5">Contact</Typography>
            </div>
            <Typography className="flex gap-2 my-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H3C1.9 20 1 19.1 1 18V6C1 4.9 1.9 4 3 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 6L11 13L1 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              drgmastering@gmail.com
            </Typography>
            <Typography className="flex gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10C20 17 11 23 11 23C11 23 2 17 2 10C2 7.61305 2.94821 5.32387 4.63604 3.63604C6.32387 1.94821 8.61305 1 11 1C13.3869 1 15.6761 1.94821 17.364 3.63604C19.0518 5.32387 20 7.61305 20 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 13C12.6569 13 14 11.6569 14 10C14 8.34315 12.6569 7 11 7C9.34315 7 8 8.34315 8 10C8 11.6569 9.34315 13 11 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Bucharest, Romania
            </Typography>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 border-t border-surface py-4 md:flex-row md:justify-between">
          <Typography type="small" className="text-center">
            &copy; {YEAR} MUSIC MIX MASTERS SRL
          </Typography>
          <div className="flex gap-1 sm:justify-center">
            <IconButton
              as="a"
              href="#"
              color="white"
              variant="ghost"
              size="sm"
            >
              {/* <WhatsApp className="h-4 w-4" /> */}
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="white"
              variant="ghost"
              size="sm"
            >
              <Facebook className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="white"
              variant="ghost"
              size="sm"
            >
              <Instagram className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
