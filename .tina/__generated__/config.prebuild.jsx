// .tina/config.tsx
import { defineStaticConfig } from "tinacms";

// components/blocks/speakers.tsx
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
var speakersBlockSchema = {
  name: "speakers",
  label: "Speakers",
  ui: {
    defaultItem: {
      speakers_title: "Speakers at Startup Nights",
      speakers: [
        {
          name: "some random dude",
          position: "some position",
          social_links: {
            linkdin: ""
          },
          image: {
            src: "/media/ambient.jpg",
            alt: "some alt text"
          }
        }
      ]
    }
  },
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      label: "Call to action",
      name: "cta",
      type: "object",
      fields: [
        {
          label: "Link",
          name: "link",
          type: "string"
        },
        {
          label: "Text",
          name: "text",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      label: "Speakers",
      name: "speakers",
      list: true,
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name"
        },
        {
          type: "string",
          label: "Position",
          name: "position"
        },
        {
          type: "rich-text",
          label: "Description",
          name: "description"
        },
        {
          type: "object",
          label: "Social links",
          name: "social_links",
          fields: [
            {
              type: "string",
              label: "LinkedIn",
              name: "linkedin"
            }
          ]
        },
        {
          type: "object",
          label: "Image",
          name: "image",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image"
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
};

// components/blocks/positions.tsx
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
var positionsBlockSchema = {
  name: "positions",
  label: "Positions",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      open_positions: [
        {
          title: "Head of Branding and Design",
          description: "Dieser Job ist verantwortlich f\xFCr xxx.",
          qualifications: ["kann zeichen"],
          tasks: ["logo entwerfen"],
          link: "https://startup-nights.ch"
        }
      ]
    }
  },
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "object",
      label: "Open positions",
      name: "open_positions",
      list: true,
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "rich-text",
          label: "Text",
          name: "text"
        },
        {
          type: "string",
          label: "Department",
          name: "department"
        },
        {
          type: "string",
          label: "Link",
          name: "link"
        }
      ]
    }
  ]
};

// components/blocks/hero.tsx
import Image2 from "next/image";

// components/items/button.tsx
import Link2 from "next/link";

// components/blocks/hero.tsx
var heroBlockSchema = {
  name: "hero",
  label: "Hero",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      label: "Call to action",
      name: "cta",
      type: "object",
      fields: [
        {
          label: "Link",
          name: "link",
          type: "string"
        },
        {
          label: "Text",
          name: "text",
          type: "string"
        },
        {
          type: "boolean",
          label: "Open in new tab",
          name: "new_tab"
        }
      ]
    },
    {
      label: "Call to action (secondary)",
      name: "cta_secondary",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Link",
          name: "link"
        },
        {
          type: "string",
          label: "Text",
          name: "text"
        },
        {
          type: "boolean",
          label: "Open in new tab",
          name: "new_tab"
        },
        {
          type: "boolean",
          label: "Without background",
          name: "without_background"
        }
      ]
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      label: "Background video",
      name: "video",
      fields: [
        {
          name: "src",
          label: "Video source",
          type: "image"
        },
        {
          name: "fallback",
          label: "Fallback image",
          type: "image"
        }
      ]
    }
  ]
};

// components/blocks/partnerform.tsx
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState as useState2 } from "react";
import { ChatBubbleLeftRightIcon, CheckBadgeIcon, Cog6ToothIcon, HeartIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline";
var partnerFormSchema = {
  name: "partnerform",
  label: "Partnerform",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "string",
      label: "Description",
      name: "description"
    }
  ]
};

