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
                hostname: 'source.unsplash.com',
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
    async headers() {
        return [{
            source: '',
            headers: titoHeaders,
        }]
    },
};

const titoHeaders = [`font-src data:application/font-woff2;base64,d09GMgABAAAAAbWoAA0AAAAExvAAAbVMAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoYEG4PPBhyBpkIGYACB53gKiI0EhuNfC88wAAE2AiQDzywEIAWOLAeC7GNbt0m00jRku6v/+KNtagYUIG44mANFTUK0NYa37YEHMQldrZpJIDG2m9s/gAbkY0HZMcLhQGj1v01IgLTDvKYUbpvpNiTIfy6Pzvzz7P///////////////28q+fGkW2/e3535f7enNDaNYiAQSDjoSkABOU+vqVegzMzgQ+KRZpYrCoSyQlErWiG0RaebJCV6XrRCfzAciZ1MWANzGE8wZeqQx2U27cwVtjv12uhsb3c/uo6679OywoFq5j28LMyPNfH2LqgagnrhbXGYJgiJCu+Rh1wGq83LlmFCj3R5PEtPBkjdVlJRnhLDGVPn1owWWtd1qGukYk0UdUUMB62N9JHNJ2zeNZhK...rI8DtjSwMPu7OqQiNLK2jdk+DVKV0j4ZBLhb24KmqT0LScq0qOj1Yy7mBxeKosD0YtOqs887Km5xazTGT06Hvj3dX2HA8bBDb1WrJTzlH7yc2RP3cgJvEVAQxKuCQtA0SYUCauHFhEJUVUlYmrhrgagDS6tkxcPYnIgFROztQpQ8qltvHKMbySI6vaxqvGeDUUU5vaxqtjKqPraeQeeNiWicuD6jKxtW3j5WEtwLB6ELh7/UQVm60/3vcQDSDChDIupNLGunjlABEmlHEh1eg7hJKjBAOKPKT4pnrxFhoAcr296/VjL7gR+W9OpPiARhEOybtczXu1zhxGIXUqmRh+mMvQy4MIeM5oGJC92b0mRQPoxJR41afmOQJqXYMgTCjjQipj44oQSaVNvGLEhDIupNLGunglAMNToQw2fDSecdEpTWDSitKmFzfeQQDc6AEPJjSsvLSxbo7ApBXGhVTaWBevCBBhQhkXUmnj4pUAIkwo40Ku+pwT/Prv/x8=`];