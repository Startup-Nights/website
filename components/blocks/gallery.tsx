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

const unsplashPhotos = [
    { id: "2022/impressions/bly3pvltlngu83cbg5fs", height: 2048, width: 1365 },
    { id: "2022/impressions/bggpujp7n3zif12zo6yp", width: 2048, height: 1365 },
    { id: "2022/impressions/vurwtq9ajjlesqjyugvy", width: 2048, height: 1365 },
    { id: "2022/impressions/cjixsn0asgxslqjgbmkq", height: 2048, width: 1365 },
    { id: "2022/impressions/ds0pvq4lbeqrnxdiadnt", height: 2048, width: 1365 },
    { id: "2022/impressions/olvl5lvtoxojkql17cqp", width: 2048, height: 1365 },
    { id: "2022/impressions/ikn8e9qsn8qgctouw9cr", width: 2048, height: 1365 },
    { id: "2022/impressions/p7ifbcvzjdqomlvagzdv", width: 2048, height: 1365 },
    { id: "2022/impressions/ynkz95g1iz9pq6an40gk", width: 2048, height: 1365 },
    { id: "2022/impressions/yfxkibeclrzbmfrx8idw", width: 2048, height: 1365 },
    { id: "2022/impressions/shoqluo2k1te9dz7opjv", height: 2048, width: 1365 },
    { id: "2022/impressions/geemgrn4wmor2czgmm1l", width: 2048, height: 1365 },
    { id: "2022/impressions/d2e6wefa8ejwc80flxl4", height: 2048, width: 1365 },
    { id: "2022/impressions/ynydpqldc7ovcos1t0n9", width: 2048, height: 1365 },
    { id: "2022/impressions/yzlxuqimamut9jxrz1ih", height: 2048, width: 1365 },
    { id: "2022/impressions/wowwhsfxpzshagculfna", height: 2048, width: 1365 },
    { id: "2022/impressions/yxkveekajpwlu6aqr5bx", width: 2048, height: 1365 },
    { id: "2022/impressions/yukwvrfmpxdxs4n6pkze", width: 2048, height: 1365 },
    { id: "2022/impressions/yvkac1jzfmybgvrteuba", width: 2048, height: 1365 },
    { id: "2022/impressions/hh7t4cyvkmhh6ggdoltc", height: 2048, width: 1365 },
    { id: "2022/impressions/yicevdwenbcrtcq1wx2y", height: 2048, width: 1365 },
    { id: "2022/impressions/ttaxwvdfyh0qttwyh9ou", width: 2048, height: 1365 },
    { id: "2022/impressions/b6qjesckevg0xfya2ifg", width: 2048, height: 1365 },
    { id: "2022/impressions/erqb9cchlebais2puvcm", height: 2048, width: 1365 },
    { id: "2022/impressions/orcebwevqgearzp6xdnj", width: 2048, height: 1365 },
    { id: "2022/impressions/lee2qa5g1pn4muudvh6k", width: 2048, height: 1365 },
    { id: "2022/impressions/vk4pzfexfgk0z8x78mrf", width: 2048, height: 1365 },
    { id: "2022/impressions/mwu0qjsu9dg6opesftph", width: 2048, height: 1365 },
    { id: "2022/impressions/k3cpx5drxwpbwsjfod4m", width: 2048, height: 1365 },
    { id: "2022/impressions/z4tz0kyjievn76x7ig60", width: 2048, height: 1365 },
    { id: "2022/impressions/n0dcrzi6tchug3yusfbe", width: 2048, height: 1365 },
    { id: "2022/impressions/bki1rpvfni9xs5wblbdg", width: 2048, height: 1365 },
    { id: "2022/impressions/cfu1axqbiozfa9nakfn0", width: 2048, height: 1365 },
    { id: "2022/impressions/o127ig2mcnqmfg2md7au", width: 2048, height: 1365 },
    { id: "2022/impressions/ereqjzqth2hd35l0j6gw", width: 2048, height: 1365 },
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