// components/blocks/team.tsx
import Image3 from "next/image";
import Link3 from "next/link";
import { ArrowTopRightOnSquareIcon as ArrowTopRightOnSquareIcon2 } from "@heroicons/react/24/outline";
var teamBlockSchema = {
  name: "team",
  label: "Team",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      label: "Divisions",
      name: "divisions",
      type: "object",
      list: true,
      fields: [
        {
          type: "string",
          label: "Subtitle",
          required: true,
          name: "subtitle"
        },
        {
          type: "string",
          label: "Title",
          required: true,
          name: "title"
        },
        {
          label: "Members",
          name: "members",
          type: "object",
          list: true,
          fields: [
            {
              label: "Name",
              name: "name",
              type: "string"
            },
            {
              label: "Position",
              name: "position",
              type: "string"
            },
            {
              label: "LinkedIn",
              name: "linkedin",
              type: "string"
            },
            {
              name: "src",
              label: "Image Source",
              type: "image"
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
};

// components/blocks/partners.tsx
import * as React2 from "react";
import Image4 from "next/image";
import Link4 from "next/link";
var partnersBlockSchema = {
  name: "partner_list",
  label: "Partners",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      label: "Call to action",
      name: "cta",
      type: "object",
      fields: [
        {
          label: "Link",
          name: "link",
          type: "string"
        },
        {
          label: "Text",
          name: "text",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      label: "Partners",
      name: "partners",
      list: true,
      fields: [
        {
          type: "string",
          label: "Category title",
          name: "title"
        },
        {
          type: "number",
          label: "Number of partners per line",
          name: "grid_cols"
        },
        {
          type: "object",
          label: "Partners",
          name: "partners",
          list: true,
          fields: [
            {
              type: "image",
              label: "Image Source",
              name: "src"
            },
            {
              type: "string",
              label: "Alt Text",
              name: "alt"
            },
            {
              type: "string",
              name: "link",
              label: "Partner website"
            }
          ]
        }
      ]
    }
  ]
};

// components/blocks/countdown.tsx
import Link5 from "next/link";
import React3, { useEffect as useEffect2, useState as useState3 } from "react";
var countdownBlockSchema = {
  name: "countdown",
  label: "Countdown",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "string",
      label: "Date",
      name: "date"
    },
    {
      label: "Call to action",
      name: "cta",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Link",
          name: "link"
        },
        {
          type: "string",
          label: "Text",
          name: "text"
        }
      ]
    }
  ]
};

// components/blocks/tabs.tsx
import { Tab } from "@headlessui/react";

// components/items/contentblock.tsx
var ContentBlockSchema = {
  label: "Content block",
  name: "content_block",
  type: "object",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "string",
      label: "Content",
      list: true,
      name: "content"
    },
    {
      label: "Call to action",
      name: "cta",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Link",
          name: "link"
        },
        {
          type: "string",
          label: "Text",
          name: "text"
        }
      ]
    },
    {
      label: "Call to action (secondary)",
      name: "cta_secondary",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Link",
          name: "link"
        },
        {
          type: "string",
          label: "Text",
          name: "text"
        }
      ]
    }
  ]
};

// components/items/infopoints.tsx
import Link6 from "next/link";

// components/items/modal.tsx
import { Dialog, Transition as Transition2 } from "@headlessui/react";
import { Fragment as Fragment2 } from "react";

// components/blocks/newsletter.tsx
import { useRef, useState as useState4, Fragment as Fragment3 } from "react";
import { Transition as Transition3 } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIcon2 } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon as ExclamationCircleIcon2, XMarkIcon as XMarkIcon2 } from "@heroicons/react/20/solid";

// components/items/infopoints.tsx
import { useState as useState5 } from "react";
var InfopointsBlockSchema = {
  type: "object",
  label: "Infopoints",
  name: "infopoints",
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name"
    },
    {
      type: "string",
      label: "Text",
      name: "text"
    },
    {
      type: "string",
      label: "Link",
      name: "link"
    },
    {
      type: "object",
      label: "Newsletter CTA (temporary)",
      name: "newsletter_cta",
      fields: [
        {
          type: "string",
          label: "Signup button text",
          name: "agree_button"
        },
        {
          type: "string",
          label: "Modal title",
          name: "modal_title"
        },
        {
          type: "string",
          label: "Modal text",
          name: "modal_text"
        }
      ]
    }
  ]
};

