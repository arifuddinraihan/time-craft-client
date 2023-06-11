import { Disclosure } from "@headlessui/react";
import { BiChevronUpCircle } from "react-icons/bi";

export default function FrequentlyAsked() {
  return (
    <div className="w-full px-4 py-14">
      <h1 class="text-2xl font-semibold text-center lg:text-3xl">
        Frequently asked questions
      </h1>
      <div className="flex justify-center mx-auto mt-6 mb-6">
        <span className="inline-block w-48 h-1 bg-amber-300 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-amber-100 rounded-full"></span>
      </div>
      <div className="mx-auto w-full rounded-2xl bg-base-100 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Are all the watches on your website pre-owned?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                Yes, we specialize in selling pre-owned watches. Our collection
                consists of carefully curated timepieces from various reputable
                brands.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What condition are the pre-owned watches in?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                We take great care in evaluating and refurbishing each watch
                before listing it for sale. Our team of experts thoroughly
                inspects and restores the watches to ensure they are in
                excellent condition, both aesthetically and functionally.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Are the pre-owned watches authentic?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                Absolutely! We guarantee the authenticity of every watch we
                sell. We source our timepieces from reputable suppliers and
                conduct stringent authentication procedures to ensure you
                receive a genuine product.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Do the watches come with any warranty?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
                Yes, we offer a warranty on our pre-owned watches. The duration
                of the warranty may vary depending on the watch's brand, model,
                and age. Please refer to the individual product listing for
                specific warranty information.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>How can I pay for my purchase?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
              We offer only Stipe based secure payment options for your convenience. You can make your payment using STRIPE credit cards, debit cards, or through STRIPE online payment platforms. We prioritize the security of your personal and financial information.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your return policy?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
              We want you to be completely satisfied with your purchase. If, for any reason, you are not happy with your pre-owned watch, we offer a hassle-free return policy. Please review our return policy for detailed instructions and any applicable conditions.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between justify-items-center rounded-lg px-4 py-2 text-left :text-sm md:text-xl font-medium bg-gradient-to-r from-warning to-primary text-accent focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Can I trade in or sell my own pre-owned watch?</span>
                <BiChevronUpCircle
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg">
              Yes, you can register as seller from our SELLER COMMUNITY and can list your pre-owned watches for sell.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
