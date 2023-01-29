import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";

export const Footer = ({ data }) => {
    const socialIconClasses = "h-7 w-auto";
    const socialIconColorClasses = "text-sky-600";

    return (
        <footer className={'bg-slate-800'}>
            <Container className="relative" size="small">
                <div className="flex justify-between items-center gap-6 flex-wrap">
                    <Link href="/" className="group mx-2 flex items-center font-bold tracking-tight text-gray-400 dark:text-gray-300 opacity-50 hover:opacity-100 transition duration-150 ease-out whitespace-nowrap">
                        <img className="h-8 sm:h-12 w-auto" src="/logo/startup-nights.png" />
                    </Link>
                    <div className="flex gap-4">
                        {data.social && data.social.facebook && (
                            <a
                                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                                href={data.social.facebook}
                                target="_blank"
                            >
                                <FaFacebookF
                                    className={`${socialIconClasses} ${socialIconColorClasses}`}
                                />
                            </a>
                        )}
                        {data.social && data.social.twitter && (
                            <a
                                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                                href={data.social.twitter}
                                target="_blank"
                            >
                                <FaTwitter
                                    className={`${socialIconClasses} ${socialIconColorClasses}`}
                                />
                            </a>
                        )}
                        {data.social && data.social.instagram && (
                            <a
                                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                                href={data.social.instagram}
                                target="_blank"
                            >
                                <AiFillInstagram
                                    className={`${socialIconClasses} ${socialIconColorClasses}`}
                                />
                            </a>
                        )}
                        {data.social && data.social.github && (
                            <a
                                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                                href={data.social.github}
                                target="_blank"
                            >
                                <FaGithub
                                    className={`${socialIconClasses} ${socialIconColorClasses}`}
                                />
                            </a>
                        )}
                    </div>
                </div>
                <div
                    className={`absolute h-1 bg-gradient-to-r from-transparent ${data.color === "primary" ? `via-white` : `via-black dark:via-white`
                        } to-transparent top-0 left-4 right-4 opacity-5`}
                ></div>
            </Container>
        </footer>
    );
};
