import { Disclosure } from "@headlessui/react";
import { BiChevronUpCircle } from "react-icons/bi";

export default function FrequentlyAsked() {
  return (
    <div className="w-full px-4 py-14">
      <h1 class="text-2xl font-semibold text-center lg:text-3xl">
        Frequently asked questions
      </h1>
      <div className="flex justify-center mx-auto mt-2 mb-6">
          <span className="inline-block w-48 h-1 bg-amber-300 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-amber-100 rounded-full"></span>
        </div>
      <div className="mx-auto w-full rounded-2xl bg-base-100 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
