module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'startupnights.fra1.digitaloceanspaces.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'startupnights.fra1.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**'
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/about-us",
                destination: "/about",
            },
            {
                source: "/partner-intro",
                destination: "/partner",
            },
            {
                source: "/tickets",
                destination: "https://www.b2match.com/e/startup-nights-2024/sign-up",
            },
            {
                source: "/admin",
                destination: "/admin/index.html",
            },
        ];
    },
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en'
    }
};
