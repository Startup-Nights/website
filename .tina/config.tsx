import { defineStaticConfig } from "tinacms";
import { speakersBlockSchema } from "../components/blocks/speakers";
import { positionsBlockSchema } from "../components/blocks/positions";
import { heroBlockSchema } from "../components/blocks/hero";
import { teamBlockSchema } from "../components/blocks/team";
import { partnersBlockSchema } from "../components/blocks/partners";
import { countdownBlockSchema } from "../components/blocks/countdown";
import { tabsBlockSchema } from "../components/blocks/tabs";
import { dropdownBlockSchema } from "../components/blocks/dropdown";
import { benefitsBlockSchema } from "../components/blocks/benefits";
import { overviewBlockSchema } from "../components/blocks/overview";
import { galleryBlockSchema } from "../components/blocks/gallery";
import { titoBlockSchema } from "../components/blocks/tito";
import { seoBlockSchema } from "../components/blocks/seo";
import { contentBlockSchema } from "../components/blocks/content";
import { contentWideBlockSchema } from "../components/blocks/content_wide";
import { pricingBlockSchema } from "../components/blocks/pricing";
import { boothBlockSchema } from "../components/blocks/booth";
import { imagegridBlockSchema } from "../components/blocks/imagegrid";
import { pitchingBlockSchema } from "../components/blocks/pitching";
import { cookieTableBlockSchema } from "../components/blocks/cookieTable";
import { programBlockSchema } from "../components/blocks/program";
import { boothApprovedBlockSchema } from "../components/blocks/booth_approved";
import { cropBlockSchema } from "../components/blocks/crop";
import { quotesBlockSchema } from "../components/blocks/quotes";

