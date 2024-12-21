import React from "react";

const Footer = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 border-custom-border bg-[#130f0a] text-gray-300">
      <div className="grid gap-8 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img
              src="TC_Logo.webp"
              alt="logo"
              className="h-13 w-14"
            />
            <span className="text-2xl font-bold tracking-wide text-[#f4cf8b]">
              Y U G S E T U
            </span>
          </a>
          <div className="mt-3 lg:max-w-xl">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              felis mi, faucibus dignissim lorem id, imperdiet interdum mauris.
              Vestibulum ultrices sed libero non porta. Vivamus malesuada urna
              eu nibh malesuada, non finibus massa laoreet. Nunc nisi velit,
              feugiat a semper quis, pulvinar id libero. Vivamus mi diam,
              consectetur non orci ut, tincidunt pretium justo. In vehicula
              porta molestie. Suspendisse potenti.
            </p>
          </div>
        </div>

        {/* Popular Courses & Topics */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base text-xl font-bold tracking-wide text-[#f4cf8b]">
            Title
          </p>
          <a href="#" className="hover:underline">
line1          </a>
          <a href="#" className="hover:underline">
line2          </a>
          <a href="#" className="hover:underline">
line3          </a>
          
        </div>

        {/* App Availability & Contact */}
        <div>
          <p className="text-base font-bold tracking-wide text-[#f4cf8b]">
            TECHVIBES IS ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="w-full">
              <img
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                className="h-10"
              />
            </a>
            <a
              className="w-full"
              href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
            >
              <img
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                className="h-10"
              />
            </a>
          </div>
          <p className="mt-6 text-base font-bold tracking-wide text-[#f4cf8b]">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1">Email:</p>
            <a
              href="mailto:admin@company.com"
              title="send email"
              className="hover:underline text-[#f4cf8b]"
            >
              admin@company.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col-reverse justify-between pt-2 pb-3 border-t border-gray-700 lg:flex-row">
        <p className="text-sm">© Copyright 2023 Yugsetu. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-[#f4cf8b]"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-[#f4cf8b]"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
