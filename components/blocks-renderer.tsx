import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Gif } from "./blocks/gif";
import { Hero } from "./blocks/hero";
import { Positions } from "./blocks/positions";
import { Testimonial } from "./blocks/testimonial";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function(block, i) {
                    switch (block.__typename) {
                        case "PageBlocksContent":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Content data={block} />
                                </div>
                            );
                        case "PageBlocksHero":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Hero data={block} />
                                </div>
                            );
                        case "PageBlocksTestimonial":
                            return (
                                <div
                                    data-tinafield={`blocks.${i}`}
                                    key={i + block.__typename}
                                >
                                    <Testimonial data={block} parentField={`blocks.${i}`} />
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
                        default:
                            return null;
                    }
                })
                : null}
        </>
    );
};
