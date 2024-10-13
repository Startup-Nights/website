import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Hero } from "./blocks/hero";
import { Content } from "./blocks/content";
import { Partners } from "./blocks/partners";
import { Positions } from "./blocks/positions";
import { Speakers } from "./blocks/speakers";
import { Team } from "./blocks/team";
import { Countdown } from "./blocks/countdown";
import { Tabs } from "./blocks/tabs";
import { Dropdown } from "./blocks/dropdown";
import { Benefits } from "./blocks/benefits";
import { Gallery } from "./blocks/gallery";
import { Tito } from "./blocks/tito";
import { SEO } from "./blocks/seo";
import { PricingTable } from "./blocks/pricing";
import { Booth } from "./blocks/booth";
import { ContentWide } from "./blocks/content_wide";
import { Imagegrid } from "./blocks/imagegrid";
import { Pitching } from "./blocks/pitching";
import { Overview } from "./blocks/overview";
import { CookieTable } from "./blocks/cookieTable";
import { Program } from "./blocks/program";
import { BoothApproved } from "./blocks/booth_approved";
import { Crop } from "./blocks/crop";
import { Quotes } from "./blocks/quotes";
import Table from "./blocks/table";
import { Webinar } from "./blocks/webinar";
import { Voting } from "./blocks/voting";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function(block, i) {
                    switch (block.__typename) {
                        case "PageBlocksHero":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Hero data={block} />
                                </div>
                            );
                        case "PageBlocksPositions":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Positions data={block} parentField={`blocks.${i}`} />
                                </div>
                            );
                        case "PageBlocksSpeakers":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Speakers data={block} />
                                </div>
                            );
                        case "PageBlocksPartner_list":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Partners data={block} />
                                </div>
                            );
                        case "PageBlocksTeam":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Team data={block} />
                                </div>
                            );
                        case "PageBlocksCountdown":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Countdown data={block} />
                                </div>
                            )
                        case "PageBlocksTabs":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Tabs data={block} />
                                </div>
                            )
                        case "PageBlocksDropdown":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Dropdown data={block} />
                                </div>
                            )
                        case "PageBlocksBenefits":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Benefits data={block} />
                                </div>
                            )
                        case "PageBlocksGallery":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Gallery data={block} />
                                </div>
                            )
                        case "PageBlocksTito":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Tito data={block} />
                                </div>
                            )
                        case "PageBlocksSeo":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <SEO data={block} />
                                </div>
                            )
                        case "PageBlocksContent":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Content data={block} />
                                </div>
                            )
                        case "PageBlocksPricing":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <PricingTable data={block} />
                                </div>
                            )
                        case "PageBlocksBooth_registration":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Booth data={block} />
                                </div>
                            )
                        case "PageBlocksImagegrid":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Imagegrid data={block} />
                                </div>
                            )
                        case "PageBlocksContent_wide":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <ContentWide data={block} />
                                </div>
                            )
                        case "PageBlocksPitching_registration":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Pitching data={block} />
                                </div>
                            )
                        case "PageBlocksOverview":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Overview data={block} />
                                </div>
                            )
                        case "PageBlocksCookieTable":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <CookieTable data={block} />
                                </div>
                            )
                        case "PageBlocksProgram":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Program data={block} />
                                </div>
                            )
                        case "PageBlocksBooth_approved":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <BoothApproved data={block} />
                                </div>
                            )
                        case "PageBlocksCrop":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Crop data={block} />
                                </div>
                            )
                        case "PageBlocksQuotes":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Quotes data={block} />
                                </div>
                            )
                        case "PageBlocksTable":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Table data={block} />
                                </div>
                            )
                        case "PageBlocksWebinar":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Webinar data={block} />
                                </div>
                            )
                        case "PageBlocksVoting":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Voting data={block} />
                                </div>
                            )

                        default:
                            return null;
                    }
                })
                : null}
        </>
    );
};