// components/items/image.tsx
import Image5 from "next/image";
var RoundImageBlockschema = {
  type: "object",
  label: "Image",
  name: "image",
  fields: [
    {
      name: "src",
      label: "Image Source",
      type: "image"
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string"
    }
  ]
};

// components/blocks/tabs.tsx
var tabsBlockSchema = {
  name: "tabs",
  label: "Tabs",
  fields: [
    {
      label: "Tabitems",
      name: "tabitems",
      type: "object",
      list: true,
      fields: [
        ContentBlockSchema,
        RoundImageBlockschema,
        InfopointsBlockSchema
      ]
    }
  ]
};

// components/blocks/dropdown.tsx
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

// components/items/features.tsx
import { RocketLaunchIcon, ChatBubbleLeftRightIcon as ChatBubbleLeftRightIcon2, CheckBadgeIcon as CheckBadgeIcon2, HeartIcon as HeartIcon2, LightBulbIcon as LightBulbIcon2, UserGroupIcon as UserGroupIcon2 } from "@heroicons/react/24/outline";
var FeaturesBlockSchema = {
  type: "object",
  label: "Features",
  name: "features",
  list: true,
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "string",
      label: "Text",
      name: "text"
    },
    {
      type: "string",
      label: "Icon",
      name: "icon"
    }
  ]
};

// components/blocks/dropdown.tsx
var dropdownBlockSchema = {
  name: "Dropdown",
  label: "Dropdown",
  fields: [
    {
      label: "Items",
      name: "items",
      type: "object",
      list: true,
      fields: [
        ContentBlockSchema,
        RoundImageBlockschema,
        InfopointsBlockSchema,
        FeaturesBlockSchema
      ]
    },
    {
      label: "Padding top",
      name: "padding",
      type: "boolean"
    }
  ]
};

// components/blocks/benefits.tsx
import { Cog6ToothIcon as Cog6ToothIcon2, ChatBubbleLeftRightIcon as ChatBubbleLeftRightIcon3, CheckBadgeIcon as CheckBadgeIcon3, HeartIcon as HeartIcon3, LightBulbIcon as LightBulbIcon3, UserGroupIcon as UserGroupIcon3 } from "@heroicons/react/24/outline";
import React4 from "react";
var benefitsBlockSchema = {
  name: "benefits",
  label: "Benefits",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "object",
      label: "Benefit items",
      name: "benefit_items",
      list: true,
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "string",
          label: "Icon",
          name: "icon"
        }
      ]
    }
  ]
};

// components/blocks/overview.tsx
import React6 from "react";

// components/fields/color.tsx
import * as React5 from "react";
import { wrapFieldsWithMeta } from "tinacms";
var colorOptions = [
  "black",
  "black_light",
  "black_lightest"
];
var ColorPickerInput = wrapFieldsWithMeta(({ input }) => {
  const inputClasses = {
    black: "bg-sn-black",
    black_light: "bg-sn-black-light",
    black_lightest: "bg-sn-black-lightest"
  };
  return React5.createElement(React5.Fragment, null, React5.createElement("input", { type: "text", id: input.name, className: "hidden", ...input }), React5.createElement("div", { className: "flex gap-2 flex-wrap" }, colorOptions.map((color) => {
    return React5.createElement(
      "button",
      {
        key: color,
        className: `w-9 h-9 rounded-full shadow border ${inputClasses[color]} ${input.value === inputClasses[color] ? "ring-[3px] ring-offset-2 ring-blue-400" : ""}`,
        onClick: () => {
          input.onChange(inputClasses[color]);
        }
      }
    );
  })));
});

