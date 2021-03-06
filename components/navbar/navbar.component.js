/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "#services", current: false },
  { name: "About Us", href: "#about-us", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      className="block sm:hidden h-8 w-auto "
                      src="/logo/mark_bond_consult1.png"
                      alt="Company Logo"
                    />
                    <img
                      className="block sm:hidden h-auto w-28 "
                      src="/logo/mark_bond_consult2.png"
                      alt="Company Logo"
                    />
                  </div>

                  <img
                    className="hidden sm:block h-8 w-auto"
                    src="./logo/mark_bond_consult1.png"
                    alt="Company Logo"
                  />
                </div>
                <div className=" mt-14 hidden sm:block sm:ml-6 bg-gray-800 rounded-md">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-500 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        style={{}}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <button className="px-4 py-1 text-lg font-bold bg-green-500 rounded-md">
                        Contact
                      </button>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    // item.current
                    router.pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-600 hover:bg-gray-500 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium "
                  )}
                  style={{ width: "fit-content" }}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
