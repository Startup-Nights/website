import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Gif } from "./blocks/gif";
import { Hero } from "./blocks/hero";
import PartnerForm from "./blocks/partnerform";
import { Partners } from "./blocks/partners";
import { Positions } from "./blocks/positions";
import { Speakers } from "./blocks/speakers";
import { Team } from "./blocks/team";
import { About } from "./blocks/about";
import { Facts } from "./blocks/facts";
import { Impressions } from "./blocks/impressions";
import { Countdown } from "./blocks/countdown";
import { PartnerInfo } from "./blocks/partnerinfo";
import { FormatsOverview } from "./blocks/formatsoverview";
import { Tabs } from "./blocks/tabs";
import { Dropdown } from "./blocks/dropdown";
import { Benefits } from "./blocks/benefits";

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
                        case "PageBlocksGif":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Gif data={block} />
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
                        case "PageBlocksAbout":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <About data={block} />
                                </div>
                            )
                        case "PageBlocksFacts":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Facts data={block} />
                                </div>
                            )
                        case "PageBlocksImpressions":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Impressions data={block} />
                                </div>
                            )
                        case "PageBlocksCountdown":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Countdown data={block} />
                                </div>
                            )
                        case "PageBlocksPartnerinfo":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <PartnerInfo data={block} />
                                </div>
                            )
                        case "PageBlocksFormatsoverview":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <FormatsOverview data={block} />
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

                        default:
                            return null;
                    }
                })
                : null}
        </>
    );
};
