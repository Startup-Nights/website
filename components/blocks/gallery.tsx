import React, { useState } from "react";
import type { Template } from "tinacms";
import NextImage from "../items/nextimage";
import { PhotoAlbum } from "react-photo-album";

import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";

export const Gallery = ({ data }) => {
    const [index, setIndex] = useState(-1);

    return (
        <div className="bg-sn-black-light">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h3 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data?.subtitle}
                    </h3>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data?.title}
                    </h2>
                </div>

                <PhotoAlbum
                    layout="rows"
                    photos={photos}
                    renderPhoto={NextImage}
                    defaultContainerWidth={1200}
                    sizes={{ size: "calc(100vw - 240px)" }}
                    onClick={({ index }) => setIndex(index)}
                />

                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>
        </div>
    );
};

export const galleryBlockSchema: Template = {
    name: "gallery",
    label: "Gallery",
    fields: [
        {
            type: "string",
            label: "Subtitle",
            name: "subtitle",
        },
        {
            type: "string",
            label: "Title",
            name: "title",
        },
    ],
};

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const width = 1365;
const height = 2048;

const unsplashPhotos = [
    { id: "2023/haj0tyy5d23megdwv6gk", height: height, width: width },
    { id: "2023/xnvixmixjmwkwttxqddr", height: height, width: width },
    { id: "2023/jp2txtn6mhxaokpeczff", height: height, width: width },
    { id: "2023/jnceqyu24edprrzdu2nw", height: height, width: width },
    { id: "2023/dqh67ot5jhrya5zile2c", height: height, width: width },
    { id: "2023/gckexyj3sysawu2lan6a", height: height, width: width },
    { id: "2023/wxyznnrwo6ecocvjgwhx", height: height, width: width },

    { id: "2023/j7fwf7gcr0bqw4cokbzk", height: width, width: height },
    { id: "2023/o3hy4soge7mtgpqbuwfb", height: width, width: height },
    { id: "2023/ncodmyewevdsru6jjgwg", height: width, width: height },
    { id: "2023/wym0t4nsnalw0etqktwn", height: width, width: height },

    { id: "2023/l0sgoky9rse0yolupkqq", height: height, width: width },

    { id: "2023/vdkc5kshuwanp9iyjmtg", height: width, width: height },
    { id: "2023/ntbdiglqndhabqh7g3iy", height: width, width: height },
    { id: "2023/wrvtkxxfrfabhix1btv1", height: width, width: height },
    { id: "2023/yrdqb06lfsfvsxmmi1xv", height: width, width: height },
    { id: "2023/fph28wcdnil4yga1dws5", height: width, width: height },
    { id: "2023/rl1pwz4bdqjcy6nibdwz", height: width, width: height },
    { id: "2023/vwiznziyhuhotbl4vveq", height: width, width: height },
    { id: "2023/v6fngjoqmthucb00c2q9", height: width, width: height },
    { id: "2023/nx8t9dlafeogy8mzvuml", height: width, width: height },
    { id: "2023/wlo0vylug9jrffzwk6hr", height: width, width: height },
    { id: "2023/qxmyx6cwj674xlbmqfep", height: width, width: height },
    { id: "2023/gmfkfbxtrd8aqaj0mnfn", height: width, width: height },
    { id: "2023/v0tixdpu4qvc4yieqz3p", height: width, width: height },
    { id: "2023/sk6bupstuoclzpwf8c9y", height: width, width: height },
    { id: "2023/krtpwosvd3hkmky5f7nh", height: width, width: height },
    { id: "2023/syagiuavtjhnwz8c8vlb", height: width, width: height },
    { id: "2023/zoncueyvvllfnhgncbbw", height: width, width: height },
    { id: "2023/emxnmcbktsleoey6m9lr", height: width, width: height },
    { id: "2023/ieywowekwtnifzcb5eiz", height: width, width: height },
    { id: "2023/mqfzeinktqqjnnfbmt2w", height: width, width: height },
    { id: "2023/erpazdazikxtnge0plqg", height: width, width: height },
    { id: "2023/bvkwyiucyposncvjg9ye", height: width, width: height },
    { id: "2023/dhaa9z0dndzaj4kuhxwz", height: width, width: height },
    { id: "2023/fk1rnoqgotee3rxeemzk", height: width, width: height },
    { id: "2023/gdrhjtbioj1tyycjboqi", height: width, width: height },
    { id: "2023/ddztormtxgtdja2nkwpk", height: width, width: height },
    { id: "2023/tfvtw3dliahhxisqfaam", height: width, width: height },
    { id: "2023/vrfwcfhdvxueyvaclbch", height: width, width: height },
    { id: "2023/je7z0mziixk5igvmteh1", height: width, width: height },
    { id: "2023/nmj0dxmgxsiwuwtwkwkq", height: width, width: height },
    { id: "2023/yfeyrqqdlhmwlkdkxdmy", height: width, width: height },
];

const photos = unsplashPhotos.map((photo) => ({
    src: cloudinaryLoader({ width: photo.width, quality: 75, src: photo.id }),
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: cloudinaryLoader({ width: breakpoint, quality: 75, src: photo.id }),
            width: breakpoint,
            height,
        };
    }),
}));

function normalizeSrc(src) {
    return src[0] === "/" ? src.slice(1) : src;
}

// https://res.cloudinary.com/dal9ljm0y/image/upload/v1682959904/2022/impressions/oakzyzw4vkgvtsyvldjv.jpg
function cloudinaryLoader({ src, width, quality }) {
    const params = [
        "f_auto",
        "c_limit",
        "w_" + width,
        "q_" + (quality || "auto"),
    ];
    return `https://res.cloudinary.com/dal9ljm0y/image/upload/${params.join(
        ","
    )}/${normalizeSrc(src)}`;
}