// components/blocks/overview.tsx
import { ChatBubbleLeftRightIcon as ChatBubbleLeftRightIcon4, CheckBadgeIcon as CheckBadgeIcon4, Cog6ToothIcon as Cog6ToothIcon3, HeartIcon as HeartIcon4, LightBulbIcon as LightBulbIcon4, UserGroupIcon as UserGroupIcon4 } from "@heroicons/react/24/outline";
var overviewBlockSchema = {
  name: "overview",
  label: "Overview",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "object",
      label: "Benefit items",
      name: "benefit_items",
      list: true,
      fields: [
        {
          type: "string",
          label: "Icon",
          name: "icon"
        },
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          list: true
        }
      ]
    },
    {
      type: "string",
      name: "background_color",
      label: "Background color",
      ui: {
        component: ColorPickerInput
      }
    }
  ]
};

// components/blocks/gallery.tsx
import React7, { useState as useState6 } from "react";

// components/items/nextimage.tsx
import Image6 from "next/image";

// components/blocks/gallery.tsx
import { PhotoAlbum } from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
var galleryBlockSchema = {
  name: "gallery",
  label: "Gallery",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    }
  ]
};
var breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
var unsplashPhotos = [
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
  { id: "2022/impressions/ereqjzqth2hd35l0j6gw", width: 2048, height: 1365 }
];
var photos = unsplashPhotos.map((photo) => ({
  src: cloudinaryLoader({ width: photo.width, quality: 75, src: photo.id }),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round(photo.height / photo.width * breakpoint);
    return {
      src: cloudinaryLoader({ width: breakpoint, quality: 75, src: photo.id }),
      width: breakpoint,
      height
    };
  })
}));
function normalizeSrc(src) {
  return src[0] === "/" ? src.slice(1) : src;
}
function cloudinaryLoader({ src, width, quality }) {
  const params = [
    "f_auto",
    "c_limit",
    "w_" + width,
    "q_" + (quality || "auto")
  ];
  return `https://res.cloudinary.com/dal9ljm0y/image/upload/${params.join(
    ","
  )}/${normalizeSrc(src)}`;
}

// components/blocks/tito.tsx
import React8, { useEffect as useEffect3, useState as useState7 } from "react";
import Head from "next/head";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link7 from "next/link";
var titoBlockSchema = {
  name: "tito",
  label: "Tito",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "object",
      label: "Note",
      name: "note",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "string",
          label: "Text",
          name: "text"
        }
      ]
    }
  ]
};

// components/blocks/seo.tsx
import { DefaultSeo } from "next-seo";
var seoBlockSchema = {
  name: "seo",
  label: "SEO Configuration",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "object",
      name: "openGraph",
      label: "Open Graph Settings",
      fields: [
        {
          type: "string",
          name: "url",
          label: "URL"
        },
        {
          type: "string",
          name: "site_name",
          label: "Sitename"
        },
        {
          type: "object",
          list: true,
          name: "images",
          label: "Images",
          fields: [
            {
              type: "image",
              name: "url",
              label: "Image URL"
            },
            {
              type: "string",
              name: "alt",
              label: "Alt Text"
            }
          ]
        }
      ]
    }
  ]
};

// components/blocks/content.tsx
import React9 from "react";

// components/items/testimonial.tsx
import Image7 from "next/image";
var TestimonialBlockSchema = {
  type: "object",
  label: "Testimonial",
  name: "testimonial",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name"
    },
    {
      type: "string",
      label: "position",
      name: "position"
    },
    {
      type: "string",
      label: "quote",
      name: "quote"
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string"
        }
      ]
    }
  ]
};

// components/items/facts.tsx
import { RocketLaunchIcon as RocketLaunchIcon2, ChatBubbleLeftRightIcon as ChatBubbleLeftRightIcon5, CheckBadgeIcon as CheckBadgeIcon5, HeartIcon as HeartIcon5, LightBulbIcon as LightBulbIcon5, UserGroupIcon as UserGroupIcon5 } from "@heroicons/react/24/outline";
var FactsBlockSchema = {
  type: "object",
  label: "Figures",
  name: "figures",
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name"
    },
    {
      type: "string",
      label: "Number",
      name: "number"
    },
    {
      type: "string",
      label: "Icon",
      name: "icon"
    },
    {
      type: "string",
      label: "Row-span",
      name: "rows"
    },
    {
      type: "string",
      label: "Col-span",
      name: "cols"
    }
  ]
};

