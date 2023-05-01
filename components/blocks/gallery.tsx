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
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
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

const unsplashPhotos = [
    { id: "2022/impressions/oakzyzw4vkgvtsyvldjv", width: 2048, height: 1368 },
    { id: "2022/impressions/dujuqbrg8yxxixdjnqut", width: 2048, height: 1368 },
    { id: "2022/impressions/payahndptxc8yieykfzr", width: 2048, height: 1368 },
    { id: "2022/impressions/fnwr3kvobu6iv7kiyeru", width: 2048, height: 1368 },
    { id: "2022/impressions/usiuvdp102yxswdz83u6", width: 2048, height: 1368 },
    { id: "2022/impressions/i7chwmvls09yj1hami5m", width: 1368, height: 2048 },
    { id: "2022/impressions/sxzuru2owxg6dlxgxtvw", width: 2048, height: 1368 },
    { id: "2022/impressions/idihsc0miofal8vk0np3", width: 2048, height: 1368 },
    { id: "2022/impressions/sp9lm4wnhxyi1kcsx3r4", width: 1368, height: 2048 },
    { id: "2022/impressions/cutnpogcpprcrfolm4lh", width: 2048, height: 1368 },
    { id: "2022/impressions/nyxsp60kwtiys8m8u6sm", width: 1365, height: 2048 },
    { id: "2022/impressions/iffdrcqa8kfxczgiw244", width: 2048, height: 1151 },
    { id: "2022/impressions/lel8nnjzasfzys6oi7ha", width: 2048, height: 1365 },
    { id: "2022/impressions/da6pe89lom938pj53p3w", width: 2048, height: 1365 },
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
    return src[0] === '/' ? src.slice(1) : src
}

// https://res.cloudinary.com/dal9ljm0y/image/upload/v1682959904/2022/impressions/oakzyzw4vkgvtsyvldjv.jpg
function cloudinaryLoader({ src, width, quality }) {
    const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
    return `https://res.cloudinary.com/dal9ljm0y/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}
