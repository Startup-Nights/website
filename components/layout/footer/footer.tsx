import { Container } from "../../util/container";
import { SocialIcon } from "../../items/social"
import { Section } from "../../util/section"

export const Footer = ({ data }) => {
    return (
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <Section>
                <Container>
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="grid grid-flow-row-dense grid-cols-3 gap-8 xl:col-span-2">
                            {data.navitems && data.navitems.map((navitem, i) => (
                                <div key={`${navitem.title}-${i}`} className="md:grid md:grid-cols-2 md:gap-8 col-span-1">
                                    <div key={navitem.title}>
                                        <h3 className="text-sm font-semibold leading-6 text-white">{navitem.title}</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            {navitem.listitems.map((item) => (
                                                <li key={item.title}>
                                                    <a href={item.link} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className="mt-10 xl:mt-0">
                            <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-300">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </p>
                            <form className="mt-6 sm:flex sm:max-w-md">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    required
                                    className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                    placeholder="Enter your email"
                                />
                                <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md bg-sky-500 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:text-sm sm:leading-6"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                        <div className="flex space-x-6 md:order-2">
                            {data.social && data.social.map(item => (
                                <a key={item.title} href={item.link} target='_blank' className="text-gray-500 hover:text-gray-400">
                                    <span className="sr-only">{item.title}</span>
                                    <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                            &copy; {data.copyright}
                        </p>
                    </div>
                </Container>
            </Section >

        </footer>
    )
}