const config = defineStaticConfig({
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
    cmsCallback: (cms) => {
        cms.flags.set("branch-switcher", true);
        return cms;
    },
    branch:
        process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
        process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
        process.env.HEAD!, // Netlify branch env
    token: process.env.TINA_TOKEN!,
    media: {
        loadCustomStore: async () => {
            const pack = await import("next-tinacms-dos");
            return pack.TinaCloudDOSMediaStore;
        },
    },
    build: {
        publicFolder: "public", // The public asset folder for your framework
        outputFolder: "admin", // within the public folder
    },
    schema: {
        collections: [
            {
                label: "Blog Posts",
                name: "post",
                path: "content/posts",
                format: "mdx",
                ui: {
                    router: ({ document }) => {
                        return `/posts/${document._sys.filename}`;
                    },
                },
                fields: [
                    {
                        type: "string",
                        label: "Title",
                        name: "title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "image",
                        name: "heroImg",
                        label: "Hero Image",
                    },
                    {
                        type: "rich-text",
                        label: "Excerpt",
                        name: "excerpt",
                    },
                    {
                        type: "reference",
                        label: "Author",
                        name: "author",
                        collections: ["author"],
                    },
                    {
                        type: "datetime",
                        label: "Posted Date",
                        name: "date",
                        ui: {
                            dateFormat: "MMMM DD YYYY",
                            timeFormat: "hh:mm A",
                        },
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
                                        options: ["utc", "iso", "local"],
                                    },
                                ],
                            },
                            {
                                name: "BlockQuote",
                                label: "Block Quote",
                                fields: [
                                    {
                                        name: "children",
                                        label: "Quote",
                                        type: "rich-text",
                                    },
                                    {
                                        name: "authorName",
                                        label: "Author",
                                        type: "string",
                                    },
                                ],
                            },
                            {
                                name: "NewsletterSignup",
                                label: "Newsletter Sign Up",
                                fields: [
                                    {
                                        name: "children",
                                        label: "CTA",
                                        type: "rich-text",
                                    },
                                    {
                                        name: "placeholder",
                                        label: "Placeholder",
                                        type: "string",
                                    },
                                    {
                                        name: "buttonText",
                                        label: "Button Text",
                                        type: "string",
                                    },
                                    {
                                        name: "disclaimer",
                                        label: "Disclaimer",
                                        type: "rich-text",
                                    },
                                ],
                                ui: {
                                    defaultItem: {
                                        placeholder: "Enter your email",
                                        buttonText: "Notify Me",
                                    },
                                },
                            },
                        ],
                        isBody: true,
                    },
                ],
            },
            {
                label: "Global",
                name: "global",
                path: "content/global",
                format: "json",
                ui: {
                    global: true,
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
                                name: "name",
                            },
                            {
                                type: "object",
                                label: "Nav CTAs",
                                name: "nav_ctas",
                                list: true,
                                fields: [
                                    {
                                        type: "string",
                                        label: "Link",
                                        name: "href",
                                    },
                                    {
                                        type: "string",
                                        label: "Title",
                                        name: "title",
                                    },
                                    {
                                        type: "string",
                                        label: "Icon",
                                        name: "icon"
                                    },
                                    {
                                        type: "boolean",
                                        label: "Primary button",
                                        name: "primary"
                                    }
                                ]
                            },
                            {
                                type: "object",
                                label: "Nav Links",
                                name: "nav",
                                list: true,
                                fields: [
                                    {
                                        type: "string",
                                        label: "Link",
                                        name: "href",
                                    },
                                    {
                                        type: "string",
                                        label: "Label",
                                        name: "label",
                                    },
                                    {
                                        type: "object",
                                        name: "subitems",
                                        list: true,
                                        fields: [
                                            {
                                                type: "string",
                                                label: "Link",
                                                name: "href",
                                            },
                                            {
                                                type: "string",
                                                label: "Label",
                                                name: "label",
                                            },
                                            {
                                                type: "string",
                                                label: "Description",
                                                name: "description"
                                            },
                                            {
                                                type: "string",
                                                label: "Icon",
                                                name: "icon"
                                            },
                                        ]
                                    },
                                    {
                                        type: "object",
                                        label: "CTAs",
                                        name: "callsToAction",
                                        list: true,
                                        fields: [
                                            {
                                                type: "string",
                                                label: "Link",
                                                name: "href",
                                            },
                                            {
                                                type: "string",
                                                label: "Label",
                                                name: "label",
                                            },
                                            {
                                                type: "string",
                                                label: "Icon",
                                                name: "icon"
                                            },
                                        ]
                                    }
                                ],
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
                                        name: "title",
                                    },
                                    {
                                        type: "string",
                                        label: "Link",
                                        name: "link",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "object",
                        label: "Footer",
                        name: "footer",
                        fields: [
                            {
                                type: "string",
                                label: "Copyright",
                                name: "copyright",
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
                                        name: "title",
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
                                                name: "title",
                                            },
                                            {
                                                type: "string",
                                                label: "Link",
                                                name: "link",
                                            },
                                        ],
                                    },
                                ],
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
                                        name: "title",
                                    },
                                    {
                                        type: "string",
                                        label: "Link",
                                        name: "link",
                                    },
                                ],
                            },
                            {
                                type: "object",
                                label: "Banner",
                                name: "banner",
                                fields: [
                                    {
                                        type: "string",
                                        label: "Text",
                                        name: "text",
                                    },
                                    {
                                        type: "string",
                                        label: "Agree button text",
                                        name: "agree_button",
                                    },
                                    {
                                        type: "string",
                                        label: "Close button text",
                                        name: "close_button",
                                    },
                                    {
                                        type: "string",
                                        label: "Link",
                                        name: "link",
                                    },
                                    {
                                        type: "string",
                                        label: "Date",
                                        name: "date",
                                    },
                                ],
                            },
                        ],
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
                                        value: "sans",
                                    },
                                    {
                                        label: "Nunito",
                                        value: "nunito",
                                    },
                                    {
                                        label: "Lato",
                                        value: "lato",
                                    },
                                ],
                            },
                            {
                                type: "string",
                                name: "darkMode",
                                label: "Dark Mode",
                                options: [
                                    {
                                        label: "System",
                                        value: "system",
                                    },
                                    {
                                        label: "Light",
                                        value: "light",
                                    },
                                    {
                                        label: "Dark",
                                        value: "dark",
                                    },
                                ],
                            },
                        ],
                    },
                ],
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
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Avatar",
                        name: "avatar",
                    },
                ],
            },
            {
                label: "Pages",
                name: "page",
                path: "content/pages",
                ui: {
                    router: ({ document }) => {
                        if (document._sys.filename === "home") {
                            return `/`;
                        }
                        if (document._sys.filename === "about") {
                            return `/about`;
                        }
                        if (document._sys.filename === "startup-city-winterthur") {
                            return `/startup-city-winterthur`;
                        }
                        if (document._sys.filename === "hiring") {
                            return `/hiring`;
                        }
                        if (document._sys.filename === "program") {
                            return `/program`;
                        }
                        if (document._sys.filename === "crop") {
                            return `/crop`;
                        }
                        if (document._sys.filename === "speakers") {
                            return `/speakers`;
                        }
                        if (document._sys.filename === "tickets") {
                            return `/tickets`;
                        }
                        if (document._sys.filename === "terms-and-conditions") {
                            return `/terms-and-conditions`;
                        }
                        if (document._sys.filename === "privacy-policy") {
                            return `/privacy-policy`;
                        }
                        if (document._sys.filename === "imprint") {
                            return `/imprint`;
                        }
                        if (document._sys.filename === "booth") {
                            return `/booth`;
                        }
                        if (document._sys.filename === "startups") {
                            return `/startups`;
                        }
                        if (document._sys.filename === "contact") {
                            return `/contact`;
                        }
                        if (document._sys.filename === "impressions") {
                            return `/impressions`;
                        }
                        if (document._sys.filename === "partner") {
                            return `/partner`;
                        }
                        if (document._sys.filename === "partner-documentation") {
                            return `/partner-documentation`;
                        }
                        if (document._sys.filename === "partner-info") {
                            return `/partner-info`;
                        }
                        if (document._sys.filename === "partner-intro") {
                            return `/partner-intro`;
                        }
                        if (document._sys.filename === "pitching") {
                            return `/pitching`;
                        }
                        if (document._sys.filename === "party") {
                            return `/party`;
                        }
                        if (document._sys.filename === "faq") {
                            return `/faq`;
                        }
                        return undefined;
                    },
                },
                fields: [
                    {
                        type: "string",
                        label: "Title",
                        name: "title",
                        description:
                            "The title of the page. This is used to display the title in the CMS",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "object",
                        list: true,
                        name: "blocks",
                        label: "Sections",
                        ui: {
                            visualSelector: true,
                        },
                        templates: [
                            heroBlockSchema,
                            speakersBlockSchema,
                            partnersBlockSchema,
                            countdownBlockSchema,
                            positionsBlockSchema,
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
                            cookieTableBlockSchema,
                            quotesBlockSchema,
                            programBlockSchema,
                            cropBlockSchema,
                            boothApprovedBlockSchema,
                        ],
                    },
                ],
            },
        ],
    },
});

export default config;
