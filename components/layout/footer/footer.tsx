import { SocialIcon } from "../../items/social"
import Newsletter from "../../blocks/newsletter";
import Link from "next/link";
import { Banner } from "../../items/banner";
import { useState } from "react";

export const Footer = ({ data }) => {
    const [open, setOpen] = useState(true);

    return (
        <footer className="bg-sn-black relative" aria-labelledby="footer-heading">
            <div className="max-w-7xl mx-auto pt-12 pb-8 px-8 lg:px-24">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-flow-row-dense grid-cols-2 gap-8 xl:col-span-2">
                        {data.navitems && data.navitems.map((navitem, i) => (
                            <div key={`${navitem.title}-${i}`} className="md:grid md:grid-cols-2 md:gap-8 col-span-1">
                                <div key={navitem.title}>
                                    <h3 className="text-sm font-semibold leading-6 text-white">{navitem.title}</h3>
                                    <ul role="list" className="mt-6 space-y-3">
                                        {navitem.listitems.map((item) => (
                                            <li key={item.title}>
                                                <Link href={item.link} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div id="newsletter" className="mt-10 xl:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-300">
                            Sign up for the latest news, speaker announcements and discounts.
                        </p>
                        <Newsletter data={data} />
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {data.social && data.social.map(item => (
                            <Link key={item.title} href={item.link} target='_blank' rel="noreferrer" className="text-gray-500 hover:text-gray-400">
                                <span className="sr-only">{item.title}</span>
                                <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                    <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                        &copy; {data.copyright}
                    </p>
                </div>
            </div>

            {data.banner && open && (
                <>
                    <div className="h-16 lg:h-10"></div>
                    <Banner setOpen={setOpen} data={data.banner} />
                </>
            )}
        </footer>
    )
}

