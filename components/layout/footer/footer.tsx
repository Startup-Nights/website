import { Container } from "../../util/container";
import { SocialIcon } from "../../items/social"
import { Section } from "../../util/section"
import Newsletter from "../../blocks/newsletter";
import Link from "next/link";

export const Footer = ({ data }) => {
    return (
        <footer className="bg-sn-black" aria-labelledby="footer-heading">
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

                        <div className="mt-10 xl:mt-0">
                            <Newsletter data={data} />
                        </div>
                    </div>

                    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
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
                </Container>
            </Section >

        </footer>
    )
}