// components/items/members.tsx
import Image8 from "next/image";
var MembersBlockSchema = {
  type: "object",
  label: "Members",
  name: "members",
  list: true,
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string"
    },
    {
      label: "Position",
      name: "position",
      type: "string"
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      type: "string"
    },
    {
      name: "src",
      label: "Image Source",
      type: "image"
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string"
    },
    {
      name: "stage",
      label: "Stage",
      type: "string"
    }
  ]
};

// components/blocks/content.tsx
var contentBlockSchema = {
  name: "content",
  label: "Content",
  fields: [
    ContentBlockSchema,
    RoundImageBlockschema,
    InfopointsBlockSchema,
    TestimonialBlockSchema,
    FactsBlockSchema,
    MembersBlockSchema,
    FeaturesBlockSchema,
    {
      type: "boolean",
      name: "contentblock_left",
      label: "Contentblock on left side"
    },
    {
      type: "string",
      name: "background_color",
      label: "Background color",
      ui: {
        component: ColorPickerInput
      }
    }
  ]
};

// components/blocks/content_wide.tsx
import React10 from "react";
var contentWideBlockSchema = {
  name: "content_wide",
  label: "Content wide",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "object",
      label: "Content",
      name: "content",
      list: true,
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "string",
          label: "Text",
          list: true,
          name: "text"
        }
      ]
    },
    {
      type: "string",
      name: "background_color",
      label: "Background color",
      ui: {
        component: ColorPickerInput
      }
    },
    {
      label: "Call to action",
      name: "cta",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Link",
          name: "link"
        },
        {
          type: "string",
          label: "Text",
          name: "text"
        }
      ]
    },
    {
      label: "Call to action (secondary)",
      name: "cta_secondary",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Link",
          name: "link"
        },
        {
          type: "string",
          label: "Text",
          name: "text"
        }
      ]
    }
  ]
};

// components/blocks/pricing.tsx
import { CheckIcon, XMarkIcon as XMarkIcon3 } from "@heroicons/react/20/solid";
import Link8 from "next/link";
var pricingBlockSchema = {
  name: "pricing",
  label: "Pricing table",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "object",
      label: "Categories",
      name: "categories",
      list: true,
      fields: [
        {
          type: "number",
          label: "Price",
          name: "price"
        },
        {
          type: "string",
          label: "CSS input selector",
          name: "selector"
        },
        {
          type: "string",
          label: "Name",
          name: "name"
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          list: true
        },
        {
          type: "string",
          label: "Benefits",
          name: "benefits",
          list: true
        },
        {
          type: "string",
          label: "Not included",
          name: "not_included",
          list: true
        }
      ]
    }
  ]
};

// components/blocks/booth.tsx
import { Fragment as Fragment5, useEffect as useEffect4, useState as useState8 } from "react";
import Link9 from "next/link";
import { InformationCircleIcon as InformationCircleIcon2, PhotoIcon } from "@heroicons/react/20/solid";
import { Tab as Tab2, Transition as Transition4 } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIcon3 } from "@heroicons/react/20/solid";
import {
  ExclamationCircleIcon as ExclamationCircleIcon3,
  PlusIcon,
  XMarkIcon as XMarkIcon4
} from "@heroicons/react/24/outline";
var boothBlockSchema = {
  name: "booth_registration",
  label: "Booth registration",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    }
  ]
};

