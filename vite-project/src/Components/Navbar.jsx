"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "Products",
      name: "Products",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://th.bing.com/th/id/OIP.FTBQW-3HqoLQnNjDsZSpLgAAAA?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          imageAlt: "Close up of Basic Tee fall bundle.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://th.bing.com/th/id/OIP.FTBQW-3HqoLQnNjDsZSpLgAAAA?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          imageAlt: "Close up of Basic Tee fall bundle.",
        },
      ],
      sections: [
        {
          id: "Our-products",
          name: "Our Products",
          items: [
            { name: "Tablets", href: "/products#tablets" },
            { name: "Capsules", href: "/products#capsules" },
            { name: "Syrups", href: "/products#syrups" },
            { name: "Injections", href: "/products#injections" },
            { name: "Soft Gel Capsules", href: "/products#soft-gel-capsules" },
            { name: "Dry Syrup", href: "/products#dry-syrup" },
          ],
        },
        {
          id: "other-products",
          name: "Other Products",
          items: [
            { name: "Ointment", href: "/products#ointment" },
            { name: "Powder", href: "/products#powder" },
            { name: "Herbal Products", href: "/products#herbal-products" },
            { name: "Paediatric Range", href: "/products#paediatric-range" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "About-Us", href: "/about" },
    { name: "Contact-Us", href: "/contact" },
  ],
};

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-800">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-100 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-gray-900 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-700">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium text-white hover:text-white data-selected:border-indigo-500 data-selected:text-indigo-400"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-700 object-cover group-hover:opacity-75"
                          />
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-white hover:text-white"
                          >
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1 text-gray-400">Shop now</p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p className="font-medium text-white">
                          {section.name}
                        </p>
                        <ul className="mt-6 flex flex-col space-y-6">
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-white hover:text-white"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-700 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-white hover:text-white"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-gray-800 z-50">
        <p className="flex h-10 items-center justify-center bg-gray-900 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Contact us on alardiushealthcare@gmail.com || 9996625922
        </p>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-700">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-gray-700 p-2 text-gray-400 hover:text-white lg:hidden"
              >
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              <div className="ml-4 flex lg:ml-0">
                <a href="/" className="flex items-center text-sm font-medium text-white hover:text-white">
                  Home
                </a>
              </div>

              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-white hover:text-white data-open:border-indigo-500 data-open:text-indigo-400">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel transition className="absolute inset-x-0 top-full text-sm text-white transition">
                        <div className="relative bg-gray-900 text-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-700 object-cover group-hover:opacity-75"
                                    />
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-white hover:text-white"
                                    >
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1 text-gray-400">Shop now</p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p className="font-medium text-white">
                                      {section.name}
                                    </p>
                                    <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="text-white hover:text-white"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-white hover:text-white"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
