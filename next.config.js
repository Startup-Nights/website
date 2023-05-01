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
                hostname: 'source.unsplash.com',
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
                source: "/admin",
                destination: "/admin/index.html",
            },
        ];
    },
};