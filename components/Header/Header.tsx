import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-sm brightness-110 opacity-90 bg-[#2a2f35] fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-5 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">
                  <img
                    className="cursor-pointer h-16 w-auto pr-2 pl-2"
                    src="/logo.png"
                    alt="logo"
                  />
                </Link>
                <Link href="/">
                  <h1 className="font-ubuntu font-bold text-[#6F7E8F]"></h1>
                </Link>
              </div>
              <div className="md:block">
                <div className="ml-5 flex items-center space-x-4">
                  <Link href="/">
                    <a className="notapcolor">
                      <h1 className="cursor-pointer text-[#6F7E8F] sm:px-0 px-1 py-2 rounded-2xl text-sm">
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="scene">
                            <g id="home">
                              <path id="primary" fill-rule="evenodd" clip-rule="evenodd" d="M10 19.3361C10 18.4856 10.361 17.6751 10.9931 17.1062L17.9931 10.8062C19.134 9.7794 20.866 9.7794 22.0069 10.8062L29.0069 17.1062C29.639 17.6751 30 18.4856 30 19.3361V27C30 28.6569 28.6569 30 27 30H24L23.9944 30H16.0056L16 30H13C11.3431 30 10 28.6569 10 27V19.3361Z" fill="#6F7E8F" />
                              <path id="secondary" d="M17 24C17 22.8954 17.8954 22 19 22H21C22.1046 22 23 22.8954 23 24V30H17V24Z" fill="#3E454D" />
                            </g>
                          </g>
                        </svg>
                      </h1>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="notapcolor">
                      <h1 className="cursor-pointer text-[#6F7E8F] sm:px-0 px-1 py-2 rounded-2xl text-sm">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Frame 1">
                            <g id="person">
                              <circle id="primary" cx="30" cy="25" r="5" fill="#6F7E8F" />
                              <path id="secondary" d="M21 37V38C21 39.1046 21.8954 40 23 40H37C38.1046 40 39 39.1046 39 38V37C39 34.2386 36.7614 32 34 32H26C23.2386 32 21 34.2386 21 37Z" fill="#667382" />
                            </g>
                          </g>
                        </svg>
                      </h1>
                    </a>
                  </Link>
                  <Link href="https://github.com/advwastaken/arush.nextjs">
                    <a className="notapcolor">
                      <h1 className="cursor-pointer text-[#6F7E8F] sm:pl-0 pl-1 pr-2 py-2 rounded-full text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </h1>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
