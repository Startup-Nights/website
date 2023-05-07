import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Hero } from "./blocks/hero";
import { Content } from "./blocks/content";
import { PartnerForm } from "./blocks/partnerform";
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

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function (block, i) {
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
                        case "PageBlocksPartnerform":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <PartnerForm data={block} />
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

                        default:
                            return null;
                    }
                })
                : null}
        </>
    );
};
