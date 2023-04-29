const ContentSecurityPolicy = `
  default-src *;
  script-src * 'unsafe-inline' 'unsafe-eval';
  child-src *;
  style-src * 'unsafe-inline';
  font-src * data:;
`
const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    },
]

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
        return [
            {
                source: '/tickets',
                headers: securityHeaders,
            },
        ]
    }
};