// components/blocks/imagegrid.tsx
import Image9 from "next/image";
import React11 from "react";
var imagegridBlockSchema = {
  name: "imagegrid",
  label: "Imagegrid",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "object",
      label: "Images",
      name: "images",
      list: true,
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name"
        },
        {
          type: "string",
          label: "Position",
          name: "position"
        },
        {
          type: "object",
          label: "Image",
          name: "image",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image"
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
};

// components/blocks/pitching.tsx
import { Fragment as Fragment6, useEffect as useEffect5, useState as useState9 } from "react";
import { Transition as Transition5 } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIcon4, InformationCircleIcon as InformationCircleIcon3 } from "@heroicons/react/20/solid";
import {
  ExclamationCircleIcon as ExclamationCircleIcon4,
  PlusIcon as PlusIcon2,
  XMarkIcon as XMarkIcon5
} from "@heroicons/react/24/outline";
var pitchingBlockSchema = {
  name: "pitching_registration",
  label: "Pitching registration",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    }
  ]
};

// components/blocks/cookieTable.tsx
var cookieTableBlockSchema = {
  name: "cookieTable",
  label: "CookieTable",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    }
  ]
};

// .tina/config.tsx
var config = defineStaticConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  cmsCallback: (cms) => {
    cms.flags.set("branch-switcher", true);
    return cms;
  },
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
  process.env.HEAD,
  // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-dos");
      return pack.TinaCloudDOSMediaStore;
    }
  },
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document: document2 }) => {
            return `/posts/${document2._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image"
          },
          {
            type: "rich-text",
            label: "Excerpt",
            name: "excerpt"
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["author"]
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A"
            }
          },
          {
            type: "rich-text",
            label: "Body",
            name: "_body",
            templates: [
              {
                name: "DateTime",
                label: "Date & Time",
                inline: true,
                fields: [
                  {
                    name: "format",
                    label: "Format",
                    type: "string",
                    options: ["utc", "iso", "local"]
                  }
                ]
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text"
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string"
                  }
                ]
              },
              {
                name: "NewsletterSignup",
                label: "Newsletter Sign Up",
                fields: [
                  {
                    name: "children",
                    label: "CTA",
                    type: "rich-text"
                  },
                  {
                    name: "placeholder",
                    label: "Placeholder",
                    type: "string"
                  },
                  {
                    name: "buttonText",
                    label: "Button Text",
                    type: "string"
                  },
                  {
                    name: "disclaimer",
                    label: "Disclaimer",
                    type: "rich-text"
                  }
                ],
                ui: {
                  defaultItem: {
                    placeholder: "Enter your email",
                    buttonText: "Notify Me"
                  }
                }
              }
            ],
            isBody: true
          }
        ]
      },
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        ui: {
          global: true
        },
        fields: [
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              {
                type: "string",
                label: "Name",
                name: "name"
              },
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" }
                ]
              },
              {
                type: "object",
                label: "Nav Links",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home"
                  }
                },
                fields: [
                  {
                    type: "string",
                    label: "Link",
                    name: "href"
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label"
                  }
                ]
              },
              {
                type: "object",
                label: "Social Links",
                name: "social",
                list: true,
                fields: [
                  {
                    type: "string",
                    label: "Title",
                    name: "title"
                  },
                  {
                    type: "string",
                    label: "Link",
                    name: "link"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "string",
                label: "Copyright",
                name: "copyright"
              },
              {
                type: "object",
                label: "Navigation items",
                name: "navitems",
                list: true,
                fields: [
                  {
                    type: "string",
                    label: "Title",
                    name: "title"
                  },
                  {
                    type: "object",
                    label: "List items",
                    name: "listitems",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        label: "Title",
                        name: "title"
                      },
                      {
                        type: "string",
                        label: "Link",
                        name: "link"
                      }
                    ]
                  }
                ]
              },
              {
                type: "object",
                label: "Social Links",
                name: "social",
                list: true,
                fields: [
                  {
                    type: "string",
                    label: "Title",
                    name: "title"
                  },
                  {
                    type: "string",
                    label: "Link",
                    name: "link"
                  }
                ]
              },
              {
                type: "object",
                label: "Banner",
                name: "banner",
                fields: [
                  {
                    type: "string",
                    label: "Text",
                    name: "text"
                  },
                  {
                    type: "string",
                    label: "Agree button text",
                    name: "agree_button"
                  },
                  {
                    type: "string",
                    label: "Close button text",
                    name: "close_button"
                  },
                  {
                    type: "string",
                    label: "Link",
                    name: "link"
                  },
                  {
                    type: "string",
                    label: "Date",
                    name: "date"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Theme",
            name: "theme",
            // @ts-ignore
            fields: [
              {
                type: "string",
                name: "font",
                label: "Font Family",
                options: [
                  {
                    label: "System Sans",
                    value: "sans"
                  },
                  {
                    label: "Nunito",
                    value: "nunito"
                  },
                  {
                    label: "Lato",
                    value: "lato"
                  }
                ]
              },
              {
                type: "string",
                name: "darkMode",
                label: "Dark Mode",
                options: [
                  {
                    label: "System",
                    value: "system"
                  },
                  {
                    label: "Light",
                    value: "light"
                  },
                  {
                    label: "Dark",
                    value: "dark"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Authors",
        name: "author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            label: "Avatar",
            name: "avatar"
          }
        ]
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        ui: {
          router: ({ document: document2 }) => {
            if (document2._sys.filename === "home") {
              return `/`;
            }
            if (document2._sys.filename === "about") {
              return `/about`;
            }
            if (document2._sys.filename === "startup-city-winterthur") {
              return `/startup-city-winterthur`;
            }
            if (document2._sys.filename === "hiring") {
              return `/hiring`;
            }
            if (document2._sys.filename === "program") {
              return `/program`;
            }
            if (document2._sys.filename === "tickets") {
              return `/tickets`;
            }
            if (document2._sys.filename === "terms-and-conditions") {
              return `/terms-and-conditions`;
            }
            if (document2._sys.filename === "privacy-policy") {
              return `/privacy-policy`;
            }
            if (document2._sys.filename === "imprint") {
              return `/imprint`;
            }
            if (document2._sys.filename === "booth") {
              return `/booth`;
            }
            if (document2._sys.filename === "contact") {
              return `/contact`;
            }
            if (document2._sys.filename === "impressions") {
              return `/impressions`;
            }
            if (document2._sys.filename === "partner") {
              return `/partner`;
            }
            if (document2._sys.filename === "partner-documentation") {
              return `/partner-documentation`;
            }
            if (document2._sys.filename === "partner-info") {
              return `/partner-info`;
            }
            if (document2._sys.filename === "partner-intro") {
              return `/partner-intro`;
            }
            if (document2._sys.filename === "pitching") {
              return `/pitching`;
            }
            if (document2._sys.filename === "party") {
              return `/party`;
            }
            if (document2._sys.filename === "faq") {
              return `/faq`;
            }
            return void 0;
          }
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            description: "The title of the page. This is used to display the title in the CMS",
            isTitle: true,
            required: true
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true
            },
            templates: [
              heroBlockSchema,
              speakersBlockSchema,
              partnersBlockSchema,
              countdownBlockSchema,
              positionsBlockSchema,
              partnerFormSchema,
              teamBlockSchema,
              tabsBlockSchema,
              boothBlockSchema,
              dropdownBlockSchema,
              benefitsBlockSchema,
              overviewBlockSchema,
              galleryBlockSchema,
              titoBlockSchema,
              seoBlockSchema,
              pricingBlockSchema,
              contentBlockSchema,
              contentWideBlockSchema,
              imagegridBlockSchema,
              pitchingBlockSchema,
              cookieTableBlockSchema
            ]
          }
        ]
      }
    ]
  }
});
var config_default = config;
export {
  config_default as default
};
